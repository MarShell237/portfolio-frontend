import { ref, computed } from 'vue'

interface User {
    id: number
    email: string
    name: string
    photo?: string
    is_email_verified?: boolean
    role: string
}

export const user = ref<User | null>(null)

export function useAuth() {
    const setUser = (u: User, remember = false) => {
        user.value = u
        const storage = remember ? localStorage : sessionStorage
        storage.setItem('user', JSON.stringify(u))
    }

    const loadUser = async () => {
        try {
            const data = localStorage.getItem('user') || sessionStorage.getItem('user')
            if (data) {
                try {
                    user.value = JSON.parse(data)
                    return
                } catch {
                    clearUser()
                }
            }

            const { data: res, error } = await useFetch('/api/v1/users/connected', {
                baseURL: useRuntimeConfig().public.apiUrl,
                credentials: 'include',
            })

            if (error.value) {
                clearUser()
                return
            }

            if (res.value?.data) {
                user.value = res.value.data
                sessionStorage.setItem('user', JSON.stringify(res.value.data))
            } else {
                clearUser()
            }
        } catch (err) {
            clearUser()
        }
    }

    const clearUser = () => {
        user.value = null
        localStorage.removeItem('user')
        sessionStorage.removeItem('user')
    }

    const isLoggedIn = computed(() => !!user.value)

    return { user, setUser, loadUser, clearUser, isLoggedIn }
}

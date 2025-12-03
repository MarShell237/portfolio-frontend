export function useInitials() {
    const getInitials = (name?: string, email?: string) => {
        // Aucun nom ni email → fallback
        if (!name && !email) return "?"

        // On prend le nom si il existe, sinon la partie avant @ de l'email
        const source = name || email?.split("@")[0] || ""
        
        // On récupère les mots utiles (ex: "Jean Pierre Dupont" → ["Jean", "Pierre", "Dupont"])
        const words = source.split(" ").filter(Boolean)

        // On prend les 2 premières lettres
        const initials = words
            .slice(0, 2)
            .map((w) => w.charAt(0).toUpperCase())
            .join("")

        return initials || "?"
    }

    return { getInitials }
}
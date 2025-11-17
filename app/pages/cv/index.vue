<template>
    <section class="flex flex-col items-center mt-24 mb-12">
        <h2 class="text-3xl font-bold text-balance">Curriculum Vitae</h2>
        <p class="lg:text-base text-justify py-6">Marcel J. DJIOFACK - Ingénieur Logiciel Full Stack</p>
        <Button as-child>
            <a href="/cv/Marcel.pdf" class="text-xs" target="_blank" rel="noopener noreferrer"><Download /> Télécharger CV (PDF)</a>
        </Button>
    </section>
    <section class="text-justify">
        <h2 class="flex items-center gap-2 text-3xl font-bold text-balance p4-8"><IdCard class="inline text-primary"/> À propos de moi</h2>
        <p class="py-2 text-sm">
            Depuis tout petit à Bertoua, j’ai su que l’informatique, c’était mon truc. À 8 ans, les jeux vidéo 
            me fascinaient déjà, mais c’est à 12 ans, pendant un stage de vacances gagné grâce à une bourse, que
            tout a basculé : j’ai touché à la bureautique, aux réseaux, à la logique pure… et là, bam, plus rien
            d’autre n’existait. 
            <br>Petite anecdote, quand on a rempli la fiche de préinscription à l'université, les autres mettaient 
            info en premier, maths en deuxième, physique en troisième. Moi ? Info, info, info. Pas de plan B. 
            Depuis ce jour, je vis code. 8 à 12 heures par jour quand je peux, parfois plus. 
            <br>J’ai marché 22 km aller-retour, sac avec mon PC sur le dos, du village au seul coworking gratuit 
            du centre-ville ouvert par Orange, juste pour avoir du courant et de la connexion stable. 
            6 heures de marche quotidienne, 11 km sous le soleil ou la pluie, sans jamais râler. 
            Parce que quand le code compile enfin, y’a rien qui vaut ça. C’est comme ça que ma passion est 
            devenue une obsession saine : je construis, je casse, je recommence, jusqu’à ce que ça marche.
        </p>
        <p class="py-2 text-sm">
            Aujourd’hui, j’ai un Bac+2 en informatique fondamentale (l’équivalent BTS/DUT), où j’ai bouffé 
            l’histoire de l’informatique, l’architecture des processeurs, le fonctionnement des réseaux, les
            bases du web et du mobile. Mais ça ne suffisait pas. Je voulais du génie logiciel, du vrai, du 
            costaud. Problème : ma famille et moi n’avions tout simplement pas les moyens d’aller dans une 
            école privée à Yaoundé ou Douala où, même en payant la formation, la vie coûte un bras. Plutôt 
            que de pleurer, j’ai pris ça comme un défi. 
            <br>Depuis deux ans, je me forme en autodidacte pur et dur : Laravel, Nuxt, Tauri, Rust, architecture
            propre, tests, CI/CD… tout. J’ai sorti Ngaan, le calendrier Yemba numérique qui permet aux gens de 
            Dschang de savoir les jours de marché sans racheter le calendrier papier chaque année. J’ai aussi 
            commencé Archive Hub (la plateforme qui va enfin numériser et sauvegarder les mémoires, TD, 
            corrections et proclamations des universités camerounaises). Deux ans de nuits courtes, de projets 
            personnels qui plantent à 4h du mat’, de lectures jusqu’à l’épuisement. Deux ans où j’ai transformé 
            le « tu ne pourras jamais sans diplôme » en carburant. 
            <br>Aujourd’hui je suis prêt. Techniquement, je tiens la route. Mentalement, je suis en acier trempé.
        </p>
        <p class="py-2 text-sm">
            Et pour Demain ?, mon objectif est clair.
            <br>À court terme : entrer dans l’industrie par n’importe quelle porte – CDI, mission freelance, contrat,
            peu importe – et continuer à monter en compétences techniques et humaines à une vitesse folle.
            <br>À long terme : fonder Capital M Industries, ma propre structure 100 % africaine, experte en génie 
            logiciel et en solutions qui résolvent de vrais problèmes du continent. Je veux transformer Dschang 
            et ses alentours en ce que j’appelle "la Vallée Technologique de Dschang", l’équivalent camerounais 
            (et demain africain) de la Silicon Valley : un écosystème où les jeunes n’auront plus à marcher 22 km
            pour coder.
            <br>Et quand je dis que je rêve grand, je sais de qui je tiens cette folie positive :
            <br>Elon Reeve Musk, parce qu’à chaque nouveau projet (PayPal, SpaceX, Tesla, Neuralink, Twitter/X…) on 
            lui a dit « c’est impossible, tu vas te planter ». Et à chaque fois c’est exactement cette phrase qui
            l’a poussé à réussir. Moi c’est pareil : plus on me répète « sans sans diplôme tu n’y arriveras 
            jamais », plus j’ai envie de leur prouver le contraire avec des résultats concrets, visibles, 
            incontestables.
            <br>Linus Benedict Torvalds, pour son niveau technique absolument inhumain : il a écrit le noyau Linux à 
            21 ans et, quelques années plus tard, Git en deux semaines parce qu’il en avait marre des outils 
            existants. Quand je bloque sur un problème hardcore d’architecture ou de performance, je me dis 
            « si Linus a réussi ça seul dans sa chambre d’étudiant, j’ai zéro excuse ».

            <br>Ces deux-là sont mes références absolues : l’un pour l’état d’esprit anti-fragile et la capacité à 
            transformer le « impossible » en carburant, l’autre pour la maîtrise technique pure qui force le 
            respect du monde entier.
        </p>
        <p class="py-2 text-sm">
            Je ne perds que le jour où j’abandonne, et tant que je respire, j’avance. Ce qui ne me tue pas me rend plus fort.
        </p>
        <p class="py-2 text-base font-bold uppercase">
            Si tu ressens la même énergie, <NuxtLink to="/contact" class="text-blue-600 underline">écris-moi</NuxtLink>. On a un continent entier à mettre à jour. 🔥
        </p>
        <p class="py-2 text-sm">
            Marcel J. DJIOFACK Full-Stack Engeneer Dschang, Cameroun
        </p>
        <p class="py-2 text-sm">Prêt à tout casser. 🔥</p>
    </section>
</template>

<script lang="ts" setup>
    import { Button } from '@/components/ui/button';
    import { Download } from 'lucide-vue-next';
    import { IdCard } from 'lucide-vue-next';

</script>

<style scoped>
    
</style>
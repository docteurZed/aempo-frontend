<script setup>
import PublicLayout from '@/layouts/PublicLayout.vue'
import Section from '@/components/pages/public/Section.vue'
import SectionTitle from '@/components/pages/public/SectionTitle.vue'
import Button from '@/components/ui/button/Button.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import AvatarImage from '@/components/ui/avatar/AvatarImage.vue'
import Textarea from '@/components/form/input/Textarea.vue'
import OtherHeroSection from '@/components/pages/public/OtherHeroSection.vue'

const allPosts = [
    {
        id: 1,
        title: 'Les avancées de la recherche médicale à la FSS',
        content: `
            <p>Découvrez comment nos chercheurs contribuent à l’innovation médicale au Togo. 
            Des projets innovants en santé publique, biologie, et recherche clinique sont mis en œuvre.</p>
            <p>Les étudiants participent activement aux projets et publient des articles scientifiques dans les revues locales et internationales.</p>
        `,
        image: '/img/image-1.jpg',
        category: 'Recherche',
        categoryVariant: 'info',
        date: '3 novembre 2025',
        author: 'Dr. Kossi Améyo',
    },
    {
        id: 2,
        title: 'Journée portes ouvertes 2025',
        content: `
            <p>Retour sur une journée d’échanges entre étudiants, enseignants et professionnels de santé. 
            Des ateliers pratiques, conférences et stands d’information ont été organisés.</p>
        `,
        image: '/img/image-2.jpg',
        category: 'Événement',
        categoryVariant: 'secondary',
        date: '28 octobre 2025',
        author: 'Comité FSS',
    },
    {
        id: 3,
        title: 'Nouveaux partenariats universitaires',
        content: `
            <p>La FSS s’allie à plusieurs universités africaines pour renforcer la formation médicale. 
            Des programmes d’échange et de co-encadrement des projets étudiants sont prévus.</p>
        `,
        image: '/img/image-3.jpg',
        category: 'Partenariat',
        categoryVariant: 'success',
        date: '15 octobre 2025',
        author: 'Direction des Relations Extérieures',
    },
    {
        id: 4,
        title: 'Conférence annuelle sur la santé publique',
        content: `
            <p>Un événement majeur réunissant experts et étudiants pour débattre des enjeux sanitaires actuels. 
            Thèmes principaux : prévention, politique de santé, et innovations thérapeutiques.</p>
        `,
        image: '/img/image-4.jpg',
        category: 'Événement',
        categoryVariant: 'secondary',
        date: '10 octobre 2025',
        author: 'Comité Scientifique',
    },
    {
        id: 5,
        title: 'Nouvelles installations au laboratoire de biologie',
        content: `
            <p>Des équipements modernes pour renforcer la recherche et la formation pratique. 
            Les étudiants peuvent désormais réaliser des expériences avancées en toute sécurité.</p>
        `,
        image: '/img/image-5.jpg',
        category: 'Infrastructure',
        categoryVariant: 'warning',
        date: '5 octobre 2025',
        author: 'Direction Technique',
    },
]

const route = useRoute()
const postId = Number(route.params.id)
const post = computed(() => allPosts.find((p) => p.id === postId))

const categories = [...new Set(allPosts.map((p) => p.category))]
const tags = ['Recherche', 'Événement', 'Partenariat', 'Infrastructure']

const recentPosts = computed(() => allPosts.filter((p) => p.id !== postId).slice(0, 4))

const comments = ref([
    {
        name: 'Alice T.',
        date: '5 novembre 2025',
        content: 'Article très intéressant ! Merci pour ces informations détaillées.',
    },
    {
        name: 'Jean P.',
        date: '6 novembre 2025',
        content: 'Merci pour le partage, j’ai appris beaucoup sur les initiatives de la FSS.',
    },
])

const newComment = ref('')

function submitComment() {
    if (!newComment.value.trim()) return
    comments.value.push({
        name: 'Utilisateur',
        date: new Date().toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }),
        content: newComment.value,
    })
    newComment.value = ''
}
</script>

<template>
    <PublicLayout>
        <OtherHeroSection
            title="Blog"
            subtitle="Explorez les dernières publications."
            :breadcrumbItems="[
                { label: 'Accueil', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Détail', href: '/' },
            ]"
            backgroundImage="/img/image-4.jpg"
        />

        <Section>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div class="lg:col-span-3 space-y-6">
                    <img
                        :src="post?.image"
                        alt=""
                        class="w-full h-96 object-cover rounded-lg shadow"
                    />
                    <div class="space-y-2">
                        <Badge :variant="post?.categoryVariant">{{ post?.category }}</Badge>
                        <h1 class="text-3xl font-bold text-zinc-800 dark:text-zinc-200">
                            {{ post?.title }}
                        </h1>
                        <div
                            class="text-sm text-zinc-500 dark:text-zinc-400 flex gap-2 items-center"
                        >
                            <span>Par {{ post?.author }}</span> • <span>{{ post?.date }}</span>
                        </div>
                    </div>
                    <div
                        class="prose prose-zinc dark:prose-invert text-zinc-700 dark:text-zinc-300"
                        v-html="post?.content"
                    ></div>
                    <div
                        class="prose prose-zinc dark:prose-invert text-zinc-700 dark:text-zinc-300"
                        v-html="post?.content"
                    ></div>
                    <div
                        class="prose prose-zinc dark:prose-invert text-zinc-700 dark:text-zinc-300"
                        v-html="post?.content"
                    ></div>
                    <div
                        class="prose prose-zinc dark:prose-invert text-zinc-700 dark:text-zinc-300"
                        v-html="post?.content"
                    ></div>

                    <div class="mt-10">
                        <h3 class="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">
                            Commentaires
                        </h3>

                        <div class="space-y-4">
                            <div
                                v-for="(comment, idx) in comments"
                                :key="idx"
                                class="p-4 border border-zinc-400 dark:border-zinc-600 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex gap-3"
                            >
                                <AvatarImage
                                    size="md"
                                    :src="
                                        comment.avatar ||
                                        'https://ui-avatars.com/api/?name=' +
                                            encodeURIComponent(comment.name)
                                    "
                                    alt="Avatar"
                                    roundedFull
                                />

                                <div class="flex-1">
                                    <div
                                        class="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-1"
                                    >
                                        <span class="font-semibold">{{ comment.name }}</span>
                                        <span>{{ comment.date }}</span>
                                    </div>
                                    <p class="text-zinc-600 dark:text-zinc-500 text-sm">
                                        {{ comment.content }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <Textarea
                                v-model="newComment"
                                placeholder="Écrire un commentaire..."
                                rows="4"
                                label="Votre commentaire"
                                helperText="Soyez respectueux et constructif dans vos commentaires"
                            />
                            <Button class="mt-2" @click="submitComment">Envoyer</Button>
                        </div>
                    </div>
                </div>

                <div class="space-y-6">
                    <div>
                        <h4 class="font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                            Articles récents
                        </h4>
                        <div class="space-y-2">
                            <div
                                v-for="p in recentPosts"
                                :key="p.id"
                                class="flex gap-2 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 p-2 rounded-lg"
                            >
                                <img
                                    :src="p.image"
                                    alt=""
                                    class="w-16 h-16 object-cover rounded-lg"
                                />
                                <div class="flex-1">
                                    <p
                                        class="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                                    >
                                        {{ p.title }}
                                    </p>
                                    <p class="text-xs text-zinc-500 dark:text-zinc-400">
                                        {{ p.date }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                            Catégories
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            <Button
                                v-for="cat in categories"
                                :key="cat"
                                variant="transparent"
                                size="sm"
                                class="cursor-pointer flex items-center gap-1"
                            >
                                {{ cat }}
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Tags</h4>
                        <div class="flex flex-wrap gap-2">
                            <Badge v-for="tag in tags" :key="tag" variant="secondary">
                                {{ tag }}
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    </PublicLayout>
</template>

<style scoped>
.prose p {
    margin-bottom: 1rem;
}
</style>

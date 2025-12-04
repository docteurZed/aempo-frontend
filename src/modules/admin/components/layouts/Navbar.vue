<script setup>
import { Bell, Eye, Menu, MessagesSquare } from 'lucide-vue-next'
import {
    AppLogo,
    Avatar,
    AvatarImage,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    SearchInput,
    ThemeSwitcher,
} from '@/components'
import { useAuthStore } from '@/stores'
import router from '@/router'
import { addToast } from '@/composables'
import { onMounted, ref } from 'vue'

const emit = defineEmits(['toggle-sidebar'])

const auth = useAuthStore()

async function logout() {
    await auth.logout()

    addToast({ message: 'Déconnexion réussie', variant: 'success' })
    router.push({ name: 'login' })
}
</script>

<template>
    <header
        class="h-16 w-full flex items-center justify-between py-4 px-8 bg-white dark:bg-zinc-950/50 border-b border-strong"
    >
        <button
            class="md:hidden p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
            @click="$emit('toggle-sidebar')"
        >
            <Menu class="w-5 h-5 text-default" />
        </button>

        <div class="hidden md:block">
            <AppLogo />
        </div>

        <div class="flex items-center gap-2 md:gap-3">
            <SearchInput />

            <ThemeSwitcher />

            <div class="hidden md:block">
                <Dropdown size="xl">
                    <DropdownTrigger>
                        <div
                            class="relative p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
                        >
                            <Bell class="w-6 h-6 text-default" />
                            <span
                                class="absolute top-1 right-1 block w-2 h-2 bg-error-500 rounded-full"
                            ></span>
                        </div>
                    </DropdownTrigger>

                    <DropdownMenu align="right" size="xl">
                        <div
                            class="w-full bg-white dark:bg-zinc-900 rounded-lg shadow-md divide-y divide-zinc-300 dark:divide-zinc-700"
                        >
                            <div
                                class="px-4 py-2 font-medium text-center text-default bg-muted rounded-t-lg"
                            >
                                Notifications
                            </div>

                            <DropdownItem>
                                <div class="flex">
                                    <div class="relative shrink-0">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/women/65.jpg"
                                            rounded-full=""
                                        />

                                        <MessagesSquare
                                            class="absolute p-1 flex items-center justify-center w-5 h-5 -mt-2 ms-6 bg-info border text-white border-default rounded-full"
                                        />
                                    </div>
                                    <div class="w-full ps-3">
                                        <div
                                            class="text-sm text-default mb-1.5"
                                        >
                                            Nouveau message de
                                            <span
                                                class="font-semibold"
                                                >Awa Diop</span
                                            >
                                            : "Salut ! Disponible ?"
                                        </div>
                                        <div class="text-xs text-secondary">Il y a 2 min</div>
                                    </div>
                                </div>
                            </DropdownItem>

                            <div
                                class="py-2 text-sm font-medium text-center text-default bg-muted hover:bg-zinc-300 dark:hover:bg-zinc-700  rounded-b-sm cursor-pointer"
                            >
                                <div class="inline-flex items-center gap-2 justify-center">
                                    <Eye class="w-4 h-4" />
                                    Voir toutes les notifications
                                </div>
                            </div>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </div>

            <Dropdown>
                <DropdownTrigger>
                    <Avatar rounded-full size="md">{{ auth.user?.initials }}</Avatar>
                </DropdownTrigger>
                <DropdownMenu align="right">
                    <DropdownItem @click="logout">Déconnexion</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </header>
</template>

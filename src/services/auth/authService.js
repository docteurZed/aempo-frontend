import { api, http } from "@/services"

export async function login(payload) {
    return await http.post('/login', payload)
}

export async function logout() {
    return await http.post('/logout')
}

export async function sendResetLink(payload) {
    return await http.post('/forgot-password', payload)
}

export async function resetPassword(payload) {
    return await http.post('/reset-password', payload)
}

export async function fetchUser() {
    return await api.get('/user')
}

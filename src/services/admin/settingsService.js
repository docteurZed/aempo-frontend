import { api, getCookies } from "@/services"

export async function getSettings(group) {
    const res = await api.get(`/settings?group=${group}`)
    return res.data
}

export async function updateSettings(id, payload) {
    const res = await api.put(`/settings/${id}`, payload)
    return res.data
}

import axios from 'axios'
import backendConfig from '@/config/backend'

const BASE_URL = backendConfig.backendUrl

const api = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        "Content-Type": "application/json",
        // "X-Requested-With": "XMLHttpRequest",
        "Accept": "application/json"
    },
    withCredentials: true,
    withXSRFToken: true,
})

const http = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        // "X-Requested-With": "XMLHttpRequest",
        "Accept": "application/json",
    },
    withCredentials: true,
    withXSRFToken: true,
})

export async function getCookies() {
    return http.get("/sanctum/csrf-cookie")
}


function attachInterceptors(client) {
    client.interceptors.response.use(
        (response) => response.data,
        (error) => {
            const status = error.response?.status
            const message =
                error.response?.data?.message ||
                (error.request ? 'Serveur injoignable.' : error.message)

            console.error(`[API ERROR] ${status ?? 'NO_RESPONSE'} → ${message}`)

            throw {
                status,
                message,
                validation: error.response?.data?.errors || null,
            }
        },
    )
}

attachInterceptors(api)
attachInterceptors(http)

export { api, http }

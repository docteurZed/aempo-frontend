<script setup>
import { AuthLayout } from '@/layouts'
import { AuthHeader } from '@/modules/auth'
import Form from '../sections/Form.vue'
import { FormWrapper } from '@/components'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { addToast } from '@/composables'
import { useAuthStore } from '@/stores'

const router = useRouter()
const auth = useAuthStore()
const form = ref({
    email: '',
    password: '',
})
const email = ref('')
const password = ref('')

async function submit() {
    await auth.login(form.value)

    addToast({ message: 'Connexion réussie', variant: 'success' })
    router.push({ name: 'dashboard' })
}
</script>

<template>
    <AuthLayout>
        <AuthHeader heading="Connexion" subheading="Entrez vos données pour vous connecter" />
        <div>
            <FormWrapper :submit-handler="submit">
                <Form v-model:email="form.email" v-model:password="form.password" />
            </FormWrapper>
        </div>
    </AuthLayout>
</template>

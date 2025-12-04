<script setup>
import { AuthLayout } from '@/layouts'
import { AuthHeader } from '@/modules/auth'
import Form from '../sections/Form.vue'
import { FormWrapper } from '@/components'
import { useRouter } from 'vue-router'
import { sendResetLink } from '@/services'
import { ref } from 'vue'
import { addToast } from '@/composables'

const router = useRouter()
const form = ref({
    email: '',
})

async function submit() {
    await sendResetLink(form.value)

    form.value.email = ''
    
    addToast({ message: 'Lien de réinitialisation envoyé', variant: 'success' })
    // router.push({ name: 'login' })
}
</script>

<template>
    <AuthLayout>
        <AuthHeader heading="Mot de passe oubliés" subheading="Entrez vos données pour récupérer votre mot de passe" />
        <div>
            <FormWrapper :submit-handler="submit">
                <Form v-model:email="form.email" />
            </FormWrapper>
        </div>
    </AuthLayout>
</template>

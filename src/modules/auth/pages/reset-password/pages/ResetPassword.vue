<script setup>
import { AuthLayout } from '@/layouts'
import { AuthHeader } from '@/modules/auth'
import Form from '../sections/Form.vue'
import { FormWrapper } from '@/components';
import { useRouter } from 'vue-router';
import { resetPassword } from '@/services';
import { ref } from 'vue';
import { addToast } from '@/composables';

const props = defineProps({
    token: String,
    email: String
})

const router = useRouter()
const form = ref({
    email: props.email || '',
    password: '',
    password_confirmation: '',
    token: props.token || ''
})

async function submit() {
    await resetPassword(form.value)

    addToast({ message: 'Mot de passe réinitialisée avec succèss', variant: 'success' })
    router.push({ name: 'login' })
}
</script>

<template>
    <AuthLayout>
        <AuthHeader heading="Réinitialiser le mot de passe"
            subheading="Choisissez un nouveau mot de passe sécurisé pour votre compte." />
        <div>
            <FormWrapper :submit-handler="submit">
                <Form v-model:email="form.email" v-model:password="form.password"
                    v-model:password_confirmation="form.password_confirmation" />
            </FormWrapper>
        </div>
    </AuthLayout>
</template>

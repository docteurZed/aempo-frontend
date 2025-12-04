<script setup>
import { TextInput, PasswordInput } from '@/components'
import { inject } from 'vue'

const props = defineProps({
    email: String,
    password: String,
    password_confirmation: String,
})

const emit = defineEmits(['update:email', 'update:password'])

const formErrors = inject('formErrors')
</script>

<template>
    <div class="space-y-4">
        <TextInput :modelValue="props.email" @update:modelValue="emit('update:email', $event)" name="email" id="email"
            label="Email" type="email" :error="formErrors?.email" required />

        <PasswordInput :modelValue="props.password" @update:modelValue="emit('update:password', $event)" name="password"
            id="password" label="Mot de passe" :error="formErrors?.password" required />

        <PasswordInput :modelValue="props.password_confirmation"
            @update:modelValue="emit('update:password_confirmation', $event)" name="password_confirmation"
            id="password_confirmation" label="Confirmer le mot de passe" :error="formErrors?.password_confirmation" required />
    </div>
</template>

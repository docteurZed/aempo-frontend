<script setup>
import PasswordInput from '@/components/form/input/PasswordInput.vue'
import TextInput from '@/components/form/input/TextInput.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
  <AuthLayout
    heading="Réinitialiser le mot de passe"
    subheading="Choisissez un nouveau mot de passe sécurisé pour votre compte."
  >
    <div>
      <div action="" class="space-y-4">
        <TextInput name="email" id="email" type="email" label="Email" />
        <PasswordInput name="password" id="password" label="Mot de passe" />
        <PasswordInput
          name="password_confirmation"
          id="password_confirmation"
          label="Confirmer le mot de passe"
        />

        <Button variant="primary" as="router-link" :to="{name: 'dashboard'}" class="w-full mt-4">Réinitialiser le mot de passe</Button>
      </div>
    </div>
  </AuthLayout>
</template>

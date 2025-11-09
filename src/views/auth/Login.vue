<script setup>
import PasswordInput from '@/components/form/input/PasswordInput.vue'
import TextInput from '@/components/form/input/TextInput.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
  <AuthLayout
    heading="Connexion"
    subheading="Veuillez entrer vos identifiants pour vous connecter."
  >
    <div>
      <div class="space-y-4">
        <TextInput name="email" id="email" type="email" label="Email" />
        <PasswordInput
          name="password"
          id="password"
          label="Mot de passe"
          :forgot-password="true"
          :forgot-password-link="{ name: 'forgotPassword' }"
        />

        <Button variant="primary" as="router-link" :to="{name: 'dashboard'}" class="w-full mt-4">Connexion</Button>
      </div>
    </div>
  </AuthLayout>
</template>

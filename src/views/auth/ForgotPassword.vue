<script setup>
import PasswordInput from '@/components/form/input/PasswordInput.vue'
import TextInput from '@/components/form/input/TextInput.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
  <AuthLayout
    heading="Mot de passe oublié"
    subheading="Entrez votre adresse e-mail pour recevoir un lien de réinitialisation."
  >
    <div>
      <div action="" class="space-y-4">
        <TextInput name="email" id="email" type="email" label="Email" />

        <Button variant="primary" as="router-link" :to="{name: 'dashboard'}" class="w-full mt-4">Lien de réinitialisation</Button>
      </div>
    </div>
  </AuthLayout>
</template>

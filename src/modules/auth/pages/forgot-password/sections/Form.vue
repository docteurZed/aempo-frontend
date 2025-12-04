<script setup>
import { TextInput } from '@/components'
import { inject } from 'vue'

const props = defineProps({
    email: String,
})

const emit = defineEmits(['update:email'])

const formErrors = inject('formErrors')
</script>

<template>
    <div class="space-y-4">
        <TextInput :modelValue="props.email" @update:modelValue="emit('update:email', $event)" name="email" id="email"
            label="Email" type="email" :error="formErrors?.email" required />
    </div>
</template>

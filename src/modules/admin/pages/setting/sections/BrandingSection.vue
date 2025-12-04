<script setup>
import { FormWrapper, ImageDropzone } from '@/components'
import { reactive } from 'vue';

function test() {
    console.log('OK')
}

const settings = reactive({
    logo: null,
    favicon: null,
})
</script>

<template>
    <div class="space-y-4">
        <FormWrapper :submitHandler="test">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ImageDropzone v-model="settings.logo" label="Logo" />
                <ImageDropzone v-model="settings.favicon" label="Favicon" />
            </div>
        </FormWrapper>
    </div>
</template>
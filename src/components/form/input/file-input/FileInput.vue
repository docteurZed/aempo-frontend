<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue'
import { fileInputProps } from './file-input.props'

const props = defineProps(fileInputProps)

const emit = defineEmits(['update:modelValue'])

const selectedFiles = ref([])

const borderClasses = computed(() =>
    props.error
        ? 'border-strong focus:ring-1 focus-red focus:border-error-500 dark:focus:border-error-600'
        : 'border-strong focus:ring-1 focus-default',
)

function handleFileChange(event) {
    const files = Array.from(event.target.files)
    selectedFiles.value = files
    emit('update:modelValue', props.multiple ? files : files[0] || null)
}
</script>

<template>
    <div>
        <label
            v-if="label"
            :for="id"
            class="block mb-2 font-semibold text-default"
        >
            {{ label }}
        </label>

        <input
            type="file"
            :id="id"
            :name="name"
            :required="required"
            :multiple="multiple"
            @change="handleFileChange"
            class="block w-full text-sm text-default bg-zinc-200/50 dark:bg-zinc-800/50 file:py-2.5 file:px-4 file:rounded-l-lg file:border-0 file:bg-zinc-300 dark:file:bg-zinc-700 file:text-zinc-800 dark:file:text-zinc-200 hover:file:bg-zinc-400/80 dark:hover:file:bg-zinc-600/80 border rounded-lg"
            :class="borderClasses"
        />

        <p v-if="selectedFiles.length" class="mt-2 text-sm text-muted">
            Fichier(s) sélectionné(s):
            <span v-for="(file, i) in selectedFiles" :key="i"
                >{{ file.name }}<span v-if="i < selectedFiles.length - 1">, </span></span
            >
        </p>

        <p v-if="helperText && !error" class="mt-2 text-sm text-muted">
            {{ helperText }}
        </p>
        <p v-if="error" class="mt-2 text-sm text-error">
            {{ error }}
        </p>
    </div>
</template>

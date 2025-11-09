<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: { type: [File, null], default: null },
  label: { type: String, default: '' },
  helperText: { type: String, default: 'PNG, JPG, GIF' },
  id: { type: String, default: 'dropzone-file' },
})

const emit = defineEmits(['update:modelValue'])

const file = ref(props.modelValue)
const previewUrl = ref(null)
const inputRef = ref(null)

watch(file, (newFile) => {
  emit('update:modelValue', newFile)
  if (newFile && newFile.type.startsWith('image/')) {
    previewUrl.value = URL.createObjectURL(newFile)
  } else {
    previewUrl.value = null
  }
})

function handleFileChange(e) {
  const selectedFile = e.target.files[0]
  file.value = selectedFile
}

function handleDrop(e) {
  e.preventDefault()
  const droppedFile = e.dataTransfer.files[0]
  file.value = droppedFile
}

function handleDragOver(e) {
  e.preventDefault()
}

function openFileDialog() {
  inputRef.value?.click()
}
</script>

<template>
  <div class="relative">
    <label :for="id" v-if="label" class="block mb-2 font-semibold text-zinc-800 dark:text-zinc-200">
      {{ label }}
    </label>

    <div class="flex items-center justify-center w-full">
      <div
        @click="openFileDialog"
        @drop="handleDrop"
        @dragover="handleDragOver"
        class="relative flex items-center justify-center w-full h-64 border-2 border-zinc-300 border-dashed rounded-lg cursor-pointer bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 hover:bg-zinc-300/80 dark:hover:bg-zinc-700/80 p-4"
      >
        <img
          v-if="previewUrl"
          :src="previewUrl"
          alt="preview"
          class="absolute inset-0 w-full h-full object-contain rounded-lg"
        />

        <div
          v-if="!previewUrl"
          class="flex flex-col items-center justify-center pt-5 pb-6 text-center"
        >
          <svg
            class="w-8 h-8 mb-4 text-zinc-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5
               5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167
               M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>

          <p class="text-xs text-zinc-600 dark:text-zinc-400 text-center">{{ helperText }}</p>
        </div>

        <input
          ref="inputRef"
          id="dropzone-file"
          type="file"
          class="hidden"
          accept=".jpg,.png,.jpeg"
          @change="handleFileChange"
        />
      </div>
    </div>
  </div>
</template>

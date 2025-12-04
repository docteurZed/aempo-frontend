<script setup>
import { ErrorLayout } from '@/layouts';

</script>

<template>
    <ErrorLayout :code="403" title="Autorisation requis" subtitle="Oops... Vous n'avez pas les autorisations nécessaire pour accéder à cette page." />
</template>

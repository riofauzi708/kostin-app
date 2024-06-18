<template>
    <div v-if="kos">
        <h1>{{ kos.title }}</h1>
        <img :src="kos.image" alt="Kos" />
        <p>Harga: {{ kos.price }}</p>
        <p>Deskripsi: {{ kos.description }}</p>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useKosStore } from '../../store/kos';
import { Kos } from '../../interfaces/kos';

const router = useRouter();
const store = useKosStore();

const kos = ref<Kos | null>(null);
const kosIdParam = router.currentRoute.value.params.id;

const kosId = Array.isArray(kosIdParam) ? parseInt(kosIdParam[0], 10) : parseInt(kosIdParam, 10);

onMounted(() => {
    const fetchedKos = store.getKosById(kosId);
    if (fetchedKos) {
        kos.value = fetchedKos;
    }
});
</script>

<style scoped></style>

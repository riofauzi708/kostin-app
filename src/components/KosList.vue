<template>
    <div class="kos-list">
        <KosItem v-for="(kos, index) in kosList" :key="index" :image="kos.image" :title="kos.title"
            :price="kos.price" />
    </div>
</template>

<script setup lang="ts">
import { useKosStore } from '../store/kos';
import KosItem from './KosItem.vue';

const store = useKosStore();
const kosList = store.kosList;
</script>

<style>
.kos-list {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
}
</style>
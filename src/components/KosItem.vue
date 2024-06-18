<template>
    <div class="kos-item">
        <img :src="image" alt="Kos Image">
        <h3>{{ title }}</h3>
        <p>{{ price }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    image: String,
    title: String,
    price: String
});
</script>

<style>
.kos-item {
    flex: 1 1 calc(33.333% - 40px);
    margin: 10px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.kos-item img {
    max-width: 100%;
    border-radius: 4px;
}

.kos-item h3 {
    margin-top: 10px;
    font-size: 18px;
}

.kos-item p {
    color: #666;
}
</style>
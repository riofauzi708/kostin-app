<template>
    <div>
        <h1>Halaman Utama</h1>
        <Banner />
        <SearchFilter/>
        <KosList />
    </div>
</template>

<script setup>
import Banner from '../../components/Banner.vue';
import KosList from '../../components/KosList.vue';
import SearchFilter from '../../components/SearchFilter.vue';
</script>

<style>
</style>
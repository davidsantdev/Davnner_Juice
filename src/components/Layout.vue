<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './Header.vue';
import Main from './Main.vue';

</script>

<template>
    <div>
        <Header></Header>

        <RouterView></RouterView>
    </div>
</template>
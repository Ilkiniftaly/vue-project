<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import {RouterView} from 'vue-router';
</script>

<template>
    <div>
    <AppHeader/>
    <RouterView/>
    <AppFooter/>
    </div>
</template>
 
<script>
    import {store} from '../store.js'
    import AppCard from './AppCard.vue'

    export default {
        components: {
            AppCard
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="container">

        <AppCard v-for="(character, index) in store.characterList" :key="index" :info="character" />
    
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 20px 5px;
        height: 290px;
        overflow-y: auto;
        padding: .7rem 2rem;
        background-color: $dark-color;
    }
</style>
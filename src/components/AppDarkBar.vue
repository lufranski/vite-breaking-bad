<script>
    import {store} from '../store.js';

    export default {
        data(){
            return{
                store
            }
        },
    }
</script>

<template>
    <div>
        <p>
            <span v-if="store.filterText !== ''">
                {{store.filterText.toUpperCase()}} state
            </span> 
            Characters in Rick & Morty 
            <span v-if="store.filterText !== ''">
                - Found {{store.characterList.length}} results:
            </span>
        </p>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

    div {
        background-color: $dark-color;
        border: 1px solid $light-color;
        padding: .6rem 1rem;
        z-index: 100;

        p {
            color: $light-color;
        }
    }
</style>
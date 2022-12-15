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
        <p>{{store.filterText.toUpperCase()}} Characters in Rick & Morty - Found {{store.characterList.length}} results:</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

    div {
        background-color: $dark-color;
        border: 1px solid $light-color;
        padding: .2rem;

        p {
            color: $light-color;
        }
    }
</style>
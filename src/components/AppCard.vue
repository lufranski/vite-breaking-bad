<script>
    export default {
        props: ['info']
    }
</script>

<template>
    <div class="card">
        <img :src="info.image" :alt="info.name">

        <div class="bg">

            <h3>{{info.name}}</h3>
            <h4>{{info.species}}</h4>
            <h4>{{info.status}}</h4>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

    .card {
        max-width: 100px;
        background-color: $bg-color;
        padding: .4rem;
        border-radius: 10px;

        img {
            width: 100%;
            border-radius: 10px;
        }

        .bg {
            background-color: $dark-color;
            padding: .2rem;
            border-radius: 10px;
            
            h3,h4 {
                color: $light-color;
                font-size: 10px;
            }
        }

    }

    
</style>
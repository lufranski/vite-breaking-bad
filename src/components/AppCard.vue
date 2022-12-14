<script>
    export default {
        props: ['info']
    }
</script>

<template>
    <div class="card">
        <img :src="info.image" :alt="info.name">

        <div class="bg">

            <h4>{{info.name}}</h4>
            
            <div class="par">
                <p>{{info.species}}</p>
                <p>{{info.status}}</p>
            </div>

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
            min-height: 100px;
            padding: .2rem;
            border-radius: 10px;
            position: relative;
            
            h4,p {
                color: $light-color;
                font-size: 10px;
            }
                
            .par {
                position: absolute;
                bottom: 5%;
            }
        }

    }

    
</style>
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
        max-width: 20%;
        border: 1px solid $light-color;
        padding: .4rem;
        border-radius: 10px;

        img {
            width: 100%;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
        }

        .bg {
            border: 1px solid $light-color;
            min-height: 100px;
            padding: .2rem;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            position: relative;
            
            h4,p {
                color: $light-color;
                font-size: 13px;
                margin-bottom: 5px;
            }
                
            .par {
                position: absolute;
                bottom: 15%;
            }
        }

    }

    
</style>
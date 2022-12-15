<script>
  import axios from 'axios';
  import AppDarkBar from './components/AppDarkBar.vue'
  import AppCardList from './components/AppCardList.vue'
  import {store} from './store.js'
  
  export default {
      components: {
        AppDarkBar,
        AppCardList
      },
      data() {
        return {
          store
        }
      },
      methods: {
        getCharacter(){

          axios
            .get(store.apiUrl)
            .then(res => {
              store.characterList = res.data.results;
            })
            .catch(err => {
              console.log('errori', err);
            }
  
            );
  
            
        }
      },
      mounted (){
        this.getCharacter();
      }    
  }
</script>

<template>

  <div class="container logo">
    <img id="logo" src="./assets/Rick-And-Morty-Logo.png" alt="">
  </div>

  <div class="container">
    <div class="container inner">
        <div class="label">
            Select category

            <font-awesome-icon id="chevron" icon="fa-chevron-down" />
        </div>

        <section id="characters">
            <AppDarkBar />
            <AppCardList />
        </section>
    </div>
  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/variables' as *;

.container {
  background-color: $dark-color;
  padding: .5rem;
  // DEBUG
  
  .inner {
    width: 80%;
    border: 1px solid $light-color;
    border-radius: 10px;

    .label {
      background-color: $dark-color;
      border-radius: 5px;
      border: 1px solid $light-color;
      width: 20%;
      padding: .5rem;
      color: $light-color;
      position: relative;
      cursor: pointer;

      #chevron {
        // margin-left: 48%;
        position: absolute;
        right: 5px;
      }
    }

    #characters {
      background-color: $light-color;
      width: 98%;
      margin: 10px auto;
      // DEBUG
      min-height: 70%;
    }
  }
}

.logo {
  width: 30%;
  margin: 0 auto;
  
  #logo {
    width: 100%;
  
  }
}
</style>

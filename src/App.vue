<script>
  import axios from 'axios';
  import AppDarkBar from './components/AppDarkBar.vue'
  import AppCardList from './components/AppCardList.vue'
  import AppFilterCards from './components/AppFilterCards.vue';
  import {store} from './store.js'
  
  export default {
      components: {
        AppDarkBar,
        AppCardList,
        AppFilterCards
      },
      data() {
        return {
          store
        }
      },
      methods: {
        getCharacter(){
          
          let myURL = this.store.apiUrl;
          
          if (this.store.filterText === 'any') {
             myURL = this.store.apiUrl;
          }else if (this.store.filterText !== '') {
            myURL += `?${this.store.statusApi}=${this.store.filterText}`;
          }
          

          
          axios
            .get(myURL)
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
        <AppFilterCards @filterCharacters="getCharacter()"/>

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
  padding: .2rem;
  min-height: 285px;
  
  .inner {
    width: 80%;
    padding: 2rem 0;
    border: 1px solid $light-color;
    border-radius: 10px;

    #characters {
      background-color: $light-color;
      width: 98%;
      margin: 10px auto;
      
    }
  }
}

.logo {
  width: 35%;
  margin: -30px auto;
  border: none;
  
  #logo {
    width: 100%;
  
  }
}
</style>

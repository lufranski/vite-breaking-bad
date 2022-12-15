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
          
          let myURL;
          
          
          if(this.store.filterText === 'alive') {
              myURL += `?${this.store.statusApi}=${this.store.filterText}`;
          } else if(this.store.filterText === 'dead') {
              myURL += `?${this.store.statusApi}=${this.store.filterText}`
          } else if(this.store.filterText === 'unknown') {
              myURL += `?${this.store.statusApi}=${this.store.filterText}`
          } else {
              myURL = this.store.apiUrl;
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
  padding: .5rem;
  // DEBUG
  
  .inner {
    width: 80%;
    border: 1px solid $light-color;
    border-radius: 10px;

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

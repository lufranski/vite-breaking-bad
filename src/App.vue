<script>
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
      }    
  }
</script>

<template>
  <div class="container">
    <div class="container inner">
        <div class="label">
            Select category
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
  background-color: $bg-color;
  padding: .5rem;
  // DEBUG
  height: 300px;

  .inner {
    width: 80%;
    // DEBUG
    border: 1px solid #fff;

    .label {
      background-color: $light-color;
      border-radius: 5px;
      padding: .5rem;
    }

    #characters {
      background-color: $light-color;
      width: 90%;
      padding: .2rem;
      margin-top: 2px;
      // DEBUG
      min-height: 70%;
    }
  }
}

</style>

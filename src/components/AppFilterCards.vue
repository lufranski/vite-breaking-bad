<script>
    import {store} from '../store.js';
    
    export default {
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <div>
        <label for="status">Filter by status:</label>
    
        <select v-model="store.filterText" name="status" id="status" @change="$emit('filterCharacters')">
            <option value="any"> Any </option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unkown">Unkown</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    label {
      color: $light-color;
      margin-right: 10px;
    }

    select {
      background-color: $dark-color;
      border: 1px solid $light-color;
      border-radius: 10px;
      padding: .3rem;
      color: $light-color;
    }
</style>
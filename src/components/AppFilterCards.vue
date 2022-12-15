<script>
    export default {

    }
</script>

<template>
    <label for="status">Filter for status:</label>

    <select name="status" id="status">
        <option value="null"> - - - </option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unkown">Unkown</option>
    </select>
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
<template lang="html">
  <div class="home-wrap">
    <div class="home">Home</div>
    <button type="button" name="button" @click="jump">
      返回
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="css">
button{
  outline: none;
  border: none;
  background-color: rgb(52, 197, 204);
  color: #fff;
  padding: 10px;
  margin-bottom: 30px;
}
</style>

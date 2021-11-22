<template>
  <div class='container'>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Header'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang='scss'>
@import "assets/styles/variables";

.container {
  width: 100%;
  padding: 0 32px;
  margin: 0 auto;
  max-width: 1440px;
  min-height: 100vh;
}
</style>

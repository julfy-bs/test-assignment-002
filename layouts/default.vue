<template>
  <div class='container'>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang='scss'>
.container {
  width: 95%;
  margin: 0 auto;
  max-width: 1440px;
}
</style>

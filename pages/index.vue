<template>
  <main class='main'>
    <AddCard />
    <div class='cards'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </main>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang='scss'>
@import "assets/styles/variables";

.main {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  .cards {
    display: flex;
    flex-flow: row wrap;
    margin-left: -16px;
  }

  // media

  @media (max-width: $mobile) {
    flex-direction: column;
  }
}
</style>


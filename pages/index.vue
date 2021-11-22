<template>
  <main class='main'>
    <AddCard @submittedCard='createCard' />
    <transition-group name='list-complete' tag='div' class='cards'>
      <Card v-for='card in cardsArray'
            :key='card.id'
            :card='card'
            class='card__item'
      />
    </transition-group>
  </main>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
    cardsArray: []
  }),
  methods: {
    createCard(data) {
      this.cardsArray.push(data)
    }
  }
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

  .card__item {
    transition: all 1s;
  }

  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    position: absolute;
  }

  // media

  @media (max-width: $mobile) {
    flex-direction: column;
  }
}
</style>


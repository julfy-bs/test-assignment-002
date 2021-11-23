<template>
  <main class='main'>
    <AddCard />
    <div class='cards'>
      <Sorting/>
      <transition-group name='list-complete' tag='div' class='cards__wrapper'>
        <Card v-for='card in cardsList'
              :key='card.id'
              :card='card'
              class='card__item'
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import AddCard from '@/components/AddCard'
import Sorting from '@/components/Sorting'
import Card from '@/components/Card'

export default {
  name: 'Index',
  components: {
    AddCard, Sorting, Card
  },
  loading: {

    color: '$button-background-remove',
    height: '5px'
  },
  computed: {
    cardsList() {
      return this.$store.getters['cards/cardsList']
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
  padding-top: 32px;

  .cards {
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1.5 auto;

    .cards__wrapper {
      display: flex;
      flex-flow: row wrap;
      margin-left: -16px;
      transition: all 1s;

      .card__item {
        transition: all 1s;
      }
    }
  }

  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    opacity: 0;
  }

  @media (max-width: $mobile) {
    flex-direction: column;
  }
}
</style>


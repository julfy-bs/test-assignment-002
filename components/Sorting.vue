<template>
  <div class='sort'>
    <form class='sort__form'>
      <select v-model='filter' class='sort__select' @change='sortArray'>
        <option class='sort__option'
                value='default'
        >
          По умолчанию
        </option>
        <option class='sort__option'
                value='min'
                selected
        >
          По цене min (от меньшего к большему)'
        </option>
        <option class='sort__option'
                value='max'
        >
          По цене max (от большего к меньшему).
        </option>
        <option class='sort__option'
                value='name'
        >
          По наименованию
        </option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Sorting',
  data() {
    return {
      filter: 'default'
    }
  },
  methods: {
    sortByAlphabet() {
      const alphabetArray = this.$store.getters['cards/cardsList']
      alphabetArray.sort(function(a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
    },
    sortByMinPrice() {
      const priceArray = this.$store.getters['cards/cardsList']
      priceArray.sort(function(a, b) {
        if (a.price < b.price) {
          return -1
        }
        if (a.price > b.price) {
          return 1
        }
        return 0
      })
    },
    sortByMaxPrice() {
      const priceArray = this.$store.getters['cards/cardsList']
      priceArray.sort(function(a, b) {
        if (a.price > b.price) {
          return -1
        }
        if (a.price < b.price) {
          return 1
        }
        return 0
      })
    },
    sortByDefault() {
      const idArray = this.$store.getters['cards/cardsList']
      idArray.sort(function(a, b) {
        if (a.id < b.id) {
          return -1
        }
        if (a.id > b.id) {
          return 1
        }
        return 0
      })
    },
    sortArray() {
      if (this.filter === 'default') {
        this.sortByDefault()
      }
      if (this.filter === 'min') {
        this.sortByMinPrice()
      }
      if (this.filter === 'max') {
        this.sortByMaxPrice()
      }
      if (this.filter === 'name') {
        this.sortByAlphabet()
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "assets/styles/variables";

.sort {
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-end;

  .sort__select {
    // size
    width: 100%;
    min-width: 120px;
    max-width: 240px;
    height: 36px;
    padding: 10px 15px;
    font-size: 12px;
    //color
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: $text-transparent;
    transition: $transition-default;

    &:focus {
      outline-color: $button-background-active;
    }
  }

  @media (max-width: $mobile) {
    justify-content: center;
  }
}
</style>

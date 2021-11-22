<template>
  <div class='card'>
    <button class='card__delete'></button>
    <div :style='cssProps.backgroundImage' class='card__image'></div>
    <div class='card__content'>
      <h3 class='card__heading'>{{ card.name }}</h3>
      <p class='card__text'>{{ card.description }}</p>
      <span class='card__price'>{{ numberMask }} руб.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        id: {
          type: Number,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        },
        price: {
          type: String,
          required: true
        },
        description: {
          type: String,
          default: 'Довольно-таки интересное описание товара в несколько строк.'
        }
      }
    }
  },
  data() {
    return {
      isChange: false,
      price: 0,
      cssProps: {
        backgroundImage: `background-image: url(${this.card.url})`
      }
    }
  },
  computed: {
    numberMask: {
      get() {
        return this.isChange ? this.card.price : this.card.price.toLocaleString()
      },
      set(value) {
        this.price = +value.replace(/\s/g, '')
      }
    }
  },
}
</script>

<style lang='scss' scoped>
@import "assets/styles/variables";

.card {
  flex: 1 1 30%;
  min-width: 300px;
  margin: 0 0 16px 16px;
  width: 100%;
  max-height: 423px;
  background: $background-item-default;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: relative;

  .card__delete {
    transition: $transition-default;
    opacity: 0;
    position: absolute;
    top: -8px;
    right: -8px;
    width: 32px;
    height: 32px;
    background-color: $button-background-remove;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: none;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 8px;
      right: 9px;
      width: 13px;
      height: 16px;
      background: center / cover no-repeat url('static/images/svg/remove.svg');
    }
  }

  &:hover {
    cursor: pointer;

    .card__delete {
      cursor: pointer;
      opacity: 1;
    }
  }

  .card__image {
    width: 100%;
    height: 200px;
    background: center / cover no-repeat url('https://images.unsplash.com/photo-1637548739071-7c24bbcab218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80');
  }

  .card__content {
    padding: 16px;

    .card__heading {
      margin-bottom: 16px;
    }

    .card__text {
      overflow: hidden;
      max-height: 80px;
      margin-bottom: 32px;
      font-size: $font-size-item-text;
      line-height: 20px;
    }

    .card__price {
      font-family: $font-family-bold;
      font-size: 24px;
      line-height: 30px;
    }
  }

  // media
  @media (max-width: $laptop) {
    flex: 1 1 45%;
    .card__content {
      .card__text {
        margin-bottom: 26px;
        max-height: 60px;
      }
    }
  }

  @media (max-width: $tablet) {
    flex: 1 1 100%;
    .card__content {
      .card__text {
        margin-bottom: 22px;
        font-size: $font-size-item-text-mobile;
      }

      .card__price {
        font-size: 16px;
      }
    }
  }
}
</style>

<template>
  <form class='form form__container'
        method='post'
        @submit='SubmitForm'
  >
    <div class='form__group'>
      <label class='form__heading form__heading--required'
             for='name'>Наименование товара</label>
      <input id='name'
             v-model='name'
             :class='{"form__input--error": error}'
             class='form__input form__input--name'
             type='text'
             placeholder='Введите наименование товара'
             name='name'>
      <p v-if='error!==null && !name'
         class='form__error'
      >
        {{ error }}
      </p>
    </div>
    <div class='form__group'>
      <label class='form__heading'>Описание товара</label>
      <textarea id='description'
                v-model='description'
                class='form__input form__input--description'
                placeholder='Введите описание товара'></textarea>
    </div>
    <div class='form__group'>
      <label class='form__heading form__heading--required'
             for='url'>Ссылка на изображение товара</label>
      <input id='url'
             v-model='url'
             :class='{"form__input--error": error}'
             class='form__input form__input--link'
             type='text'
             placeholder='Введите ссылку'
             name='url'
      >
      <p v-if='error!==null && !url'
         class='form__error'
      >
        {{ error }}
      </p>
    </div>
    <div class='form__group'>
      <label class='form__heading form__heading--required'
             for='price'>Цена товара</label>
      <input id='price'
             v-model='modelNumber'
             :class='{"form__input--error": error}'
             class='form__input form__input--price'
             :type="isChange ? 'number' : 'text'"
             placeholder='Введите цену'
             name='price'
             @focus='isChange = true'
             @blur='isChange = false'
      >
      <p v-if='error!==null && !price'
         class='form__error'
      >
        {{ error }}
      </p>
    </div>
    <div v-show='!isAppended' class='form__group'>
      <input id='button'
             :disabled='!isComplete'
             class='button'
             type='submit'
             value='Добавить товар'
      >
    </div>
    <transition name='slide-top' tag='div' class='form__group'>
      <h3 v-show='isAppended' class='form__success'>Товар успешно добавлен в список.</h3>
    </transition>
  </form>
</template>

<script>
export default {
  name: 'AddCart',
  data() {
    return {
      error: null,
      name: null,
      url: null,
      description: null,
      price: 0,
      isChange: false,
      isAppended: false
    }
  },
  computed: {
    isComplete() {
      return this.name && this.url && this.price
    },
    // todo: сделать плагин
    modelNumber: {
      get() {
        return this.isChange ? this.price : this.price.toLocaleString()
      },
      set(value) {
        this.price = +value.replace(/\s/g, '')
        this.$emit('input', this.price)
      }
    }
  },
  methods: {
    SubmitForm(e) {
      if (this.name && this.url && this.price) {
        const card = {
          name: this.name,
          url: this.url,
          price: this.price,
          description: this.description,
          id: Math.floor(Date.now() / 1000)
        }
        this.$emit('submittedCard', card)
        this.name = null
        this.url = null
        this.price = 0
        this.description = null
        this.isAppended = !this.isAppended
        // eslint-disable-next-line no-return-assign
        setTimeout(() => this.isAppended = false, 1000)
      } else {
        this.error = 'Поле является обязательным'
      }
      e.preventDefault()
    }
  }
}
</script>

<style lang='scss' scoped>
@import "assets/styles/variables";

.form__container {
  display: flex;
  flex-flow: column nowrap;
  flex: 1 .7 auto;
  // size
  max-width: 332px;
  width: 100%;
  height: 440px;
  padding: 24px;
  margin: 0 16px 16px 0;
  // color
  background: $background-item-default;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  .form__group {
    // size
    margin-bottom: 16px;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    transition: all 1s;

    .slide-top-enter, .slide-top-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }

    .slide-top-leave-active {
      position: absolute;
    }

    .form__heading {
      display: inline-block;
      // size
      margin-bottom: 4px;

      // font
      font-family: $font-family-regular;
      font-size: 10px;
      line-height: 13px;
      // color
      color: $text-form-heading;

      &--required {
        position: relative;
        width: fit-content;

        &::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 0;
          width: 4px;
          height: 4px;
          background: #FF8484;
          border-radius: 4px;
        }
      }
    }

    .form__input {
      // size
      max-width: 284px;
      width: 100%;
      height: 36px;
      padding: 10px 16px;
      // font
      font-family: $font-family-regular;
      font-size: 12px;
      line-height: 15px;
      // color
      color: $text-primary;
      border: none;
      outline-color: $button-background-active;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      transition: $transition-default;

      &::placeholder {
        color: $text-transparent;
      }

      &--description {
        height: 108px;
        resize: none;
      }

      &--error {
        border: 1px solid $button-background-remove;
      }

      @media (max-width: $mobile) {
        max-width: none;
      }
    }

    .form__error {
      position: absolute;
      bottom: -15px;
      color: $button-background-remove;
      letter-spacing: -0.02em;
      font-size: 8px;
      line-height: 10px;
    }
  }

  .button {
    // size
    width: 100%;
    height: 36px;
    // font
    font-family: $font-family-regular;
    font-size: 12px;
    line-height: 15px;
    // color
    color: $button-text-color-active;
    background: $button-background-active;
    border-radius: 10px;
    border: none;
    transition: $transition-default;
    outline-color: $button-background-active;

    &:disabled {
      background: $button-background-disabled;
      color: $button-text-color-disabled;
      outline-color: $button-text-color-disabled;
    }
  }

  .form__success {
    font-size: 15px;
    line-height: 36px;
    color: $button-background-active;
    text-align: center;
  }

  @media (max-width: $mobile) {
    max-width: none;
  }
}
</style>

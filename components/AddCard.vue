<template>
  <form action='#' class='form form__container'>
    <label class='form__label'>
      <span class='form__heading form__heading--required'>Наименование товара</span>
      <input class='form__input form__input--name'
             type='text'
             required
             placeholder='Введите наименование товара'>
    </label>
    <label class='form__label'>
      <span class='form__heading'>Описание товара</span>
      <textarea class='form__input form__input--description'
                placeholder='Введите описание товара'></textarea>
    </label>
    <label class='form__label'>
      <span class='form__heading form__heading--required'>Ссылка на изображение товара</span>
      <input class='form__input form__input--link'
             type='text'
             required
             placeholder='Введите ссылку'
      >
    </label>
    <label class='form__label'>
      <span class='form__heading form__heading--required'>Цена товара</span>
      <input class='form__input form__input--price'
             type='number'
             required
             placeholder='Введите цену'
      >
    </label>
    <button class='button button--disabled'>Добавить товар</button>
  </form>
</template>

<script>
export default {
  name: 'AddCart'
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

  .form__label {
    // size
    margin-bottom: 16px;
    display: flex;
    flex-flow: column nowrap;

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

      @media (max-width: $mobile) {
        max-width: none;
      }
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

    &--disabled {
      background: $button-background-disabled;
      color: $button-text-color-disabled;
    }
  }

  @media (max-width: $mobile) {
    max-width: none;
  }
}
</style>

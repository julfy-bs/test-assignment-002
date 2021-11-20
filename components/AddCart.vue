<template>
  <div class='form__container'>
    <form action='#' class='form'>
        <label>
          <span class='form__heading form__heading--required'>Наименование товара</span>
          <input class='input input--name'
                 type='text'
                 required
                 placeholder='Введите наименование товара'>
        </label>
        <label>
          <span class='form__heading'>Описание товара</span>
          <textarea class='input input--description'
                    placeholder='Введите описание товара'></textarea>
        </label>
        <label>
          <span class='form__heading form__heading--required'>Ссылка на изображение товара</span>
          <input class='input input--link'
                 type='text'
                 required
                 placeholder='Введите ссылку'
          >
        </label>
        <label>
          <span class='form__heading form__heading--required'>Цена товара</span>
          <input class='input input--price'
                 type='number'
                 required
                 placeholder='Введите цену'
          >
        </label>

        <button class='button button--disabled'>Добавить товар</button>

    </form>
  </div>
</template>

<script>
export default {
  name: 'AddCart'
}
</script>

<style lang='scss' scoped>
@import "assets/styles/variables";

.form__container {
  // size
  max-width: 332px;
  width: 100%;
  padding: 24px;
  position: fixed;
  // color
  background: $background-item-default;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.form__wrapper {
  display: flex;
  flex-flow: column nowrap;
}

.input {
  max-width: 284px;
  width: 100%;
  height: 36px;
  font-size: 12px;
  line-height: 15px;
  color: $text-primary;
  padding: 10px 16px;
  border: none;
  outline-color: $button-background-active;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  // font
  font-family: $font-family-regular;

  &::placeholder {
    color: $text-transparent;
  }

  &--description {
    height: 108px;
    resize: none;

  }
}

label {
  margin-bottom: 16px;
  display: block;
}

.form__heading {
  display: inline-block;
  // size
  margin-bottom: 4px;

  // font
  font-family: $font-family-regular;
  font-size: 10px;
  line-height: 13px;
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

.button {
  width: 100%;
  max-width: 284px;
  height: 36px;
  background: $button-background-active;
  border-radius: 10px;
  border: none;
  // font
  font-family: $font-family-regular;
  font-size: 12px;
  line-height: 15px;
  color: $button-text-color-active;

  &--disabled {
    background: $button-background-disabled;
    color: $button-text-color-disabled;
  }
}

</style>

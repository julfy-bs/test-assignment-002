<template>
  <header class='header'>
    <div class='header__title'><h1>Добавление товара</h1></div>
    <div class='header__sort sort'>
      <form action='' class='sort__form'>
        <select class='sort__select'>
          <option class='sort__option' value='#' selected>По умолчанию</option>
        </select>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang='scss' scoped>
@import "assets/styles/variables";
.header {
  // size
  width: 100%;
  padding: 32px 0;

  // flex
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media (max-width: $tablet) {
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
}

.sort__select {
  // size
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
</style>

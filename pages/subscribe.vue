<template>
  <div class="page">
    <img :src="require(`~/assets/img/gradients/gradient2.png`)" class="gradientbg">
    <div class="wrapper">
      <header class="sm:pt-36 pt-24 mb-12">
        <div class="logo sm:h-44 sm:w-44 h-24 w-24 bg-white shadow-elevated sm:rounded-max rounded-3xl flex justify-center items-center">
          <img src="~/assets/img/logos/logo_linea.svg" alt="logo linea" class="block sm:w-24 w-12">
        </div>
        <h1 class="sm:mt-20 mt-12 font-bold sm:text-5xl text-3xl text-gray-500 leading">thanks for subscribing to <span class="text-black">linea almanac</span>. <br>awesome to have you on board!</h1>
      </header>
      <footer class="text-center py-6 text-sm text-gray-500">
        <p>a design &amp; code project by <a href="https://dominikhofer.me" target="_blank" class="text-black">dominik hofer</a>.</p>
        <p>© 2021</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    randomImg() {
      let min = 1;
      let max = 4;
      let random = Math.floor(Math.random() * (max - min)) + min;
      return random;
    }
  }
}
</script>

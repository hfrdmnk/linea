<template>
  <div class="page">
    <img :src="require(`~/assets/img/gradients/gradient2.png`)" class="gradientbg">
    <div class="wrapper">
      <header class="sm:pt-36 pt-24">
        <div class="logo sm:h-44 sm:w-44 h-24 w-24 bg-white shadow-elevated sm:rounded-max rounded-3xl flex justify-center items-center">
          <img src="~/assets/img/logos/logo_linea.svg" alt="logo linea" class="block sm:w-24 w-12">
        </div>
        <h1 class="sm:mt-20 mt-12 font-bold sm:text-5xl text-3xl text-gray-500 leading">linea shapes <span class="text-black">minimalist apps</span> and other <span class="text-black">creative projects</span>.</h1>
        <form action="https://buttondown.email/api/emails/embed-subscribe/dominikhofer" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/dominikhofer', 'popupwindow')" class="sm:mt-20 mt-12 grid gap-4 grid-cols-8">
          <input type="email" placeholder="your email" name="email" id="bd-email" class="sm:col-span-4 col-span-full sm:col-start-2 inputfield">
          <input type="hidden" value="1" name="embed" />
          <button type="submit" class="sm:col-span-2 bg-black text-white rounded-lg shadow-normal p-4 col-span-4 col-start-3">keep me posted!</button>
        </form>
      </header>
      <main class="sm:pt-48 sm:pb-40 pt-36 pb-32">
        <div class="grid gap-4 grid-cols-8">
          <div class="project" v-for="project in projects" :key="project.logo">
            <div class="icon">
              <img :src="require(`~/assets/img/logos/logo_${project.icon}.svg`)" :alt="`logo ${project.icon}`">
            </div>
            <h2 class="title">{{ project.title}}</h2>
            <p class="desc">{{ project.desc }}</p>
            <a :href="project.link" v-if="project.link" class="cta" target="_blank">{{ project.cta }}</a>
            <p class="cta" v-else>{{ project.cta }}</p>
          </div>
        </div>
      </main>
      <footer class="text-center py-6 text-sm text-gray-500">
        <p>a design &amp; code project by <a href="https://dominikhofer.me" target="_blank" class="text-black">dominik hofer</a>.</p>
        <p>© 2021</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          icon: 'songpics',
          title: 'songpics.',
          desc: 'visualizing your favourite songs',
          cta: 'song.pics',
          link: 'https://song.pics'
        },
        {
          icon: 'quarta',
          title: 'quarta.',
          desc: 'the app for a better you',
          cta: 'testflight link coming soon',
        }
      ]
    }
  },
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

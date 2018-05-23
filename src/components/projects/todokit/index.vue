<template lang="pug" src='./index.pug'>

</template>

<script>
import Github from '../github'
import SideBar from '../sidebar'
import Swiper from 'swiper'

export default {
  name: 'Index',
  components: {
    Github, SideBar
  },
  created () {
    this.$nextTick(() => {
      const mySwiper = new Swiper('.swiper-container', {
        effect: 'fade',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      })
      console.log(mySwiper)
    })
  }
}
</script>

<style lang="sass" scoped src='./index.sass'>
</style>

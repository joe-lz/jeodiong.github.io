<template lang="pug">
aside
  a.language(@click='changeLanguage')
    i.iconfont.icon-fanyi
    span(v-if='$i18n.locale == "en"') 中文
    span(v-else) English
  router-link.home(:to='{name: "Index"}')
    i.iconfont.icon-home
    | {{ $t("message.home") }}
</template>

<script>
export default {
  name: 'SideBar',
  created () {
  },
  methods: {
    changeLanguage () {
      let locale = this.$i18n.locale === 'en' ? 'zh' : 'en'
      this.$i18n.locale = locale
      this.$func.SetLocal(this.$constance.LANGUAGE_LOCAL, locale)
    }
  }
}
</script>

<style lang="sass" scoped src='./index.sass'>
</style>

<template>
  <Base
    :tagName="tagName"
    :class="[classes]"
  >
    <slot></slot>
  </Base>
</template>

<script>
  import VueTypes from 'vue-types'
  import BaseCmp from './Base.vue'

  export default {
    name: 'TextCmp',
    extends: BaseCmp,
    components: {},
    data () {
      return {}
    },
    props: {
      tagName: VueTypes.string.def('span')
    },
    computed: {
      extraClasses () {
        return {
          'text': true
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>

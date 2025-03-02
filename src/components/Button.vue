<template>
  <BaseComponent
    :tagName="tagName || tag"
    :role="role"
    :class="[classes]"
    :href="link"
  >

    <template v-if="hasBefore">
      <slot name="before"></slot>
    </template>

    <template v-if="hasContent">
      <slot name="content"></slot>
    </template>

    <template v-if="hasAfter">
      <slot name="after"></slot>
    </template>

  </BaseComponent>
</template>

<script>

  import VueTypes from 'vue-types'
  import Base from './Base.vue'

  export default {
    name: 'ButtonCmp',
    components: {
      BaseComponent: Base
    },
    data () {
      return {}
    },
    props: {
      tag: VueTypes.string.def('button'),
      tagName: VueTypes.string.def('button'),
      role: VueTypes.string.def('button'),
      url: VueTypes.string,
      classes: VueTypes.oneOfType([
        VueTypes.string,
        VueTypes.array
      ]).def('')
    },
    computed: {
      extraClasses () {
        return {
          'button': true,
          'pippo': 1
        }
      },
      link () {
        return (this.tagName || this.tag) === 'a' ? this.url : null
      },
      hasText() {
        return !!this.text
      },
      hasBefore () {
        return !!this.$slots['before']
      },
      hasContent () {
        return !!this.$slots['content']
      },
      hasAfter () {
        return !!this.$slots['after']
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

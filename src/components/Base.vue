<script>

import VueTypes from "vue-types";
import { styleMx } from '../mixins/style-mx'

export default {
  mixins: [ styleMx ],
  name: "BaseCmp",
  render: function(createElement) {
    return createElement(
      this.tagName,
      { class: this.toolsClasses },
      this.$slots.default
    );
  },
  data() {
    return {
      scalableClasses: [`is-scalable`],
      scaleClasses: [`scale--default`]
    };
  },
  props: {
    tagName: VueTypes.string.def("div"),
    scalable: VueTypes.bool.def(true),
    scale: VueTypes.string,
    role: VueTypes.string,
    to: VueTypes.object,
    text: VueTypes.string
  },
  computed: {
    baseClasses() {
      const classes = {
        [this.$options.name]: true
      };

      if (this.scalable) {
        classes[this.scalableClasses[0]] = true;
      }

      if (this.scale) {
        classes[`scale--${this.scale}`] = true;
      }

      return classes;
    },
    toolsClasses() {
      return {
        ...this.baseClasses,
        ...this.styleClasses
      };
    }
  },
  watch: {
    scale(newValue) {
      if (newValue) {
        this.scaleClasses = [`scale--${newValue}`];
      }
    }
  },
  created() {
    if (this.scale) {
      this.scaleClasses = [`scale--${this.scale}`];
    }
  }
};
</script>

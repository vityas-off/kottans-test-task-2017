export default {
  props: ['value'],
  computed: {
    val: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal);
        return newVal;
      },
    },
  },
};

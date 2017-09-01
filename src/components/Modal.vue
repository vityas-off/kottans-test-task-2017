<template lang='pug'>
  transition(name='modal')
    .modal-mask(@click='$emit("close")')
      .modal-inner(@click.stop='')
        button(@click='$emit("close")', title='Close modal') x
        slot
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    escPressed(evt) {
      if (evt.keyCode === 27) this.$emit('close');
    },
  },
  created() {
    window.addEventListener('keyup', this.escPressed);
  },
  destroyed() {
    window.removeEventListener('keyup', this.escPressed);
  },
};
</script>

<style lang='sass' scoped>
.modal-mask
  position: fixed
  background-color: rgba(0, 0, 0, .7)
  display: flex
  align-items: center
  justify-content: center
  align-content: center
  top: 0
  left: 0
  height: 100%
  z-index: 1
  transition: opacity .3s ease
  border: 1px solid black
.modal-inner
  max-height: 80%
  max-width: 600px
  min-width: 300px
  min-height: 300px
  position: relative
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
  transition: all .3s ease
  overflow-y: auto
  background: -webkit-linear-gradient(bottom, lightgrey 20%, silver 100%)
button
  position: absolute
  right: 0
  font-size: 15px
  &:hover
    filter: invert(75%)
.modal-enter 
  opacity: 0
.modal-leave-active 
  opacity: 0
.modal-enter .modal-inner,
.modal-leave-active .modal-inner 
  transform: scale(1.1)
</style>

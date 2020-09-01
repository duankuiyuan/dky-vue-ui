<template>
  <transition name="el-message-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="dky-message"
      :class="[`dky-message--${type}`,center ? 'is-center' : '',showClose ? 'is-closeable' : '']"
      :style="positionStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      {{message}}
      <i v-if="showClose" class="el-message__closeBtn el-icon-close" @click="close"></i>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: "",
      duration: 3000,
      type: "info",
      iconClass: "",
      customClass: "",
      onClose: null,
      showClose: false,
      closed: false,
      verticalOffset: 20,
      timer: null,
      center: false,
    };
  },
  computed: {
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`,
      };
    },
  },
  mounted() {
    this.startTimer();
  },
  watch: {
    closed(val) {
      if (val) {
        this.visible = false;
      }
    },
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose == "function") {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.time);
    },
    startTimer() {
      if (this.duration > 0) {
        this.time = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="dky-aside" :style="{width}">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    width:{
      type:String,
      default:"300px"
    }
  },
name:"DkyAside"
}
</script>
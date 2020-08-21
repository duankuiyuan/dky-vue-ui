<template>
  <div class="dky-header" :style="{height}">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:"DkyHeader",
  props:{
    height:{
      type:String,
      default:"60px"
    }
  }

}
</script>
<template>
  <div class="dky-footer" :style="{height}">
     <slot></slot>
  </div>
</template>

<script>
export default {
name:"DkyFooter",
props:{
  height:{
    type:String,
    default:"60px"
  }
}
}
</script>
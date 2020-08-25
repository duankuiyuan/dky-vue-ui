<template>
  <button class="dky-button" 
  :class="[ type ? `dky-button--${type}` : '',
    size ? `dky-button--${size}` : '',
  {'is-plain': plain,
  'is-round': round,
  'is-circle': circle,
  'is-disabled': disabled
  }]">
   <i :class="icon" v-if="icon && !loading"></i>
   <i class="el-icon-loading" v-if="loading"></i>
    <span v-if="$slots.default">
         <slot></slot>
    </span>
   
  </button>
</template>

<script>
export default {
name:"DkyButton",
props:{
    type:String,
    plain:Boolean,
    round:Boolean,
    circle:Boolean,
    icon:String,
    disabled:Boolean,
    loading:Boolean,
    size: String,
}
}
</script>

<style>

</style>
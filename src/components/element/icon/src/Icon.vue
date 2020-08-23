<template>
  <i :class="['dky-icon',`el-icon-${name}`]"></i>
</template>

<script>
export default {
name:"DkyIcon",
props:{
 name:String
}
}
</script>

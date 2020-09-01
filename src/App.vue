<template>
<div id="app">
  <div class="dky-row">
        <dky-button @click="$message.info('信息消息')">信息消息</dky-button>
        <dky-button @click="success">成功消息</dky-button>
        <dky-button @click="$message.warning('警告消息')">警告消息</dky-button>
        <dky-button @click="$message.error('危险消息')">危险消息</dky-button>
  </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      inputValue:""
    }

  },
  methods:{
     success: function() {
       this.$message.success({message:'成功',center:true,showClose:true})
     }
  }
};
</script>

<style lang="scss">
.dky-row{
  margin-top:20px;
}
.dky-input{
  width: 300px;
}
</style>

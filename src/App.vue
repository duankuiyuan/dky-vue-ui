<template>
<div id="app">
  <div class="dky-row">
     <dky-input v-model="inputValue">

    </dky-input>
  </div>
  <div class="dky-row">
     <dky-input disabled v-model="inputValue">

    </dky-input>
  </div>
     <div class="dky-row">
     <dky-input clearable v-model="inputValue">
         
    </dky-input>
  </div>
     <div class="dky-row">
     <dky-input  prefix-icon="el-icon-search" v-model="inputValue">
         
    </dky-input>
  </div>
  <div class="dky-row">
     <dky-input  suffix-icon="el-icon-date" v-model="inputValue">
         
    </dky-input>
  </div>
   <div class="dky-row">
     <h5>slot方式</h5>
     <dky-input v-model="inputValue">
        <i slot="prefix" class="el-input__icon el-icon-date"></i>  
          <i slot="suffix" class="el-input__icon el-icon-date"></i>  
    </dky-input>
  </div>
   <div class="dky-row">
     <dky-input prefix-icon="el-icon-search"  suffix-icon="el-icon-date" v-model="inputValue">
         
    </dky-input>
  </div>
  <div class="dky-row">
    密码
     <dky-input type="password" v-model="inputValue">
         
    </dky-input>
  </div>
  <div class="dky-row">
    <dky-input prefix-icon="el-icon-search"  suffix-icon="el-icon-date" v-model="inputValue">
         
    </dky-input>
    <dky-input prefix-icon="el-icon-search" size="medium" suffix-icon="el-icon-date" v-model="inputValue">
         
    </dky-input>
    <dky-input prefix-icon="el-icon-search" size="small" suffix-icon="el-icon-date" v-model="inputValue">
         
    </dky-input>
    <dky-input prefix-icon="el-icon-search" size="mini"  suffix-icon="el-icon-date" v-model="inputValue">
         
    </dky-input>
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
  mounted(){
    // setInterval(() =>{
    //   console.log(this.inputValue)
    // },3000)
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

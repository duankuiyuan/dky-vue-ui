<template>
<div id="app">
   <ul infinite-scroll-disabled="disabled" 
   infinite-scroll-delay="delay" 
   infinite-scroll-distance="distance"
   infinite-scroll-immediate = "immediate"
    v-infinite-scroll = "load" style="overflow:auto;height:500px;border:1px solid red;width:620px">
       <li v-for="i in count" style="padding:10px;">
            {{i}}
       </li>
   </ul>
</div>
</div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      inputValue:"",
      count:20,
      disabled:false,
      delay:100,
      distance:"10",
      immediate:true
    }

  },
  methods:{
    load(){
      this.count +=2;
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

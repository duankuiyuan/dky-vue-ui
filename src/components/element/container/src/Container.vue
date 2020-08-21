<template>
  <div :class="['dky-container',{'is-vertical':isVertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"DkyContainer",
  props:{
    direction:{
      type:String,
      validator: val => ['horizontal','vertical'].includes(val)
    }
  },
  computed:{
    isVertical(){
        if(this.direction == 'horizontal'){
           return false;
        }else if(this.direction == 'vertical'){
           return true;
        }
        return this.$slots && this.$slots.default ? this.$slots.default.some((vNode) =>{
              let tag = vNode.componentOptions && vNode.componentOptions.tag;
              return tag == "dky-header" || tag == "dky-footer";
        }):false
    }
  }
}
</script>
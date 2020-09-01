<template>
  <div class="dky-input" :class="inputClass">
    <span class="el-input__prefix" v-if="$slots.prefix || prefixIcon">
        <i  v-if="prefixIcon" :class="['el-input__icon',prefixIcon ? prefixIcon : '']">
        </i>
         <slot name="prefix"></slot>
    </span>
    <input
      class="dky-input__inner"
      :name="name"
      :type="Atype"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      ref="input"
      @input="$emit('input',$event.target.value)"
    />
    <span class="el-input__suffix" v-if="$slots.suffix || suffixIcon || (clearable && value) || (type == 'password'  && value)">
      <i
        v-if="clearable && value"
        class="el-input__icon el-icon-circle-close"
        @click="$emit('input','')"
        @mousedown.prevent
      ></i>
      <i v-if="type == 'password'  && value" class="el-input__icon el-icon-view" @click="changeStatus">

      </i>
       <i v-if="suffixIcon" :class="['el-input__icon',suffixIcon ? suffixIcon : '']">
        </i>
         <slot name="suffix"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "DkyInput",
  props: {
    name: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    suffixIcon: {
      type: String,
      default: "",
    },
    prefixIcon: {
      type: String,
      default: "",
    },
    size:{
        type:String,
        default:""
    }
  },
  data(){
   return{
       isPassWord:false,
       Atype:"text"
   }
  },
  created(){
     if(this.type == 'password'){
        this.Atype = "password";
     }else{
         this.Atype = this.type;
     }
  },
  computed: {
    inputClass() {
      let classes = [];
      if (this.disabled) {
        classes.push("is-disabled");
      }
      if (this.clearable || this.suffixIcon || this.type == 'password' || this.$slots.suffix) {
         classes.push("dky-input--suffix");
      }
      if(this.prefixIcon || this.$slots.prefix){
        classes.push("dky-input--prefix");
      }
      if(this.size == 'medium'){
           classes.push("dky-input--medium");
      }
      if(this.size == 'small'){
           classes.push("dky-input--small");
      }
       if(this.size == 'mini'){
           classes.push("dky-input--mini");
      }
      return classes;
    },
  },
  methods:{
      changeStatus(){
        if(this.Atype == 'password'){
           this.Atype = "text";
        }else{
           this.Atype ='password' ; 
        }
      }
  }
};
</script>

<style>
</style>
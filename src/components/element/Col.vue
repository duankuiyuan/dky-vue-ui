<template>
  <div :class="['dky-col',
  classList
  ]" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DkyCol",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name != "DkyRow") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + "px";
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ["span", "offset", "push", "pull"].forEach(prop => {
        if (this[prop]) {
          classList.push(
            prop == "span"
              ? `dky-col-${this[prop]}`
              : `dky-col-${prop}-${this[prop]}`
          );
        }
      });
      ["xs", "sm", "md", "lg", "xl"].forEach(size => {
          if(typeof this[size] == "number"){
            classList.push(`dky-col-${size}-${this[size]}`);
          }else if(typeof this[size] == "object"){
             // {
          //   span: 6,
          //   offset: 8,
          //   push: 7,
          //   pull: 9
          // }
          // el-col-xs-6
          // el-col-xs-offset-8
          // el-col-xs-push-7
          // el-col-xs-pull-9
             let props = this[size];
             Object.keys(props).forEach((prop) =>{
                  classList.push(
                     prop === 'span'
                ? `dky-col-${size}-${props[prop]}`
                : `dky-col-${size}-${prop}-${props[prop]}`,
                  )
             });
          }
      });
      return classList;
    }
  }
};
</script>

<style lang="scss" scoped>
.dky-col {
  float: left;
  box-sizing: border-box;
}
@for $i from 0 through 24 {
  .dky-col-#{$i} {
    width: $i/24 * 100%;
  }
  .dky-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }
  .dky-col-push-#{$i} {
    position: relative;
    left: $i/24 * 100%;
  }
  .dky-col-pull-#{$i} {
    position: relative;
    right: $i/24 * 100%;
  }
}

// xs < 768px
@media only screen and (max-width: 768px - 1) {
  @for $i from 0 through 24 {
    .dky-col-xs-0 {
      display: none;
    }

    .dky-col-xs-#{$i} {
      width: $i / 24 * 100%;
    }

    .dky-col-xs-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }

    .dky-col-xs-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }

    .dky-col-xs-pull-#{$i} {
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}

// sm >= 768px
@media only screen and (min-width: 768px){
  @for $i from 0 through 24 {
    .dky-col-sm-0 {
      display: none;
    }

    .dky-col-sm-#{$i} {
      width: $i / 24 * 100%;
    }

    .dky-col-sm-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }

    .dky-col-sm-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }

    .dky-col-sm-pull-#{$i} {
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}

// md >= 992px
@media only screen and (min-width: 992px){
  @for $i from 0 through 24 {
    .dky-col-md-0 {
      display: none;
    }

    .dky-col-md-#{$i} {
      width: $i / 24 * 100%;
    }

    .dky-col-md-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }

    .dky-col-md-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }

    .dky-col-md-pull-#{$i} {
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}

// lg >= 1200px
@media only screen and (min-width: 1200px){
  @for $i from 0 through 24 {
    .dky-col-lg-0 {
      display: none;
    }

    .dky-col-lg-#{$i} {
      width: $i / 24 * 100%;
    }

    .dky-col-lg-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }

    .dky-col-lg-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }

    .dky-col-lg-pull-#{$i} {
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}

// xl >= 1920px
@media only screen and (min-width: 1920px){
  @for $i from 0 through 24 {
    .dky-col-xl-0 {
      display: none;
    }

    .dky-col-xl-#{$i} {
      width: $i / 24 * 100%;
    }

    .dky-col-xl-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }

    .dky-col-xl-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }

    .dky-col-xl-pull-#{$i} {
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
</style>

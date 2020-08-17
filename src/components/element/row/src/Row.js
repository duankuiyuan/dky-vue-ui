export default {
    name: "DkyRow",
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        gutter: {
            type: Number,
            default: 0
        },
        type: String,
        justify: {
            type: String,
            default: "start",
            validator: val =>
                ["start", "end", "center", "space-between", "space-around"].includes(
                    val
                )
        },
        align: {
            type: String,
            default: "top",
            validator: val => ["top", "middle", "bottom"].includes(val)
        }
    },
    computed: {
        style() {
            let style = {};
            if (this.gutter) {
                style.marginLeft = -this.gutter / 2 + "px";
                style.marginRight = style.marginLeft;
            }
            return style;
        }
    },
    render(h){
      return h(this.tag,{class:['dky-row',{'dky-row--flex': this.type == 'flex'},
      this.justify != 'start' && `is-justify-${this.justify}`,this.align != 'top' && `is-align-${this.align}`],style:this.style},this.$slots.default)
    }
}
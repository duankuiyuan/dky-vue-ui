//import throttle from 'lodash/throttle'
// function throttle(fn,wait){
//     let pre = 0;
//     return function(...args){
      
//         let now = Date.now();
//         console.log(now - pre)
//         if((now - pre) > wait){
//         fn.apply(this,args)
//         pre = Date.now();
//         }
//     }
// }
function throttle(fn,wait){
    let timer = null;
    return function(...args){
        console.log("dasdasd")
        if(!timer){
        timer = setTimeout(() =>{
            fn.apply(this,args);
            timer = null;
        },wait);
        }

    }
}
const attrs = {
    delay: {
        default: 200
    },
    immediate: {
        default: false
    },
    disabled: {
        default: false
    },
    distance: {
        default: 10
    }
}
const getScrollOptions = (el, vm) => {
    let list = Object.entries(attrs);
    let res = list.reduce((map, [key, option]) => {
        let defalutValue = option.default;
        let value = el.getAttribute(`infinite-scroll-${key}`);//value指的是实例对象的key
        value = vm[value] ? vm[value] : defalutValue;
        map[key] = value;
        return map;
    }, {})
    return res;
}
const getScrollContainer = (el) => {
    let parent = el;
    while (parent) {
        if (document.documentElement == parent) {
            return window;//表示没有找到可滚动的元素
        }
        const overflow = getComputedStyle(parent)['overflow-y'];
        if (overflow.match(/scroll|auto/)) {
            return parent;
        }
        parent = parent.parentNode;
    }
}
const handleScroll = function (cb) {
    console.log("11111111111")
    let {container,el,vm,observer} = this[scope];
    // 看一下用户是否已经没有新的数据了
    let {disabled,distance} = getScrollOptions(el,vm);
    if(disabled) return; // 没有更多数据了
    // 当前卷去的高度 + 可见高度= 当前滚动元素的底部显示的位置
    let scrollBottom = container.scrollTop + container.clientHeight; 
    // 总页面高度 - 当前滚动元素的底部显示的位置 和 需要加载的距离进行比对
    if(container.scrollHeight -scrollBottom <= distance){
        cb();
    }else{
        if(observer){ // 解除监控，因为在滚动时不需要再次进行计算
            observer.disconnect();
            this[scope].observer = null;
        }
    }
}
const scope = 'infinite-scroll';
export default {
    name: 'InfiniteScroll',
    inserted(el, bindings, vnode) {
        const cb = bindings.value;
        const vm = vnode.context;
        //获取需要滚动的元素，如果没有元素则直接结束
        const container = getScrollContainer(el);
        if (container == window) {
            return;
        }
        //获取相关属性
        let { delay, disabled, distance, immediate } = getScrollOptions(el, vm);
        //定义滚动事件
        let onScroll = throttle(handleScroll.bind(el, cb), delay);
        console.log(onScroll)
        el[scope] = {//将需要在别处使用的数据房子el中
            onScroll,
            container,
            el,
            vm
        }
        if (immediate) {//默认立即让内容充满容器
            const observe = el[scope].observe = new MutationObserver(onScroll);
            observe.observe(container, {
                childList: true,// 监控孩子列表的变化 
                subtree: true, // 当子dom 发生变化也触发
            });
            onScroll();
        }
        container.addEventListener('scroll',onScroll)

    },
    unbind(el) {

    }
}
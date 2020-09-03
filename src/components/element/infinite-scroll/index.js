import InfiniteScroll from "./src/infiniteScroll.js";
InfiniteScroll.install = (Vue) =>{
  Vue.directive(InfiniteScroll.name,InfiniteScroll);
}
export default InfiniteScroll
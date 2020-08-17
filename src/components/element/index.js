import Row from '@element/row/index.js';
import Col from '@element/col/index.js';
const components = [
    Row,
    Col
]
const install = (Vue) =>{
   components.forEach((component) =>{
       Vue.component(component.name,component)
   });
}
export default{
    install,
    Row,
    Col
}
export {
    install,
    Col,
    Row
}
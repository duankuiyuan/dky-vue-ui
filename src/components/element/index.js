import Row from '@element/row/index.js';
import Col from '@element/col/index.js';
import Aside from '@element/aside/index.js';
import Container from '@element/container/index.js';
import Footer from '@element/footer/index.js';
import Header from '@element/header/index.js';
import Main from '@element/main/index.js';
import Icon from '@element/icon/index.js';
import Button from '@element/button/index.js';
import ButtonGroup from '@element/button-group/index.js';
import Link from '@element/link/index.js';
import Input from '@element/input/index.js';
import Message from '@element/message/index.js';
const components = [
    Row,
    Col,
    Container,
    Aside,
    Footer,
    Header,
    Main,
    Icon,
    Button,
    ButtonGroup,
    Link,
    Input
]
const install = (Vue) =>{
   components.forEach((component) =>{
       Vue.component(component.name,component)
   });
   Vue.prototype.$message = Message;
}

export default{
    install,
    Row,
    Col,
    Container,
    Aside,
    Footer,
    Header,
    Main,
    Icon,
    Button,
    ButtonGroup,
    Link,
    Input,
    Message
}
export {
    install,
    Col,
    Row,
    Container,
    Aside,
    Footer,
    Header,
    Main,
    Icon,
    Button,
    ButtonGroup,
    Link,
    Input,
    Message
}
import React from 'react'
import ReactDOM from 'react-dom'
 
// const h1 = React.createElement('h1',null,'hello')

const h1 = React.createElement('h1',{id:'h1',title:'you fuck'},'hello')


const h = React.createElement // React.createElement 太长了，太繁琐了， 可以将他赋值给一个简单的变量来引用

let h3 = h('h3', {id: 'h3', title: 'h3', className: 'h3', style: {color: 'red'}}, 'I see you now')


//使用jsx语法 创建一个标签元素
const div2 = <div>today is very cold!</div>

const div3 = <div id="love" title="love you">I love you all</div>


/*
    用 React.createElement()创建一个标签元素, 第一个参数是标签名字， 

    第二个参数是一个对象（可选），里面可以写标签的 样式、id等之类的属性

    之后的所有参数 都是这个标签的子元素, 可以分开写：  (...,'我是div哦',h1,div2,div3,<span>span</span>)

    也可以全部都写在一个数组里： (...,['我是div哦',h1,div2,div3,<span>span</span>])

    如果写在一个数组里要设置 key 值

 */      
                                                                     
const div1 = React.createElement('div',

    {className: 'div', style: { background: 'pink'}, 'react-data': 'hello' },'我是div哦',h1,div2,div3,<span>span</span>, h3)


/*
    使用reac-dom的渲染函数将 创建的标签 渲染到页面的指定区域（id为app的标签里面）
 */

ReactDOM.render(div1,document.getElementById('app')) 


/*ReactDOM.render(<div>hi</div>,document.getElementById('app')) */  // 后面的会覆盖前面的



/*

    总结： 创建 标签元素(虚拟节点） 的方法有两种：

    1. React.createElement(标签名字, 标签的属性(id，类名， 样式等), 子元素(可以数组也可以是分开写) )

    2. jsx语法 let span = <span id="span">xxxx</span>

    最后，虚拟节点创建完毕后，通过render函数 将 虚拟节 渲染到页面指定的地方 ReactDOM.render()
    
 */
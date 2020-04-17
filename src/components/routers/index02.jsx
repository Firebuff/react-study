import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from "react-router-dom";


function Home() {
   
    return <h2>Home</h2>;
}

function About() {
    
    return <h2>About</h2>;
}


function ContactHi() {
 
    return <h2>Contact 动态</h2>;
}

function Contact() {
 
    return <h2>contact 没有动态</h2>;
}


let style = {
    color: 'red',
    textDecoration: 'none'
}


function App() {
    return (
        <div>
            <ul>
                <li>
                    {/* NavLink 是一种特殊的 Link， 当路由匹配成功时， 类名active 会生效 */}
                    {/*<NavLink to="/home" activeClassName="active"> home </NavLink>*/}
                    <NavLink to="/home" activeStyle={ style }> home </NavLink>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
                <li>
                    <Link to="/contact/hi">/contact/hi</Link>
                </li>
                <li>
                {/*无对应的匹配，所以会返回 / 对应的组件 */}
                    <Link to="/none">none</Link> 
                </li>
                <Redirect to="/login" />
            </ul>
            <Switch>
                {/* 
                    如果当前的url是 /about， 就会渲染 /about 对应的组件，其他的组件会被忽略

                */}
                <Route path="/about">
                    <About />
                </Route>

                {/* 
                     

                    要注意 以下这两个组件的排列顺序，设置有动态路由的  <Route path="/contact/:id"> 

                    要在没有设置动态路由的 <Route path="/contact"> 之前，不然的话

                    当 url 是  /contact/hello 时， 也会匹配到 /contact, 因为switch 是只渲染 匹配到的所有路由的中

                    第一个，其余的会被忽略， 所以只会渲染 /contact 对应的组件， 而不会渲染 /contact/:xxx 对应的组件；

                    我们也可以在 Route 标签上设置一个属性 exact 来精准匹配，这样就不会因路由组件的排序 带来的问题
                    
                    <Route exact path="/contact/:id">

                */}
               
                <Route path="/contact/:id">
                    <ContactHi />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                {/* 
                    If none of the previous routes render anything,
                    this route acts as a fallback.

                    如果上面的路由一个都没有匹配到， 那么将会渲染 / 对应的路由

                    最重要的一点要记住： 以 / 开头的任何路由，比如： /xxxx,

                    总会匹配到 / , 所以我们要把 / 放到最后


                    总之，使用 switch 时候， 要把 含有斜杠 / 多的 放在前面（如果不使用exact属性）

                    Important: A route with path="/" will *always* match
                    the URL because all URLs begin with a /. So that's
                    why we put this one last of all 

                */}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}
ReactDom.render(
    <Router>
        <App></App>
    </Router>
    , document.getElementById('app'))
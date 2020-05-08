
import React from 'react'

import ReactDom from 'react-dom'

import { BrowserRouter as Router, Link, Route, useHistory, useLocation, useRouteMatch, useParams, NavLink } from 'react-router-dom'


function HomeButton() {

    // 可以使用  useHistory() 返回一个 history 实例，可使用里面的一些 方法， 如果回退，前进等方法
    let history = useHistory();

    console.log(history)

    function handleClick() {
        history.push("/home");
    }

    function back () {
        history.goBack()
    }

    function replace () {
        history.replace("/home");
    }

    return (

        <div>
            <button type="button" onClick={handleClick}>
                Go home
            </button>

            <button type="button" onClick={back}>
                Go back
            </button>

            <button type="button" onClick={replace}>
                repalce
            </button>
        </div>
        
    );
}


function Home () {
    const location = useLocation();
     console.log(location);

    return (
        <div>home</div>
    )
}

function About ({match}) {
   
    let location = useLocation();
   
    console.log(location)
    console.log('about')

   console.log(match)
  
    return (
        <div>about</div>
    )
}

/*class About extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        console.log('fggg')
        console.log(this.props)
        return (
            <div>about</div>
        )
    }

 
}*/












function BlogPost() {
    let match = useRouteMatch();
    console.log(match)

    // Do whatever you want with the match...
    return(
        <div>
            hi, blog!
        </div>
    )
}

// 导航点击后触发的事件
function activeEvent (match, location) {

    console.log(match, location)
    console.log('active')
}

function App () {
    return (

        /*
            BrowserRouter  有 5 个 属性：

                1. basename(string): 必须以 斜杠开头， 没有斜杠结尾， 如： /hello
                
                2. getUserConfirmation(funtion): 用来确认导航的，默认是 window.confirm

                3. foreRefresh(boolean): 用来设置是否强制浏览器整体刷新，默认是false

                4. keyLength(number): location.key的长度，默认是 6

                5. children(node): 想要渲染的节点, 注意，BrowserRouter只能有一个子节点
         */
        <Router basename="/hello"> 
            <div>
                <ul>
                    {/*设置了basename 之后， 下边的路由的开头就会以 /hello开头变成： /hello/home .... */}
                    <li>
                        {/*<Link to="/home">home</Link>*/}
                        <NavLink to="/home" location={{key:"mb5wu3",pathname:"/home/1"}}>home</NavLink>
                    </li>
                    <li>
                        {/*<Link to="/about">about</Link>*/}

                        <Link to={
                            {
                                pathname: '/about',
                                search: '?name=hi&age=78',
                                hash: '#ffsx',
                                state: {
                                    isLogin: true
                                }
                            }
                        }>about</Link>


                    </li>
                    <li>
                    {/*
                         NavLink和Link一样最终都是渲染成a标签，NavLink可以给这个a标签添加额外的属性
                         <NavLink to="/a">组件一</NavLink> 当点击此路由，a标签默认添加一个名为active的class
                         属性
                             activeClassName 用于自定义激活a标签的class
                             activeStyle 用于设置激活a标签的样式 
                                 activeStyle={{
                                     fontWeight: 'bold',
                                     color: 'red'
                                 }}
                             exact，当路径百分百匹配的时候才展示样式和class，但是不影响路由的匹配，"/a"和"/a/" 是相等的
                             strict，这个比exact还很，就算 "/a"和"/a/" 也是不相等的
                             isActive，此属性接收一个回调函数，用来做跳转的最后拦截
                                 <NavLink isActive={oddEvent} to="/a/123">组件一</NavLink>
                                 const oddEvent = (match, location) => {
                                     console.log(match,location)
                                     if (!match) {
                                         return false
                                     }
                                     console.log(match.id)
                                     return true
                                 }
                                 match里面保存了路由匹配信息的参数，是动态化的
                                 location里面保存的Link中的to传递的所有信息
                             location，此参数用来接受一个location对象，如果对象信息和当前的location信息对象匹配则跳转
                                 <NavLink to="/a/123" location={{key:"mb5wu3",pathname:"/a/123"}}/>
                    */}
                        <NavLink to="/btn" isActive={ activeEvent }>HomeButton</NavLink>
                    </li>
                    <li>
                        {/*
                            Link to  的两种类型： 

                            1. 可以传一个字符串， to="/blog"

                            2. 可以传一个对象, 可以通过 useLocation() 来获取对象里面的数据
                                <Link to={{
                                    pathname: '/courses',  // 传递的pathname
                                    search: '?sort=name',  // 传递的url参数
                                    hash: '#the-hash', // 在url参数后面的hash值
                                    state: { fromDashboard: true } // 自定义属性存在location中
                                }}/>

                        */}
                        <Link to="/blog">blog</Link>
                    </li>
                </ul>
                <div>

                    <Route path="/home">
                        <Home></Home>
                    </Route>   
                    <Route path="/about">
                       <About hi="dgd"></About>
                    </Route>
                    <Route path="/btn">
                       <HomeButton></HomeButton>
                    </Route>

                    {/*<Route path="/blog">
                       <BlogPost></BlogPost>
                    </Route>*/}


                    {/* 可以 外边注册一个 组件，也可以不注册，通过render 返回一个html */}
                    <Route path="/blog" render={ (match) => {
                        console.log(match)
                        return <div>hello, blog</div>
                    }} >
                       
                    </Route>


                    <Route children = { ({match, location, history}) => {
                        console.log(match, location, history)
                        return <li>5555</li>
                    }}>
                    </Route>
                </div>
            </div>
        </Router>
    )
}


ReactDom.render(<App>
  </App>, document.getElementById('app'))
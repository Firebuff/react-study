import React from 'react'
import ReactDom from 'react-dom'


// 引入 style 


import style from '@/css/practice02.scss'


console.log(style)


// 如果设置了 class ，在要在标签上设置 className = { style.类名} （style是引入的样式对象），这样给类名设置的样式才能生效

class Hi extends React.Component {
    constructor () {
        super()
    }

    render () {
        return <div>
            <ul>
                <li>
                    <span>what are you doing?</span>
                </li>
                <li>
                    <span className={style.sp} >hello</span>
                </li>
                <li className={style.last}> nice to meet you!</li>
                <li>
                    <span>99999</span>
                </li>
            </ul>
        </div>
    }
}


ReactDom.render(<div>

        <Hi></Hi>
    </div>, document.getElementById('app'))


import React from 'react'
import ReactDom from 'react-dom'

import PropTypes from 'prop-types'


// 引入 style 


import style from '@/css/practice02.scss'


console.log(style)


// 如果设置了 class ，在要在标签上设置 className = { style.类名} （style是引入的样式对象），这样给类名设置的样式才能生效

class Hi extends React.Component {
    constructor () {
        super()
    }

    // 如果不传参数，就设置默认值
    static defaultProps = {
        title: 'hi'
    }

    // 设置类型校验
    static propTypes = {
        title: PropTypes.string
    }

    render () {
        return <div>
            <h3>{this.props.title}</h3>
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

        <Hi title={'1222'}></Hi>
    </div>, document.getElementById('app'))




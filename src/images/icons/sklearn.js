import React from 'react'
import '../icons.less'
import { Icon } from 'antd'

export const SkLearn = () => (

  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 242.1 150"
    width="28px"
    height="28px">
    <path
      d="M212.711 127.088c33.87-33.867 39.498-83.146 12.572-110.07C198.361-9.903 149.084-4.275 115.217 29.59c-33.867 33.866-24.07 98.568-12.57 110.07 9.293 9.293 76.2 21.293 110.064-12.572z"
      fill="#f89939"/>
    <path
      d="M73.741 78.15C54.093 58.504 25.5 55.233 9.874 70.857c-15.62 15.622-12.355 44.22 7.297 63.865 19.652 19.654 57.195 13.969 63.863 7.295 5.396-5.387 12.361-44.215-7.293-63.865z"
      fill="#3499cd"/>
    <g fontSize="23.08" fontFamily="Helvetica" fill="#fff">
    </g>
    <g fontSize="23.08" fontFamily="Verdana" fill="#010101">
    </g>
  </svg>
)

let SkLearnIcon
export default SkLearnIcon = props => (
  <Icon component={SkLearn} {...props} />
)

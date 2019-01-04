import React from 'react'
import '../icons.less'
import { Icon } from 'antd'

const openvc = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 600" height="25px" width="25px">
    <defs>
      <path
        d="M -69.6503905 120.638015113  A 139.300781 139.300781 120 1 1 +69.6503905 120.638015113  L 27.7089845 47.9933689801  A 55.417969 55.417969 120 1 0 -27.7089845 47.9933689801  L -69.6503905 120.638015113  Z"
        id="cv_element"/>
    </defs>
    <use xlinkHref="#cv_element" x="298" y="140" fill="#ff0101" id="red"/>
    <use xlinkHref="#cv_element" x="457" y="415" fill="#0101ff" id="blue" transform="rotate(180,457,415)"/>
    <use xlinkHref="#cv_element" x="142" y="415" fill="#01ff01" id="green" transform="rotate(240,142,415)"/>
  </svg>
)

let OpenCVIcon
export default OpenCVIcon = props => (
  <Icon component={openvc} {...props} />
)

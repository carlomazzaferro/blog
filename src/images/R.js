import React from 'react'
import { Icon } from 'antd'
import './icons.less'

const RLang = () => (
<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="25" height="25" viewBox="0 0 724 561">
  <defs>
    <linearGradient id="gradientFill-1" x1="0" x2="1" y1="0" y2="1" gradientUnits="objectBoundingBox" spreadMethod="pad">
      <stop offset="0" stopColor="rgb(203,206,208)" stopOpacity="1"/>
      <stop offset="1" stopColor="rgb(132,131,139)" stopOpacity="1"/>
    </linearGradient>
    <linearGradient id="gradientFill-2" x1="0" x2="1" y1="0" y2="1" gradientUnits="objectBoundingBox" spreadMethod="pad">
      <stop offset="0" stopColor="rgb(39,109,195)" stopOpacity="1"/>
      <stop offset="1" stopColor="rgb(22,92,170)" stopOpacity="1"/>
    </linearGradient>
  </defs>
  <path d="M361.453,485.937 C162.329,485.937 0.906,377.828 0.906,244.469 C0.906,111.109 162.329,3.000 361.453,3.000 C560.578,3.000 722.000,111.109 722.000,244.469 C722.000,377.828 560.578,485.937 361.453,485.937 ZM416.641,97.406 C265.289,97.406 142.594,171.314 142.594,262.484 C142.594,353.654 265.289,427.562 416.641,427.562 C567.992,427.562 679.687,377.033 679.687,262.484 C679.687,147.971 567.992,97.406 416.641,97.406 Z" fill="url(#gradientFill-1)" fill-rule="evenodd"/>
  <path d="M550.000,377.000 C550.000,377.000 571.822,383.585 584.500,390.000 C588.899,392.226 596.510,396.668 602.000,402.500 C607.378,408.212 610.000,414.000 610.000,414.000 L696.000,559.000 L557.000,559.062 L492.000,437.000 C492.000,437.000 478.690,414.131 470.500,407.500 C463.668,401.969 460.755,400.000 454.000,400.000 C449.298,400.000 420.974,400.000 420.974,400.000 L421.000,558.974 L298.000,559.026 L298.000,152.938 L545.000,152.938 C545.000,152.938 657.500,154.967 657.500,262.000 C657.500,369.033 550.000,377.000 550.000,377.000 ZM496.500,241.024 L422.037,240.976 L422.000,310.026 L496.500,310.002 C496.500,310.002 531.000,309.895 531.000,274.877 C531.000,239.155 496.500,241.024 496.500,241.024 Z" fill="url(#gradientFill-2)" fill-rule="evenodd"/>
</svg>
)

let RLangIcon
export default RLangIcon = props => (
  <Icon className='custom_icon' component={RLang} {...props} />
)

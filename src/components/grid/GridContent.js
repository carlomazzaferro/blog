import React, { PureComponent } from 'react'

import './GridContent.less'

class GridContent extends PureComponent {
  render () {
    const { children } = this.props
    return <div className='wide'>{children}</div>
  }
}

export default GridContent

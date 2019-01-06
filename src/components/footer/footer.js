import React, { Fragment } from 'react'
import classNames from 'classnames'
import styles from './footer.less'
import { Icon } from 'antd'

const GlobalFooter = ({ className }) => {
  const clsString = classNames('globalFooter', className)
  const copyright = (
    <Fragment>
      Copyright <Icon type="copyright"/> 2018 Carlo Mazzaferro
    </Fragment>
  )
  return (
    <footer className={clsString}>
      {copyright && <div className={styles.copyright}>{copyright}</div>}
      <div>
        Built with <a href='https://gatsbyjs.org'> Gatsby </a> and the amazing
        <a href='https://pro.ant.design/'> Ant Design Pro </a>
      </div>
    </footer>
  )
}

export default GlobalFooter

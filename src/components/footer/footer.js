import React from 'react'
import classNames from 'classnames'
import styles from './footer.less'

const GlobalFooter = ({ className, links, copyright }) => {
  const clsString = classNames('globalFooter', className)
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

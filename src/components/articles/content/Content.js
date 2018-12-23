import React from 'react'
import './index.less'

const formattedDate = date => (
  date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
)

const ArticleListContent = ({ data: { blurb, updatedAt, avatar, icons, href } }) => {
  console.log(updatedAt.toTimeString())
  return (
    <div className='listContent'>
      <div className='description'>{blurb}</div>
      <div className='extra'>
        {icons.map(item => (
          <div key={item.id} style={{ width: 30, marginLeft: item.id === 1 ? 0 : 10, float: 'left' }}>
            <a style={{ lineHeight: '.8em' }} href={item.href}>
              {item.i}
            </a>
          </div>
        ))}
        <a style={{ marginLeft: 20 }} href={href}> Read</a>
        <em> Last Updated: {formattedDate(updatedAt)}</em>
      </div>
    </div>
  )
}

export default ArticleListContent

import React, { PureComponent } from 'react'
import { Icon, List, Tag } from 'antd'
import ArticleListContent from './content/Content'
import './Articles.less'
import { fakeList } from '../../mocks'

class Articles extends PureComponent {
  render () {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }}/>
        {text}
      </span>
    )
    return (
      <List
        size="large"
        className='articleList'
        rowKey="id"
        itemLayout="vertical"
        dataSource={fakeList(12)}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <IconText type="star-o" text={item.star}/>,
              <IconText type="like-o" text={item.like}/>,
              <IconText type="message" text={item.message}/>,
            ]}
          >
            <List.Item.Meta
              title={
                <a className='listItemMetaTitle' href={item.href}>
                  {item.title}
                </a>
              }
              description={
                <span>
                  <Tag>Ant Design</Tag>
                  <Tag>设计语言</Tag>
                  <Tag>蚂蚁金服</Tag>
                </span>
              }
            />
            <ArticleListContent data={item}/>
          </List.Item>
        )}
      />
    )
  }
}

export default Articles

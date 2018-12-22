import React, { PureComponent } from 'react'
import { Icon, List, Tag } from 'antd'
import ArticleListContent from './content/Content'
import './Articles.less'
import { fakeList } from '../../mocks'
import Button from 'antd/es/button'

const articleCount = 4

class Articles extends PureComponent {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  }

  componentDidMount () {
    this.setState({
      count: articleCount,
      list: fakeList(articleCount),
    })
  }

  onLoadMore = () => {
    const ct = this.state.count + articleCount
    this.setState({
      count: ct,
      list: fakeList(ct)
    })
  }

  render () {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }}/>
        {text}
      </span>
    )
    return (
      <div>
        <List
          size="large"
          className='articleList'
          rowKey="id"
          itemLayout="vertical"
          loadMore={this.onLoadMore}
          dataSource={this.state.list}
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
                  <a className='listItemMetaTitle' style={{ marginLeft: 0 }} href={item.href}>
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
        <div style={{
          textAlign: 'left', marginTop: 12, height: 32, lineHeight: '32px',
        }}
        >
          <Button onClick={this.onLoadMore}> Load More </Button>
        </div>
      </div>
    )
  }
}

export default Articles

import React, { PureComponent } from 'react'
import { List, Tag } from 'antd'
import ArticleListContent from './content/Content'
import './Articles.less'
import Button from 'antd/es/button'
import { maxArticles, sortedBlurbs } from '../../content'
import { uuidv4 } from '../utils/utils'

const articleCount = 3

class Articles extends PureComponent {
  state = {
    count: articleCount,
    list: [],
  }

  componentDidMount () {
    this.setState({
      count: articleCount,
      list: sortedBlurbs(articleCount),
    })
  }

  onLoadMore = () => {
    const ct = this.state.count + articleCount
    this.setState({
      count: ct,
      list: sortedBlurbs(ct)
    })
  }

  render () {
    return (
      <div>
        <List
          size="large"
          className='articleList'
          rowKey="id"
          itemLayout="vertical"
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item
              key={item.id}
              // actions={[
              //   <IconText type="star-o" text={item.star}/>,
              //   <IconText type="like-o" text={item.like}/>,
              //   <IconText type="message" text={item.message}/>,
              // ]}
            >
              <List.Item.Meta
                title={
                  <a className='listItemMetaTitle' style={{ marginLeft: 0 }} href={item.href}>
                    {item.title}
                  </a>

                }
                description={
                  <span>
                    {item.tags.map(i => (
                      <Tag key={uuidv4()}> { i } </Tag>
                    ))}
                  </span>
                }
              />
              <ArticleListContent key={item.id} data={item}/>
            </List.Item>

          )}

        />
        <div style={{
          textAlign: 'left', marginTop: 12, height: 32, lineHeight: '32px',
        }}
        >
          <Button disabled={this.state.count >= maxArticles} onClick={this.onLoadMore}> Load More </Button>
        </div>
      </div>
    )
  }
}

export default Articles

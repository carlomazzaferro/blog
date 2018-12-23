import React, { PureComponent } from 'react'
import { Icon, List, Tag } from 'antd'
import ArticleListContent from './content/Content'
import './Articles.less'
import Button from 'antd/es/button'
import { maxArticles, sortedBlurbs } from '../../consts/blurbs/index'

const articleCount = 3

class Articles extends PureComponent {
  state = {
    count: articleCount,
    data: [],
    list: [],
  }

  componentDidMount () {
    console.log(sortedBlurbs(10))
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
    console.log(maxArticles, this.state.count)
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
                      <Tag> { i } </Tag>
                    ))}
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
          <Button disabled={this.state.count >= maxArticles} onClick={this.onLoadMore}> Load More </Button>
        </div>
      </div>
    )
  }
}

export default Articles

import React, { PureComponent } from 'react'
import { Card, List } from 'antd'
import './technologies.less'
import { technologies } from '../../content/index'
import Button from 'antd/es/button'

const articleCount = 9
const allArts = technologies.sort((a, b) => a.LOC - b.LOC).reverse()
const maxArticles = allArts.length

class Technologies extends PureComponent {
  state = {
    count: articleCount,
    list: [],
  }

  componentDidMount () {
    this.setState({
      count: articleCount,
      list: allArts.slice(0, articleCount),
    })
  }

  onLoadMore = () => {
    const ct = this.state.count + 3
    this.setState({
      count: ct,
      list: allArts.slice(0, ct)
    })
  }

  render () {
    const Header = () => (
      <div className="cardsHeader">
        This information is mostly based on what has been gathered at <a href='https://sourcerer.io/carlomazzaferro'>
        sourcerer.io
        </a>, an application that gathers information from your commits and builds a visual profile from it.
        It is mostly from my open-source contributions.
      </div>
    )

    const CardInfo = ({ commits, loc }) => (
      <div className='cardInfo'>
        <div>
          <p>Commits</p>
          <p>{commits}</p>
        </div>
        <div>
          <p>Lines of Code</p>
          <p>{loc}</p>
        </div>
      </div>
    )
    return (
      <div>
        <Header/>
        <List
          rowKey="id"
          className='filterCardList'
          grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item key={item.id}>
              <Card
                hoverable
                bodyStyle={{ paddingBottom: 20 }}
              >
                <Card.Meta avatar={item.i} title={item.name}
                />
                <div className='cardItemContent'>
                  <CardInfo
                    commits={item.commits}
                    loc={item.LOC}
                  />
                </div>
              </Card>
            </List.Item>
          )}
        />
        <div style={{
          textAlign: 'left', marginTop: 24, height: 32, lineHeight: '32px',
        }}
        >
          <Button disabled={this.state.count >= maxArticles} onClick={this.onLoadMore}> Load More </Button>
        </div>
      </div>
    )
  }
}

export default Technologies

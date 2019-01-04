import React, { PureComponent } from 'react'
import { Card, Col, Divider, Row, Tag } from 'antd'
import GridContent from '../grid/GridContent'
import './main.less'
import { currUser } from '../../mocks'
import { copyright } from '../../consts/footer'
import Articles from '../../components/articles'
import Projects from '../../components/projects/projects'
import Technologies from '../../components/technologies/technologies'
import { avatars } from '../../consts/social'
import { operationTabList } from '../../consts/nav'
import GlobalFooter from '../footer/footer'

class MainContent extends PureComponent {
  state = {
    newTags: [],
    inputVisible: false,
    inputValue: '',
    activeTab: 'articles',
    width: 0,
  }

  onTabChange = key => {
    this.setState({
      activeTab: key
    })
  }
  componentDidMount () {
    this.handleWindowSizeChange() // Set width
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  renderTab = () => {
    switch (this.state.activeTab) {
    case 'articles':
      return <Articles/>
    case 'applications':
      return <Technologies/>
    case 'projects':
      return <Projects/>
    default:
      return <Articles/>
    }
  }

  render () {
    const { newTags } = this.state
    return (
      <GridContent className="userCenter">
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Card bordered={false} hoverable={false} style={{ margin: 24 }}>
              {currUser && Object.keys(currUser).length ? (
                <div>
                  <div className="avatarHolder">
                    {currUser.avatar}
                    <div className="name">{currUser.name}</div>
                    <div>{currUser.signature}</div>
                  </div>
                  <div className="detail">
                    <p>
                      <i className="job_title"/>
                      {currUser.title}
                    </p>
                    <p>
                      <i className="group"/>
                      {currUser.group}
                    </p>
                    <p>
                      <i className="address"/>
                      {currUser.geographic.province.label}
                      {currUser.geographic.city.label}
                    </p>
                  </div>
                  <Divider dashed/>
                  <div className="tags">
                    <div className="tagsTitle">Interests</div>
                    {currUser.tags.concat(newTags).map(item => (
                      <Tag key={item.key}>{item.label}</Tag>
                    ))}
                  </div>
                  <Divider style={{ marginTop: 16 }} dashed/>
                  <div className="team">
                    <div className="teamTitle">Social</div>
                    <Row gutter={36}>
                      <Row style={{ marginLeft: 20 }} lg={24} xl={12}>
                        {avatars.map(item => (
                          <div key={item.id} style={{ width: 30, marginLeft: item.id === 1 ? 0 : 10, float: 'left' }}>
                            <a style={{ lineHeight: '.8em' }} href={item.href}>
                              {item.icon}
                            </a>
                          </div>
                        ))}
                      </Row>
                    </Row>
                  </div>
                </div>
              ) : (
                'loading...'
              )}
            </Card>
          </Col>
          <Divider orientation='center'
            type='vertical'
            className="v_divider"
          />
          <Col lg={16} style={{ float: 'right', paddingLeft: 0 }}>
            <Card
              className="tabsCard"
              bordered={false}
              tabList={operationTabList}
              activeTabKey={this.state.activeTab}
              onTabChange={this.onTabChange}
            >
              {this.renderTab()}
            </Card>
          </Col>
        </Row>
        <GlobalFooter copyright={copyright}/>
      </GridContent>
    )
  }
}

export default MainContent
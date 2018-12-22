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

const user = currUser()

class Center extends PureComponent {
  state = {
    newTags: [],
    inputVisible: false,
    inputValue: '',
    activeTab: 'articles'
  }

  onTabChange = key => {
    this.setState({
      activeTab: key
    })
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
              {user && Object.keys(user).length ? (
                <div>
                  <div className="avatarHolder">
                    {user.avatar}
                    <div className="name">{user.name}</div>
                    <div>{user.signature}</div>
                  </div>
                  <div className="detail">
                    <p>
                      <i className="job_title"/>
                      {user.title}
                    </p>
                    <p>
                      <i className="group"/>
                      {user.group}
                    </p>
                    <p>
                      <i className="address"/>
                      {user.geographic.province.label}
                      {user.geographic.city.label}
                    </p>
                  </div>
                  <Divider dashed/>
                  <div className="tags">
                    <div className="tagsTitle">Interests</div>
                    {user.tags.concat(newTags).map(item => (
                      <Tag key={item.key}>{item.label}</Tag>
                    ))}
                  </div>
                  <Divider style={{ marginTop: 16 }} dashed/>
                  <div className="team">
                    <div className="teamTitle">Social</div>
                    <Row gutter={36}>
                      <Row style={{ marginLeft: 20 }} lg={24} xl={12}>
                        {avatars().map(item => (
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
          <Divider orientation='center' type='vertical' style={{ zIndex: 2, marginTop: 65, height: '100vh' }}/>
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

export default Center

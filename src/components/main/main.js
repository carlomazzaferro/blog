import React, { PureComponent } from 'react'
import { Avatar, Card, Col, Divider, Row, Tag } from 'antd'
import GridContent from '../grid/GridContent'
import './main.less'
import { currUser, noticesData } from '../../mocks'
import Articles from '../../components/articles'
import Projects from '../../components/projects/projects'
import Technologies from '../../components/technologies/technologies'

// @connect(({ loading, user, project }) => ({
//   listLoading: loading.effects['list/fetch'],
//   currentUser: user.currentUser,
//   currentUserLoading: loading.effects['user/fetchCurrent'],
//   project,
//   projectLoading: loading.effects['project/fetchNotice'],
// }))

const user = currUser()
const notices = noticesData()

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
    const operationTabList = [
      {
        key: 'articles',
        tab: (
          <span>
            Articles <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
      {
        key: 'applications',
        tab: (
          <span>
            Technologies <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
      {
        key: 'projects',
        tab: (
          <span>
            Projects <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
    ]

    return (
      <GridContent className="userCenter">
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Card bordered={false} style={{ marginBottom: 24 }}>
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
                    <div className="tagsTitle">Labels</div>
                    {user.tags.concat(newTags).map(item => (
                      <Tag key={item.key}>{item.label}</Tag>
                    ))}
                  </div>
                  <Divider style={{ marginTop: 16 }} dashed/>
                  <div className="team">
                    <div className="teamTitle">Teams</div>
                    <Row gutter={36}>
                      {notices.map(item => (
                        <Col key={item.id} lg={24} xl={12}>
                          <Avatar size="small" src={item.logo}/>
                          {item.member}
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              ) : (
                'loading...'
              )}
            </Card>
          </Col>
          <Col lg={17} md={24}>
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
      </GridContent>
    )
  }
}

export default Center

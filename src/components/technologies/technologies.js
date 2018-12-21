import React, { PureComponent } from 'react'
import { Avatar, Card, Dropdown, Icon, List, Menu, Tooltip } from 'antd'
import { formatWan } from '../utils/utils'
import './technologies.less'
import { fakeList } from '../../mocks'

// @connect(({ list }) => ({
//   list,
// }))

const list = fakeList(14)

class Technologies extends PureComponent {
  render () {
    const itemMenu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3d menu item
          </a>
        </Menu.Item>
      </Menu>
    )
    const CardInfo = ({ activeUser, newUser }) => (
      <div className='cardInfo'>
        <div>
          <p>活跃用户</p>
          <p>{activeUser}</p>
        </div>
        <div>
          <p>新增用户</p>
          <p>{newUser}</p>
        </div>
      </div>
    )
    return (
      <List
        rowKey="id"
        className='filterCardList'
        grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
        dataSource={list}
        renderItem={item => (
          <List.Item key={item.id}>
            <Card
              hoverable
              bodyStyle={{ paddingBottom: 20 }}
              actions={[
                <Tooltip title="Download">
                  <Icon type="download"/>
                </Tooltip>,
                <Tooltip title="编辑">
                  <Icon type="edit"/>
                </Tooltip>,
                <Tooltip title="Share">
                  <Icon type="share-alt"/>
                </Tooltip>,
                <Dropdown overlay={itemMenu}>
                  <Icon type="ellipsis"/>
                </Dropdown>,
              ]}
            >
              <Card.Meta avatar={<Avatar size="small" src={item.avatar}/>} title={item.title}/>
              <div className='cardItemContent'>
                <CardInfo
                  activeUser={formatWan(item.activeUser)}
                  newUser={item.newUser}
                />
              </div>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

export default Technologies

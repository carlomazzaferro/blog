import React, { PureComponent } from 'react'
import { Card, List } from 'antd'
import AvatarList from '../avatars/AvatarList'
import './projects.less'
import { fakeList } from '../../mocks'

class Projects extends PureComponent {
  render () {
    return (
      <List
        className='coverCardList'
        rowKey="id"
        grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
        dataSource={fakeList(8)}
        renderItem={item => (
          <List.Item>
            <Card
              className='card'
              hoverable
              cover={<img alt={item.title} src={item.cover}/>}
            >
              <Card.Meta title={<a>{item.title}</a>} description={item.subDescription}/>
              <div className='cardItemContent'>
                <span>2 hours ago</span>
                <div className='avatarList'>
                  <AvatarList size="mini">
                    {item.members.map(member => (
                      <AvatarList.Item
                        key={`${ item.id }-avatar-${ member.id }`}
                        src={member.avatar}
                        tips={member.name}
                      />
                    ))}
                  </AvatarList>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

export default Projects

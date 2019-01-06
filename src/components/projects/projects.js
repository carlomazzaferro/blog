import React, { PureComponent } from 'react'
import { Card, List } from 'antd'
// import AvatarList from '../avatars/AvatarList'
import './projects.less'
import { projects } from '../../content/'

class Projects extends PureComponent {
  state = {}

  componentDidMount () {
    this.renderDateTime(projects)
  }

  renderDateTime = proj => {
    proj.map(item =>
      item.updatedAt.then(t =>
        this.setState({ [item.title]: t }))
    )
  }

  render () {
    return (
      <List
        className='coverCardList'
        rowKey="id"
        grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
        dataSource={projects}
        renderItem={item => (
          <List.Item>
            <Card
              className='card'
              hoverable
              cover={item.cover}
            >
              <Card.Meta title={<a>{item.title}</a>} description={item.subDescription}/>
              <div className='cardItemContent'>
                Last Commit: &nbsp;
                <div className='cardItemContentDate'>{
                  this.state[item.title]
                }
                </div>

                {/* <div className='avatarList'> */}
                {/* <AvatarList size="mini"> */}
                {/* {item.members.map(member => ( */}
                {/* <AvatarList.Item */}
                {/* key={`${ item.id }-avatar-${ member.id }`} */}
                {/* src={member.avatar} */}
                {/* tips={member.name} */}
                {/* /> */}
                {/* ))} */}
                {/* </AvatarList> */}
                {/* </div> */}
              </div>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

export default Projects

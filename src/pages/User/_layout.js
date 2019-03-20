import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

const {Content} = Layout
class UserLayout extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Content>
            <Row>
              <Col span={6} offset={9}>
                { this.props.children }
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default UserLayout;

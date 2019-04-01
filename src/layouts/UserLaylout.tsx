import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

const styles = require('./UserLaylout.scss')
const logo = require('@/assets/images/logo.jpeg')

const { Content } = Layout
class UserLayout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Layout>
          <Content>
            <div className={styles.top}>
              <span className={styles.title}>Stack </span>
              <img alt="logo" className={styles.logo} src={logo} />
              <span className={styles.title}>Smash</span>
            </div>
            <Row>
              <Col span={8} offset={8}>
                {this.props.children}
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default UserLayout;

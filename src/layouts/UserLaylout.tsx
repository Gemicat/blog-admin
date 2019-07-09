import React from 'react'
import { Layout, Row, Col } from 'antd'
const { Content } = Layout

// 引入图片
const styles = require('./UserLaylout.scss')
const logo = require('@/assets/images/logo.jpeg')

export default (props) => {
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
              {props.children}
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  )
}
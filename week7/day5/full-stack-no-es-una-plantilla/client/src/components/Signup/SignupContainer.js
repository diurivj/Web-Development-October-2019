import React from 'react'
import { Form, Input, Icon, Button } from 'antd'
import { MyContext } from '../../context'

export default function SignupContainer(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <Form
          onSubmit={e => {
            context.handleSignup(e)
            props.history.push('/login')
          }}
        >
          <Form.Item>
            <Input
              name="name"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              type="text"
              value={context.formSignup.name}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="email"
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              type="email"
              value={context.formSignup.email}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="password"
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
              value={context.formSignup.password}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Signup
            </Button>
          </Form.Item>
        </Form>
      )}
    </MyContext.Consumer>
  )
}

import { Button, Input, Form, message } from "antd"

import { useNavigate } from 'react-router-dom'

import { LoginForm, login } from '../../api/auth'
 
export default () => {

  const navigate = useNavigate()

  const handleFinish = async (value:LoginForm) => {
    const result = await login(value)

    if(result.data.code === 200){

      const token = result.data.data
      localStorage.setItem("token",token)

      navigate("/")

      message.success("登录成功")
    }else{
      message.error("登录失败")
    }
    
  }

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <div className="flex shadow-md">
        <div
          className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
          style={{ width: "24rem", height: "32rem" }}
        >
          <div className="w-72">
            <h1 className="text-xl font-semibold">Welcome back</h1>

            <Form className="mt-4" initialValues={{ layout: "vertical" }} onFinish={handleFinish}>

              <Form.Item label="Email" name={"email"} rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
              </Form.Item>

              <Form.Item label="Password" name={"password"} rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input
                    type="password"
                    placeholder="Enter your password"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
              </Form.Item>
              
              <div className="mb-3">
                <Button type="primary" block htmlType="submit">Sign in</Button>
              </div>
            </Form>
          </div>
        </div>

        <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{ height: "32rem" }}>
          <img
            className="h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src="https://images.pexels.com/photos/13150616/pexels-photo-13150616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import '../styles/registerstyle.css';
import {Form ,Input} from 'antd'
import {Link} from 'react-router-dom'
const register = () => {

    const onfinishHandler = (values) =>{
      console.log(values)
    }
  return (  
    <>
    <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className="card p-4">
          <h2 className="text-center">Registration Form</h2>
          <Form.Item label="Name" name="name">
            <Input type="text" required /> 
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type="text" required /> 
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required /> 
          </Form.Item>

          <Link to="/login" className="m-2">Already user login here</Link>
          <button className="btn btn-primary" type="submit">Register </button>

        </Form>
    </div>
    </>
  );
};

export default register;
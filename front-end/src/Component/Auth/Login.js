
import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Input } from 'antd';
import { api } from '../../Api';
import { useNavigate } from "react-router-dom";
import loginPic from '../Images/loginPic.png'



function Login() {
  const navigate = useNavigate();
  const [usersEmail, setUsersEmail] = useState('')
  const [usersPassword, setUsersPassword] = useState('')

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/')
    }
  }, [])


  const userLogin = async () => {

    try {
      let paylod = {
        email: usersEmail,
        password: usersPassword,
      };
      const usersdata = await api.post('/login', paylod)
      console.log("🚀 ~ file: Login.js:41 ~ userLogin ~ usersdata:", usersdata)

      if (usersdata.data.name) {
        localStorage.setItem('user', JSON.stringify(usersdata))
        navigate('/')

      } else {

        alert('pelase enter the correct details')
      }
    } catch (err) {
      console.log("🚀 ~ file: Login.js:56 ~ userLogin ~ err", err)

    }

  }

  return (
    <>
      <Row span={16} type="flex" justify="center" align="middle" style={{ marginTop: '5%' }}>
        <Col span={6} style={{ backgroundColor: '#BDB76B' }}>
          <Row justify="center" align="middle" className="mt-1.5re">
            <h1> USER LOGIN</h1>
          </Row>

          <Row type="flex" style={{ marginTop: '5%' }}>
            <Col>
              <label className='p-2'>
                <i className="zmdi zmdi-email"></i>
              </label>
            </Col>
            <Col span={16}>
              <Input type='text' name='email' id='email' placeholder='Enter your Email'
                value={usersEmail}
                onChange={(e) => setUsersEmail(e.target.value)}
              ></Input>
            </Col>
          </Row>

          <Row type="flex" style={{ marginTop: '5%' }}>
            <Col>
              <label className='p-2'>
                <i className="zmdi zmdi-lock"></i>
              </label>
            </Col>
            <Col span={16}>
              <Input type='password' name='usersPassword' id='usersPassword' placeholder='Enter your Password'
                value={usersPassword}
                onChange={(e) => setUsersPassword(e.target.value)}
              ></Input>
            </Col>
          </Row>

          <Row type="flex" style={{ marginTop: '5%' }}>
            <Col>
              <label className='p-2'>
                <i className="zmdi zmdi-lock"></i>
              </label>
            </Col>
          </Row>

          <Row justify="center" align="middle" style={{ margin: '10%' }}>
            <Col >
              <Button
                onClick={userLogin}
              >LOGIN</Button>
            </Col>
          </Row>
        </Col>
        <Col span={10}>
          <img
            src={loginPic}
            alt="Login"
            style={{
              width: "100%",
              borderRadius: "100%",
              objectFit: "cover",
            }}
          />
          <Col justify="center" align="middle">
            <Button href="/Signup">Creat an account</Button>
          </Col>
        </Col>
      </Row >
    </>
  );
}

export default Login;
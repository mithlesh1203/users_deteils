import React, { useEffect, useState } from 'react'
import { Button, Row, Col, message, Input } from 'antd';
// import signUpLogo from '../../images/signupPic.png'
import { api } from '../../Api';
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [usersName, setUsersName] = useState('');
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [work, setWork] = useState();
  const [age, setAge] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/')
    }
  }, []);


  const postData = async () => {

    let paylod = {
      name: usersName,
      email: email,
      phoneNo: phoneNo,
      work: work,
      age: age,
      password: password,
      cPassword: cPassword
    };
    console.log("🚀 ~ file: SignUp.js:34 ~ postData ~ paylod:", paylod)

    // if (!usersName || !email || !phoneNo || !work || !password || !cPassword) {
    //   return message.warning('All fields are compersary please fill')
    // }
    const usersdata = await api.post('/register', paylod)

    if (usersdata.status === 200) {
      window.alert('Registation Sucessfull')
      localStorage.setItem('user', JSON.stringify(usersdata))
      navigate('/login')
    } else {
      window.alert('Invalid Registation')
      console.log('Invalid Registation')
    }
  }
  return (
    <>
      <Row span={16} type="flex" justify="center" align="middle" style={{ marginTop: '5%' }}>
        <Col span={6} style={{ backgroundColor: '#BDB76B' }}>
          <Row justify="center" align="middle" className="mt-1.5re">
            <h1>Sign up</h1>
          </Row>
          <Row type="flex" style={{ marginTop: '5%' }}>
            <Col>
              <label className='p-2'>
                <i className="zmdi zmdi-account"></i>
              </label>
            </Col>
            <Col span={16}>
              <Input type='text' name='usersName' id='usersName' placeholder='Your Name'
                value={usersName}
                onChange={(e) => setUsersName(e.target.value)}
              ></Input>
            </Col>
          </Row>
          <Row type="flex" style={{ marginTop: '5%' }}>
            <Col>
              <label className='p-2'>
                <i className="zmdi zmdi-email"></i>
              </label>
            </Col>
            <Col span={16}>
              <Input type='text' name='email' id='email' placeholder='Email Id'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
            </Col>
          </Row>
          <Row type="flex" style={{ marginTop: '5%' }}>
            <Col>
              <label className='p-2'>
                <i className="zmdi zmdi-phone"></i>
              </label>
            </Col>
            <Col span={16}>
              <Input type='text' name='phoneNo' id='phoneNo' placeholder='Phone Number'
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              ></Input>
            </Col>
          </Row>
          <Row type="flex" style={{ marginTop: '5%' }}>
            <Col>
              <label className='p-2'>
                <i className="zmdi zmdi-phone"></i>
              </label>
            </Col>
            <Col span={16}>
              <Input type='text' name='Age' id='Age' placeholder='Enter Age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              ></Input>
            </Col>
          </Row>
          <Row type="flex" style={{ marginTop: '5%' }}>
            <Col>
              <label className='p-2'>
                <i className="zmdi zmdi-graduation-cap"></i>
              </label>
            </Col>
            <Col span={16}>
              <Input type='text' name='work' id='work' placeholder='Work Detail'
                value={work}
                onChange={(e) => setWork(e.target.value)}
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
              <Input type='password' name='password' id='password' placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
            </Col>
          </Row>
          <Row type="password" style={{ marginTop: '5%' }}>
            <Col>
              <label className='p-2'>
                <i className="zmdi zmdi-lock"></i>
              </label>
            </Col>
            <Col span={16}>
              <Input type='password' name='cPassword' id='cPassword' placeholder='Conform Password'
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              ></Input>
            </Col>
          </Row>

          <Row justify="center" align="middle" style={{ margin: '10%' }}>
            <Col >
              <Button
                onClick={postData}
              >SUBMIT</Button>
            </Col>
          </Row>

        </Col>
        <Col span={10}>
          <img
            alt="Login"
            style={{
              width: "100%",
              borderRadius: "100%",
              objectFit: "cover",
            }}
          />
          <Col justify="center" align="middle">
            <Button href="/Login">I am alredy Registor</Button>
          </Col>
        </Col>
      </Row >
    </>
  )
}

export default SignUp;
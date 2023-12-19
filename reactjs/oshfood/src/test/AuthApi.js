import {Card, Form, Button, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import {useState} from 'react'

function AuthApi() {
  const [login, setLogin] = useState('')
  const [status, setStatus] = useState(0)
  const [password, setPassword] = useState('')

  const check = () => {
    axios.get('http://192.168.0.181:5000/login', {
      params: {
        name: login
      }
    }).then((res) => {
      if (res.data === 'Welcome') {
        setStatus(1)
      } else {
        alert('Ошибка!')
      }
    }).catch(e => {
      console.log(e)
    })
  }

  const signIn = () => {
    axios.get('http://192.168.0.181:5000/sign_in', {
      params: {
        name: login,
        password,
      }
    }).then((res) => {
      if (res.data === 'Congrats') {
        alert('Welcome')
      } else {
        alert('Ошибка!')
      }
    }).catch(e => {
      console.log(e)
    })
  }

  const onChange = (f) => (e) => f(e.target.value)

  return (
    <>
      <Row className={'justify-content-center align-items-center'} style={{height: '100vh'}}>
        <Col md={5}>
          <Card>
            <Card.Body>
              <h2 className={'text-muted text-center'}>Welcome!</h2>

              <Form.Group className="mb-3" controlId="formBasicLogin">
                <Form.Label>Your login</Form.Label>
                <Form.Control value={login} onChange={onChange(setLogin)} type="email" placeholder="Enter login"/>
              </Form.Group>

              {status === 1 ? (
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={password} onChange={onChange(setPassword)} type="password" placeholder="Password"/>
                </Form.Group>
              ) : null}

              {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
              {/*  <Form.Check type="checkbox" label="Check me out"/>*/}
              {/*</Form.Group>*/}

              <Button disabled={!login} onClick={status === 0 ? check : signIn} variant="primary" type="submit">
                Sign in
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default AuthApi

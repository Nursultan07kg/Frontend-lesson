import {useEffect, useState} from 'react'
import axios from 'axios'
import {Button, Card, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {API_URL} from '../settings'

function HomePage() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}categories.php`).then(res => {
      console.log(res.data)
      setCategories(res.data.categories)
    }).catch(e => {
      console.log(e)
    })
  }, [])

  const sendMessage = () => {
    const token = '5420140103:AAE7A5Q6ToezSpXvHsD7YhegZjqOAMG0Mvo'
    axios.post(`https://api.telegram.org/bot${token}/sendPhoto`, {
      photo: 'https://www.ixbt.com/img/n1/news/2022/2/5/756408702220221_large_large.jpg',
      chat_id: 1947916126,
    })
      .then((res) => {
        console.log(res)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <>
      <Button onClick={() => sendMessage()}>Send Telegram message</Button>
      <Row className={'mt-4'}>
        {categories.map(g => (
          <Col sm={12} md={4} lg={3}>
            <Card className={'mb-4'}>
              <Card.Img variant="top" src={g.strCategoryThumb}/>
              <Card.Body>
                <Card.Title>{g.strCategory}</Card.Title>
                <Button
                  as={Link}
                  to={`/category/${g.strCategory}`}
                  variant="primary"
                >Show</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage

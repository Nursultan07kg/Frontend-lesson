import {useEffect, useState} from 'react'
import axios from 'axios'
import {Col, Row} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import MealComponent from '../components/MealComponent'
import {API_URL} from '../settings'

function AreaPage() {
  const [meals, setMeals] = useState([])
  const params = useParams()

  useEffect(() => {
    axios.get(`${API_URL}filter.php?a=${params.name}`).then(res => {
      console.log(res.data.meals)
      setMeals(res.data.meals)
    }).catch(e => {
      console.log(e)
    })
  }, [params.name])

  return (
    <Row className={'mt-4'}>
      {meals.map(g => (
        <Col sm={12} md={4} lg={3}>
          <MealComponent meal={g} />
        </Col>
      ))}
    </Row>
  )
}

export default AreaPage

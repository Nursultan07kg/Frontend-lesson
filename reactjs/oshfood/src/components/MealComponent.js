import {Button, Card} from 'react-bootstrap'

function MealComponent(props) {
  const meal = props.meal

  console.log(meal)

  return (
    <Card className={'mb-4'}>
      <Card.Img variant="top" src={meal.strMealThumb} />
      <Card.Body>
        <Card.Title>{meal.strMeal}</Card.Title>
        <Button variant="primary">Show</Button>
        <Button variant={'success'}>Add to basket</Button>
      </Card.Body>
    </Card>
  )
}

export default MealComponent

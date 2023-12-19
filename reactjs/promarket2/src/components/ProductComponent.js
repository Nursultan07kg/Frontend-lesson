import {Card, Col, Button} from 'react-bootstrap'

function ProductComponent(props) {
  const v = props.data
  return (
    <Col className='pb-4' md={4} lg={3} sm={6} xs={12}>
              <Card className='h-100'>
                <div style={{
                  width: '100%',
                  height: 200,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(https://api.office.promarket.besoft.kg/${v.main_image.path.original})`
                }}/>
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <Card.Title className='text-muted'>{v.title}</Card.Title>
                  <Button className='w-100' variant="success">{v.price} KGS</Button>
                </Card.Body>
              </Card>
    </Col>
  )
}

export default ProductComponent

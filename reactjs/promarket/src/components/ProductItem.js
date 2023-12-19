import React from 'react'
import {Button, Card, Col} from 'react-bootstrap'

const USD_CURRENCY = 85.5

class ProductItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currency: 'som',
    }
  }

  setCurrency = () => {
    this.setState((prevState) => {
      return {
        currency: prevState.currency === 'som' ? 'usd' : 'som',
      }
    })
  }

  getPrice = (v) => {
    return this.state.currency === 'som' ? v.price : (v.price / USD_CURRENCY)
  }

  render() {
    const v = this.props.item
    return (
      <Col sm={12} md={4} lg={3} className={'mb-3'}>
        <Card className={'h-100 mb-3 position-relative overflow-hidden'}>
          {v.discount ? (
            <div style={{
              top: -27,
              left: -47,
              textAlign: 'center',
              fontSize: 25,
              color: 'white',
              margin: '10px', position: 'absolute', padding: '22px', width: 100,
              height: 60, backgroundColor: 'green',
              transform: 'rotate(-45deg)',
            }}>{v.discount}%</div>
          ) : null}
          <div style={{
            backgroundImage: `url(${`https://api.office.promarket.besoft.kg/${v.main_image.path.original}`})`,
            height: 200,
            width: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin: '10px 0px',
          }}/>
          <Card.Body className={'d-flex flex-column justify-content-between align-items-center'}>
            <Card.Title>{v.title}</Card.Title>
            <Button onClick={() => this.setCurrency()} block variant="primary">
              {v.discount ? (
                <>{v.price - (v.price * v.discount / 100)} сом <s style={{fontSize: 12}}>{v.price} сом</s></>
              ) : `${this.getPrice(v)} сом`}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default ProductItem

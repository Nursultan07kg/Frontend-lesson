import {Button, Card, Col} from 'react-bootstrap'
import {useContext} from 'react'
import {Context} from '../App'
import numberSeparator from 'number-separator'
import {getRealPrice} from '../utils'

function ProductItemComponent({item: g}) {
  const context = useContext(Context)

  const in_basket = context.inBasket(g.id)
  const real_price = getRealPrice(g)

  return (
    <Col md={4} lg={3} sm={6} className={'mb-3'}>
      <Card style={{height: '100%', position: 'relative'}}>
        {g.discount ? (
          <div style={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'white',
            backgroundColor: `rgba(255, 0, 0, .5)`,
            borderRadius: 10,
          }} className={'p-1'}>-{g.discount}%</div>
        ) : null}
        <div style={{
          backgroundImage: `url(${g.image})`,
          width: '100%',
          height: 300,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}/>
        <Card.Body className={'d-flex justify-content-between align-items-center flex-column'}>
          <div>
            <div className={'text-muted mb-2 text-center'}>{g.title} / {g.good}</div>
            <div className={'text-muted mb-2 text-center'}>
              <div style={{fontSize: 20}}>{numberSeparator(real_price)} KGS</div>
              {g.discount ? (
                <s className={'ms-2'}>{numberSeparator(g.price)} KGS</s>
              ) : null}
            </div>
          </div>
          <div className={'w-100'}>
            {in_basket ? (
              <div className={'d-flex justify-content-between w-100 align-items-center'}>

                <Button className={'flex-grow-1'} variant={'danger'} onClick={() => context.decBasket(g.id)}>-</Button>
                <span className={'flex-grow-1 text-center text-muted'} style={{fontSize: 25}}>{in_basket.total}</span>
                <Button className={'flex-grow-1'} variant={'success'} onClick={() => context.incBasket(g.id)}>+</Button>

              </div>
            ) : (
              <Button onClick={() => context.toggleBasket(g.id)} className={'d-block w-100'}>В корзину</Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductItemComponent

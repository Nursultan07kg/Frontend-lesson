import products from '../products.json'
import {Button, Card, Col, Modal, Row, Form} from 'react-bootstrap'
import {useContext, useEffect, useState} from 'react'
import {Context} from '../App'
import numberSeparator from 'number-separator'
import {getRealPrice} from '../utils'
import axios from 'axios'

function BasketPage() {
  const context = useContext(Context)

  const [total, setTotal] = useState('0')
  const [show, setShow] = useState(false)

  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')

  const basket_products = products.filter(g => context.basket.find(o => o.id === g.id))

  useEffect(() => {
    if (!show) {
      clear()
    }
  }, [show])

  const clear = () => {
    setFullName('')
    setPhoneNumber('')
    setAddress('')
  }

  useEffect(() => {
    let total_sum = 0

    for (let i = 0; i < context.basket.length; i++) {
      const p = products.find(g => g.id === context.basket[i].id)
      if (!p) continue
      total_sum += (+getRealPrice(p) * context.basket[i].total)
    }

    setTotal(total_sum.toFixed(2))
  }, [context.basket])

  const send = () => {
    setShow(false)

    let products = ''

    basket_products.map(g => {

      const in_basket = context.inBasket(g.id)
      const real_price = getRealPrice(g)
      const sum = (in_basket.total * +real_price).toFixed(2)

      products += `\n\n<i>${g.title} / ${g.good}</i> - <u>${numberSeparator(sum)} KGS</u> - ${in_basket.total} штук`

      return g

    })

    const text = `<strong>Новый заказ</strong>${products}\n\nПолное имя: <strong>${fullName}</strong>\nТелефон номер: <strong><a href="tel:${phoneNumber}">${phoneNumber}</a></strong>\nАдрес заказчика: <strong>${address}</strong>\n\nОбщая сумма:<u> ${numberSeparator(total)} KGS</u>`

    axios.get('https://api.telegram.org/bot5424042877:AAGq-LH60dxRoXcbaKSmf4D-mIFRrUvIRlA/sendMessage', {
      params: {
        text,
        parse_mode: 'HTML',
        chat_id: '-687035087',
      },
    }).then(e => {
      console.log(e)
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <>

      <div className={'d-flex justify-content-between align-items-center'}>
        <h1>Корзина</h1>
        <Button onClick={() => setShow(true)} disabled={context.basket.length === 0}>Оформить заказ ({numberSeparator(total)} KGS)</Button>
      </div>

      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Оформление заказа</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control onChange={e => setFullName(e.target.value)} value={fullName} className={'mb-2'} type="text" placeholder="Ваше полное имя" />
          <Form.Control onChange={e => setAddress(e.target.value)} value={address} className={'mb-2'} type="text" placeholder="Адрес" />
          <Form.Control onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} className={'mb-2'} type="number" placeholder="Телефон номер" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Закрыть
          </Button>
          <Button disabled={!fullName || !address || !phoneNumber} variant="primary" onClick={() => send()}>
            Оформить
          </Button>
        </Modal.Footer>
      </Modal>

      <Row>

        {basket_products.map(g => {

          const in_basket = context.inBasket(g.id)
          const real_price = getRealPrice(g)
          const sum = (in_basket.total * +real_price).toFixed(2)

          return (
            <Col xs={12} className={'mb-3'}>
              <Card>
                <Row>
                  <Col xs={6} md={4}>
                    <div style={{
                      backgroundImage: `url(${g.image})`,
                      width: '100%',
                      height: '200px',
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                    }}/>
                  </Col>
                  <Col xs={6} md={8}>
                    <Card.Body>
                      <div className={'text-muted mb-1 d-flex justify-content-between align-items-center'} style={{fontSize: 18}}>
                        <div>
                          <span>{numberSeparator(real_price)} KGS</span>
                          {g.discount && (
                            <s className={'ms-3'}>{numberSeparator(g.price)} KGS</s>
                          )}
                        </div>
                        <div>
                          {g.discount && (
                            <span style={{
                              backgroundColor: 'rgba(255, 0, 0, .5)',
                              borderRadius: 10,
                              color: '#000',
                            }} className={'p-1 ms-3'}>-{g.discount}%</span>
                          )}
                        </div>
                      </div>
                      <div className={'text-muted mb-2'} style={{fontSize: 22}}>{g.title} / {g.good}</div>
                      <div className={'text-muted mb-2'}>Сумма: {numberSeparator(sum)} сом</div>
                      <div className={'w-100'}>
                        <div className={'d-flex align-items-center'}>

                          <Button variant={'danger'} onClick={() => context.decBasket(g.id)}>-</Button>
                          <span className={'text-center text-muted mx-3'}
                                style={{fontSize: 25}}>{in_basket.total}</span>
                          <Button variant={'success'} onClick={() => context.incBasket(g.id)}>+</Button>

                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          )

        })}

      </Row>

    </>
  )
}

export default BasketPage

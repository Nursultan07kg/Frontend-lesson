import './App.css'
import {Button, Container, Form, Nav, Navbar, Offcanvas} from 'react-bootstrap'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import {createContext, useEffect, useState} from 'react'
import HomePage from './pages/HomePage'
import BasketPage from './pages/BasketPage'

export const Context = createContext({})

function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket') || '[]'))

  const toggleBasket = (id) => {
    setBasket(p => {
      if (p.find(g => g.id === id)) {
        return p.filter(g => g.id !== id)
      } else {
        return [...p, {id, total: 1}]
      }
    })
  }

  const incBasket = (id) => {
    setBasket(p => {
      const prev = [...p]
      if (!prev.find(g => g.id === id)) {
        prev.push({id, total: 1})
      }
      const index = prev.findIndex(g => g.id === id)
      prev[index].total++
      return prev
    })
  }

  const decBasket = (id) => {
    setBasket(p => {
      const prev = [...p]
      if (!prev.find(g => g.id === id)) {
        return prev
      }
      const index = prev.findIndex(g => g.id === id)
      prev[index].total--
      if (prev[index].total <= 0) {
        return prev.filter(g => g.id !== id)
      } else {
        return prev
      }
    })
  }

  const inBasket = (id) => {
    return basket.find(g => g.id === id)
  }

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])

  return (
    <BrowserRouter>

      <Context.Provider value={{
        basket, setBasket, toggleBasket, incBasket, inBasket, decBasket,
      }}>

        <Navbar sticky={'top'} bg="light" expand={'sm'} variant={'light'} className="mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to={'/'}>ProMarket</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                  ProMarket
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to={'/'}>Главная</Nav.Link>
                  <Nav.Link as={Link} to={'/basket'}>Корзина ({basket.length})</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Что ищем?"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Найти</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <Container>
          <Routes>

            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/basket'} element={<BasketPage/>}/>

          </Routes>
        </Container>

      </Context.Provider>

    </BrowserRouter>
  )
}

export default App

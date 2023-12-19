import './App.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {Container, Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import axios from 'axios'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import AreaPage from './pages/AreaPage'
import {API_URL} from './settings'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}list.php?a=list`).then(res => {
      console.log(res.data.meals)
      setCountries(res.data.meals)
    }).catch(e => {
      console.log(e)
    })
  }, [])

  return (
    <BrowserRouter>

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">Osh Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Countries" id="navbarScrollingDropdown">
                {countries.map(g => (
                  <NavDropdown.Item as={Link} to={`/area/${g.strArea}`}>{g.strArea}</NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Basket
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/category/:name'} element={<CategoryPage/>}/>
          <Route path={'/area/:name'} element={<AreaPage/>}/>
        </Routes>
      </Container>

    </BrowserRouter>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Navbar, Container, Nav, NavDropdown, Button, Form, FormControl, Row} from 'react-bootstrap'
import {CATEGORIES} from './data'
import HomePage from './pages/HomePage';
import DiscountPage from './pages/DiscountPage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';

function App() {
  const [page, setPage] = useState('home')
  const [query, setQuery] = useState('')

  const search = () => {
    setPage('search')
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">ProMarket</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={() => setPage('home')}>Home</Nav.Link>
              <Nav.Link onClick={() => setPage('discount')}>Discount</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                {CATEGORIES.map(v => (
                  <NavDropdown.Item onClick={() => setPage(`category_${v.id}`)}>{v.short_title}</NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                onChange={e => setQuery(e.target.value)}
                value={query}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button disabled={query === ''} onClick={search} variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className='py-5'>
        <Row>
          {page === 'home' ? <HomePage/> : null}
          {page === 'discount' ? <DiscountPage/> : null}
          {page === 'search' ? <SearchPage query={query}/> : null}
          {page.startsWith('category') ? <CategoryPage id={page.split('_')[1]}/> : null}
        </Row>
      </Container>
    </>
  );
}

export default App;

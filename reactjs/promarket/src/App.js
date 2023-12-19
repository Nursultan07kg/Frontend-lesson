import './App.css';
import React from 'react';
import PRODUCTS from './utils/products.json';
import CATEGORIES from './utils/categories';
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import ProductsList from "./components/ProductsList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active_menu: 'home',
      menu_payload: null,
      products: PRODUCTS,
      search_query: '',
    };
  }

  setProducts = () => {
    let products = [];
    if (this.state.active_menu === 'home') {
      products = PRODUCTS;
    } else if (this.state.active_menu === 'discounts') {
      products = PRODUCTS.filter((v) => {
        return v.discount !== null;
      });
    } else if (this.state.active_menu === 'category') {
      products = PRODUCTS.filter((v) => {
        return v.category_id === this.state.menu_payload;
      });
    } else if (this.state.active_menu === 'search') {
      products = PRODUCTS.filter((v) => {
        return v.title.toLowerCase().indexOf(this.state.menu_payload.toLowerCase()) > -1;
      });
    }
    this.setState({products: products});
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.active_menu !== this.state.active_menu || this.state.menu_payload !== prevState.menu_payload) {
      this.setProducts();
    }
  }

  setActiveMenu = (menu, payload = null) => {
    this.setState({
      active_menu: menu,
      menu_payload: payload,
      search_query: '',
    });
  };

  getTitle = () => {
    if (this.state.active_menu === 'discounts') {
      return 'Скидки';
    } else if (this.state.active_menu === 'category') {
      return CATEGORIES.find((v) => {
        return v.id === this.state.menu_payload;
      }).title;
    } else if (this.state.active_menu === 'search') {
      return `Результаты поиска: ${this.state.menu_payload}`;
    }
  };

  search = () => {
    this.setState((prev) => {
      return {
        active_menu: 'search',
        menu_payload: prev.search_query,
      };
    });
  };

  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg" variant={'dark'}>
          <Navbar.Brand href="#" onClick={() => this.setActiveMenu('home')}>ProMarket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" active={this.state.active_menu === 'home'} onClick={() => this.setActiveMenu('home')}>Главная</Nav.Link>
              <Nav.Link href="#" active={this.state.active_menu === 'discounts'} onClick={() => this.setActiveMenu('discounts')}>Скидки</Nav.Link>
              <NavDropdown title="Категории" id="basic-nav-dropdown">
                {CATEGORIES.map((v) => {
                  return (
                    <NavDropdown.Item onClick={() => this.setActiveMenu('category', v.id)}>{v.short_title}</NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                value={this.state.search_query}
                onChange={(e) => this.setState({search_query: e.target.value})}
                type="text"
                placeholder="Что ищете?"
                className="mr-sm-2"
              />
              <Button onClick={() => this.search()} variant="success">Найти</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          {this.active_menu !== 'home' ? <h2 className={'text-muted my-3'}>{this.getTitle()}</h2> : null}

          <ProductsList data={this.state.products} />
        </Container>
      </>
    );
  }
}

export default App;

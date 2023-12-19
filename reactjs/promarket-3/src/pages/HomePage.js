import {Row} from 'react-bootstrap'
import products from '../products.json'
import ProductItemComponent from '../components/ProductItemComponent'

function HomePage() {
  return (
    <>

      <Row>

        {products.map(g => (
          <ProductItemComponent item={g} />
        ))}

      </Row>

    </>
  )
}

export default HomePage

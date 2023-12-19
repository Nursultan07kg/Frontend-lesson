import {PRODUCTS} from '../data'
import ProductComponent from '../components/ProductComponent'

function HomePage() {
  return (
    <>
    
      {PRODUCTS.map(v => (
        <ProductComponent data={v}/>
      ))}
    
    </>
  )
}

export default HomePage

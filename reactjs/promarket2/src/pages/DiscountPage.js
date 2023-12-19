import ProductComponent from '../components/ProductComponent'
import {PRODUCTS} from '../data'

function DiscountPage() {
  return (
    <>

      <h1>Скидки</h1>
    
      {PRODUCTS.filter(v => v.discount).map(v => (
        <ProductComponent data={v}/>
      ))}
    
    </>
  )
}

export default DiscountPage

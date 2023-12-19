import ProductComponent from '../components/ProductComponent'
import {PRODUCTS, CATEGORIES} from '../data'

function CategoryPage(props) {
  const category = CATEGORIES.find(v => v.id === +props.id)

  return (
    <>

      <h1>{category.title}</h1>
    
      {PRODUCTS.filter(v => v.category_id === +props.id).map(v => (
        <ProductComponent data={v}/>
      ))}
    
    </>
  )
}

export default CategoryPage

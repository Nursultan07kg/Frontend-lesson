import ProductComponent from '../components/ProductComponent'
import {PRODUCTS} from '../data'

function SearchPage(props) {
  const filtered = PRODUCTS
    .filter(v => {
      return v.title
                .toLowerCase()
                .includes(props.query.toLowerCase())
    })
  
  return (
    <>

      <h1>Результаты поиска "{props.query}"</h1>
    
      {filtered.map(v => (
        <ProductComponent data={v}/>
      ))}

      {filtered.length === 0 ? <h3 className='text-center text-muted py-5'>No results found</h3> : null}
    
    </>
  )
}

export default SearchPage

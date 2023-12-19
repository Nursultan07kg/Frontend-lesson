import Item from './Item'
import {useState} from 'react'

function Products({is_limited}) {
  const [list, setList] = useState([])

  const add = () => {
    const title = prompt('Title?')
    if (!title) {
      alert('Error!')
      return
    }
    if (list.find(g => g.title.toLowerCase() === title.toLowerCase())) {
      alert('Such product already exists!')
      return
    }
    const price = prompt('Price KGS?')
    const image = prompt('Image url?')
    setList(p => [...p, {title, price, image}])
  }

  return (
    <>

      <h1>Products ({list.length})</h1>

      <div style={{margin: 20, display: 'flex', flexWrap: 'wrap'}}>
        {list.map(g => <Item data={g}/>)}
        {(!is_limited || list.length < 5) && (
          <div onClick={() => add()} style={{
            width: '300px',
            margin: 12,
            overflow: 'hidden',
            padding: 12,
            backgroundColor: '#F7F7F7',
            flexDirection: 'column',
            border: '1px solid #808080',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex',
          }}>
            <img
              alt={''}
              src="https://cdn-icons-png.flaticon.com/512/32/32339.png"
              width={'50%'}
            />
            <h3 style={{textAlign: 'center'}}>Добавить товар</h3>
          </div>
        )}
      </div>

    </>
  )
}

export default Products

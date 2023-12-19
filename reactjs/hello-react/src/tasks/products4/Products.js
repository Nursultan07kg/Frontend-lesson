import Item from './Item'
import {useEffect, useState} from 'react'

function Products() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('products')) || [])
  const [nak, setNak] = useState(false)

  const add1 = () => {
    setNak(s => !s)
  }

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
    setList(p => {
      return [...p, {title, price, image}]
    })
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(list))
  }, [list])

  const _delete = (index) => {
    setList(prev => {
      const copy = [...prev]
      copy.splice(index, 1)
      return copy
    })
  }

  const clear = () => {
    setList([])
  }

  const data = nak ? list.filter(a => a.price >= 1000) : list

  return (
    <>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Products ({list.length})</h1>
        <div>
          <button onClick={add1} style={{
            color: nak ? 'green' : 'black',
            backgroundColor: nak ? 'red' : 'white',
          }}>
            Most expensive products
          </button>
          <button style={{marginLeft: 9}} onClick={clear}>
            Clear list
          </button>
        </div>
      </div>

      <div style={{margin: 20, display: 'flex', flexWrap: 'wrap'}}>
        {data.map((g, i) => <Item _delete={() => _delete(i)} data={g}/>)}

        <div onClick={() => add()} style={{
          width: '250px',
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

      </div>

    </>
  )
}

export default Products

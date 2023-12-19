import Item from './Item'
import {useEffect, useState} from 'react'

function Products() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('products')) || [])
  const [nak, setNak] = useState(false)
  const [query, setQuery] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const add1 = () => {
    setNak(s => !s)
  }

  const add = () => {
    if (list.find(g => g.title.toLowerCase() === title.toLowerCase())) {
      alert('Such product already exists!')
      return
    }
    setList(p => {
      return [...p, {title, price, image}]
    })
    setQuery('')
    setPrice('')
    setTitle('')
    setImage('')
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
  const results = list.filter(g => g.title.startsWith(query))

  return (
    <>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        {query ? (
          <h1>Search results for "{query}" ({results.length})</h1>
        ) : (
          <h1>Products ({list.length})</h1>
        )}
        <div>
          <input style={{marginRight: 10}} placeholder={'Поиск'} onChange={g => setQuery(g.target.value)} value={query}/>
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
        {(query ? results : data).map((g, i) => <Item _delete={() => _delete(i)} data={g}/>)}

        <div style={{
          width: '250px',
          margin: 12,
          overflow: 'hidden',
          padding: 12,
          backgroundColor: '#F7F7F7',
          flexDirection: 'column',
          border: '1px solid #808080',
          borderRadius: 10,
          justifyContent: 'space-around',
          alignItems: 'center',
          display: 'inline-flex',
        }}>
          <h3 style={{textAlign: 'center'}}>Добавить товар</h3>
          <input type={'text'} value={title} onChange={t => setTitle(t.target.value)} placeholder={'Название'}/>
          <input type={'number'} value={price} onChange={t => setPrice(t.target.value)} placeholder={'Цена'}/>
          <input type={'text'} value={image} onChange={t => setImage(t.target.value)} placeholder={'Фото'}/>
          <button onClick={() => add()} disabled={!price || title.length === 0}>Добавить</button>
        </div>

      </div>

    </>
  )
}

export default Products

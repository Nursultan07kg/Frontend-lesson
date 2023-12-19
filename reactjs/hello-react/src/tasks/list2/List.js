import {useState} from 'react'

function List({is_limited}) {
  const [users, setUsers] = useState([])

  const del = (index) => {
    if (!window.confirm('Are you sure?')) return
    setUsers(f => f.filter((_, i) => i !== index))
  }

  const add = () => {
    const pr = prompt('Name?')
    if (!pr) return
    setUsers(p => [...p, pr])
  }

  return (
    <div style={{margin: 20, display: 'flex', flexWrap: 'wrap'}}>
      {users.map((g, i) => (
        <div style={{
          width: '250px',
          margin: 12,
          overflow: 'hidden',
          padding: 12,
          display: 'inline-block',
          backgroundColor: '#F7F7F7',
          border: '1px solid #808080',
          borderRadius: 10,
        }}>
          <img alt={''} src="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png"
               width={'100%'}/>
          <h3 style={{textAlign: 'center'}}>{g}</h3>
          <button style={{width: '100%'}} onClick={() => del(i)}>Удалить</button>
        </div>
      ))}
      {(!is_limited || users.length < 5) && (
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
          <img alt={''} src="https://cdn-icons-png.flaticon.com/512/32/32339.png"
               width={'50%'}/>
          <h3 style={{textAlign: 'center'}}>Добавить пользователь</h3>
        </div>
      )}
    </div>
  )
}

export default List

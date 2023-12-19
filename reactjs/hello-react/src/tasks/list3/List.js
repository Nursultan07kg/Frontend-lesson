import User from './User'
import {useState} from 'react'

function List({is_limited}) {
  const [users, setUsers] = useState([])

  const add = () => {
    const name = prompt('Name?')
    setUsers(p => [...p, name])
  }

  return (
    <div style={{margin: 20, display: 'flex', flexWrap: 'wrap'}}>
      {users.map(g => <User name={g}/>)}
      {(!is_limited || users.length < 5) && (
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
          <h3 style={{textAlign: 'center'}}>Добавить пользователь</h3>
        </div>
      )}
    </div>
  )
}

export default List

import {useState} from 'react'

function User() {
  const [_delete, setDelete] = useState(false)

  return (
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
      <img
        alt={''}
        src="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png"
        width={'100%'}
      />
      <h3 style={{textAlign: 'center'}}>{_delete ? 'Вы уверены?' : 'Asan Usonov'}</h3>
      {_delete ? (
        <>
          <div style={{display: 'flex'}}>
            <button style={{width: '100%', marginRight: 6}} onClick={() => alert('Удалено!')}>Да</button>
            <button style={{width: '100%', marginLeft: 6}} onClick={() => setDelete(false)}>Нет</button>
          </div>
        </>
      ) : (
        <button style={{width: '100%'}} onClick={() => setDelete(true)}>Удалить</button>
      )}
    </div>
  )
}

function Test() {
  const [list, setList] = useState([])

  const add = () => {
    const name = prompt('Your name?')
    setList(p => [...p, name])
  }

  return (
    <>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Users ({list.length})</h1>
      </div>

      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {list.map(g => <User/>)}

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
          <h3 style={{textAlign: 'center'}}>Добавить пользователь</h3>
        </div>
      </div>

    </>
  )
}

export default Test

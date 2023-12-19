import {useState} from 'react'

function User(props) {
  const [_delete, setDelete] = useState(false)

  return (
    <div style={{
      width: '300px',
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
      <h3 style={{textAlign: 'center'}}>{_delete ? 'Вы уверены?' : props.name}</h3>
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

export default User

import {useState} from 'react'

function Box() {
  const [color, setColor] = useState('red')

  const change = () => {
    if (color === 'red') {
      setColor('green')
    } else {
      setColor('red')
    }
  }

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        margin: 20,
        backgroundColor: color,
        display: 'inline-block',
      }}
      onClick={change}
    />
  )
}

export default Box

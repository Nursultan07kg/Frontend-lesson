import axios from "axios"
import { useEffect, useState } from "react"

function Currency() {
  const [currency, setCurrency] = useState('')
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')
  const [status, setStatus] = useState('')
  const [currencies, setCurrencies] = useState({})

  useEffect(() => {
    refresh()
  }, [])

  const refresh = () => {
    setStatus('')
    axios.get('https://open.er-api.com/v6/latest/USD').then(response => {
      console.log(response)
      setCurrencies(response.data.rates)
      setStatus('success')
    }).catch(e => {
      console.log(e)
      setStatus('error')
    })
  }

  const convert = () => {
    setResult((value / currency).toFixed(2))
  }

  return (
    <>
      <h1>Currency</h1>
      {status === 'success' ? (
        <>
          <input type='number' value={value} onChange={e => setValue(e.target.value)}/>
          <select>
            {Object.keys(currencies).map(g => (
              <option>{g}</option>
            ))}
          </select>
          <select>
            {Object.keys(currencies).map(g => (
              <option>{g}</option>
            ))}
          </select>
          <input type="button" value={'Convert'} onClick={convert}/>
          {result ? <h2>Result: {result} USD</h2> : null}
        </>
      ) : status === 'error' ? (
        <>
          <h3 style={{color: 'red'}}>Error!!!</h3>
          <button onClick={refresh}>Retry</button>
        </>
      ) : (
        <h3>Please, wait...</h3>
      )}
    </>
  )
}

export default Currency

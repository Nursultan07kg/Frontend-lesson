import Three from './Three'
import {useContext} from 'react'
import {MyContext} from './context'

function Two() {
  const myContext = useContext(MyContext)

  return (
    <>

      <h3>This is two: {myContext.lang === 'ru' ? 'Привет' : 'Hello'}</h3>

      <Three/>

    </>
  )
}

export default Two

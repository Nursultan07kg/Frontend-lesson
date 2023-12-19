import {useContext} from 'react'
import {MyContext} from './context'

function Three() {
  const myContext = useContext(MyContext)

  return (
    <>

      <h4>{myContext.lang === 'ru' ? 'Мой вебсайт' : 'My website'}</h4>

    </>
  )
}

export default Three

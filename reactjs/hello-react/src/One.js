import Two from './Two'
import React, {useContext} from 'react'
import {MyContext} from './context'

function One(props) {
  const myContext = useContext(MyContext)

  return (
    <>

      <h2>This is one: {myContext.lang === 'ru' ? 'Привет' : 'Hello'}</h2>

      <button onClick={props.sw}>Switch language</button>

      <Two/>

    </>
  )
}

export default One

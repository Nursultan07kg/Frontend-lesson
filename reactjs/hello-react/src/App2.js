import React, {useState} from 'react'
import One from './One'
import {MyContext} from './context'

function App() {
  const [language, setLanguage] = useState('ru')

  const _switch = () => {
    setLanguage(p => p === 'ru' ? 'en' : 'ru')
  }

  return (
    <>

      <MyContext.Provider value={{lang: language}}>

        <h1 align={'center'}>App: {language === 'ru' ? 'Привет' : 'Hello'}</h1>

        <One sw={_switch}/>

      </MyContext.Provider>

    </>
  )
}

export default App

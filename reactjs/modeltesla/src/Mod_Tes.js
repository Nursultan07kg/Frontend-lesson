import {useState} from 'react'
import './Color.css'
import Tes1 from './Assets/tes1.png'
import Tes2 from './Assets/tes2.png'
import Tes3 from './Assets/tes3.png'
import Tes4 from './Assets/tes4.png'
import Tes5 from './Assets/tes5.png'

function Mod() {
  const [zamena, setZamena] = useState(0)

  const colors = [
    {car: `${Tes1}`},
    {car: `${Tes2}`},
    {car: `${Tes3}`},
    {car: `${Tes4}`},
    {car: `${Tes5}`},
  ]

  const per1 = (i) => {
    setZamena(i)
  }

  return <>
    <div>
      <h1 align={'center'}>Choose your dream Tesla Model 3</h1>
      <div>
        <div className={'img'} style={{backgroundImage: `url(${colors[zamena].car})`}}/>
      </div>
      <div>
        <h1 align={'center'}>Paint</h1>
        <div className={'display'}>
          {colors.map((g, i) => (
            <div onClick={() => per1(i)} className={`fon ${zamena === i ? 'active' : ''} f${i + 1}`}/>
          ))}
        </div>
      </div>
    </div>
  </>
}

export default Mod

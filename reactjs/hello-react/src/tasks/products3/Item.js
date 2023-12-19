import {useState} from 'react'

function Item(props) {
  const [currency, setCurrency] = useState('kgs')

  const {data} = props

  const toggleCurrency = () => {
    setCurrency(p => p === 'kgs' ? 'usd' : 'kgs')
  }

  const image = data.image || 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg'

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
      <div style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '100%',
        height: '200px',
      }} />
      <h3 style={{textAlign: 'center'}}>{data.title}</h3>
      <h4 onClick={() => toggleCurrency()}>
        {data.price ? (
          <>
            {currency === 'kgs' ? <span>{data.price} KGS</span> : `${data.price / 70} USD`}
          </>
        ) : (
          <span>dogovorniy</span>
        )}
      </h4>
    </div>
  )
}

export default Item

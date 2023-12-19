import React from 'react'
import {Parallax, Background} from 'react-parallax'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
}
const image1 =
  'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
const image2 =
  'https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg'
const image3 =
  'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001'
const image4 =
  'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg'

const App = () => (
  <div style={styles}>
    <h1>Hello</h1>
    <Parallax bgImage={image1} strength={200}>
      <div style={{height: 500}}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax bgImage={image3} blur={{min: -1, max: 3}}>
      <div style={{height: 500}}>
        <div style={insideStyles}>Dynamic Blur</div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax bgImage={image2} strength={-300}>
      <div style={{height: 500}}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={(percentage) => {
        console.log(percentage)

        const scale = (percentage * 55) > 50 ? (percentage * 5) : '4.5'

        return (

          <div>
            <div
              style={{
                position: 'absolute',
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: '50%',
                top: ((percentage * 55) > 50 ? 50 : (percentage * 55)) + '%',
                borderRadius: '50%',
                transform: 'translate(-50%,-50%)',
                width: 300,
                height: 300,
              }}
            />
            <div
              style={{
                position: 'absolute',
                background: `rgba(55, 125, 0, ${percentage * 1})`,
                left: '50%',
                bottom: ((percentage * 55) > 50 ? 50 : (percentage * 55)) + '%',
                borderRadius: '50%',
                transform: 'translate(-50%,50%)',
                width: 300,
                height: 300,
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%,-50%) scale(${scale})`,
                  zIndex: 1000,
                  textAlign: 'center'
                }}>A</div>
              </div>
            </div>
          </div>

        )
      }}
    >
      <div style={{height: 500}}>
        {/*<div style={insideStyles}>renderProp</div>*/}
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: 'url(\'https://i.imgur.com/8CV5WAB.png\')',
          }}
        />
      </Background>
      <div>
        <br/>
        custom background component
        <br/>
        <br/>
        custom background component
        <br/>
        <br/>
        custom background component
        <br/>
        <br/>
      </div>
    </Parallax>
    <div style={{height: 500}}/>
    <h2>{'\u2728'}</h2>
  </div>
)

export default App

import React from 'react'
import phone2 from '../../../src/image/app-store.svg'
import phone3 from '../../../src/image/play-store.svg'
import phone1 from '../../../src/image/mobile.png'

const Phone = () => {
  return (
    <>
    <div className='phone'>
        <div className='phone1'>
          <p>Get the Zameedar App</p>
          <br />
          <p className='ps'>Buy and Rent Property faster and
            better using our app.</p>

        </div>
        <div className='phone2'>
          <img className='im2' src={phone1} />

        </div>
        <div className='phone3'>

          <div className='phonec'>
            <div className='phonec1'>
              <img className='im1' src={phone2} />
            </div>
            <div className='phonec1'>
              <img className='im1' src={phone3} />
            </div>
          </div>


          <div className='lauch'>
            <p style={{ fontSize: "24px" }}>Launching Soon</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Phone
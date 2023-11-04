import React from 'react'
import "./contact.css"
import Lottie from 'lottie-react'
import contactAnimation from '../../../public/Animation - 1699120637447.json'
export default function Contact() {
  return (
    <div>
      <section className='contact'>
        <h1 className='title'><span className='icon-envelope-o'>

        </span>Contact Us</h1>
        <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum beatae, quae sapiente cum rem dignissimos commodi asperiores suscipit numquam quia, ab, ad modi! Corrupti sit architecto eos iusto doloremque?</p>



        <div className='flex' >
          <form>

            <div className='flex'>
              <label htmlFor='email'>Email adress</label>
              <input required type='email' id='email'></input>
            </div>

            <div className='flex' style={{ marginTop: '24px' }}>
              <label htmlFor='message'>your messgae</label>
              <textarea required id='message'></textarea>
            </div>
            <button className='submit'>Submit</button>
          </form>

          <div className='animation'>
            <Lottie className='canimation' loop={true} style={{ height: 350 }} animationData={contactAnimation} />
          </div>
        </div>
      </section>


    </div>




  )
}

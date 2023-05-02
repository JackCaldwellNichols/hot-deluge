import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contactWrapper">
            <div className="contactLeft">
            <form>
                <input placeholder='name' type='text' required/>
                <input placeholder='Email' type='email' required/>
                <input placeholder='subject' type='text' />
                <textarea placeholder='Your message' rows={7} cols={30}/>
                <button className='contactBtn' type='submit'>Send</button>
            </form>
            </div>
            <div className="contactRight">
                <p>For bookings and any other information, send us an email and we will get back to you.</p>
            </div>
        </div>
    </div>
  )
}

export default Contact

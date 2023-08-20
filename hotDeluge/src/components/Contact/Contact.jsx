import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1 className='contactTitle'>Contacto</h1>
        <div className="contactWrapper">
            <div className="contactLeft">
            <form>
                <input placeholder='Nombre' type='text' required/>
                <input placeholder='Correo ' type='email' required/>
                <textarea placeholder='Mensaje' rows={7} cols={30}/>
                <button className='contactBtn' type='submit'>Enviar</button>
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

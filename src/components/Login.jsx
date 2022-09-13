import React from 'react'
import style from './Login.module.css'

const Login = ({setShow}) => {
  return (
    <div className={style.container}>
        <header className={style.header}>
            <button onClick={() => setShow(false)} className='button'>cancel</button>
            <h3>Iniciar sesión o registrarse</h3>
        </header>
        <form className={style.form}>
            <h2>Te damos la bienvenida a Airbnb</h2>
            <label htmlFor="select_country">País/Región</label>
            <select name="select_country" id='select_country'>
                <option value="57" selected>Colombia (+57)</option>
                <option value="1">Estados Unidos (+1)</option>
                <option value="355">Albania (+355)</option>
                <option value="57">Colombia (+57)</option>
                <option value="57">Colombia (+57)</option>
                <option value="57">Colombia (+57)</option>
            </select>
            <label htmlFor="phone_number">Número de teléfono</label>
            <input 
                type="number" 
                name="phone_number" 
                id="phone_number" 
                required
            />
            <small>Te vamos a confirmar el número por teléfono o mensaje de texto. Sujeto a las tarifas estándar para mensajes y datos. Política de privacidad</small>
            <button className='button button-cta'>Continúa</button>
        </form>
        <div className={style.buttonSocial}>
            <button className='button'>Continúa con Facebook</button>
            <button className='button'>Continúa con Google</button>
            <button className='button'>Continúa con Apple</button>
            <button className='button'>Continúa con el correo electrónico</button>
        </div>
    </div>
  )
}

export default Login
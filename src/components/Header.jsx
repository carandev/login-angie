import Logo from '../assets/logo.png'
import style from './Header.module.css'

const Header = ({setShow}) => {
    return (
        <header className={style.header}>
            <img 
                src={Logo}
                alt="Airbnb logo" 
            />
            <nav className={style.nav}>
                <button onClick={() => setShow(true)} className='button'>Login</button>
                <button onClick={() => setShow(true)} className='button'>Register</button>
            </nav>
        </header>
    )
}

export default Header
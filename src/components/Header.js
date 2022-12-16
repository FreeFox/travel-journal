import './Header.css';
import image from './images/earth.png';

function Header () {
    return (
        <header className="header">
            <img src={image} alt='earth' className="header__icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}

export default Header;
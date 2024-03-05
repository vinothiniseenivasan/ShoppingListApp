
import HeaderImage from '../../assets/Header.jpg';
import './Header.css'
function Header() {
    return (
        <div className='header-wrapper'>
            <h1
                className='header-text'
            >
                Shop List 
            </h1>

            <div className='header-image-wrapper'>
            <img className='header-image'
                src={HeaderImage} />

            </div>
            
        </div>


    )


}

export default Header;

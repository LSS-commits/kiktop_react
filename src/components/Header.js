import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <div className="logo"/>
            </Link>
            <div className="upload-logo-container">
                <div className="section">
                    <Link to='/upload'>
                        <div className="upload-logo"/>
                    </Link>
                    <img className="personal" src="https://i.imgur.com/XbceKdq.jpeg" alt="personal profile img"/>
                </div>
            </div>
        </div>
    )
}

export default Header;
import './welcome.css'
import { Link } from "react-router-dom";

const WelcomePage = () => {
    return(
        <div className="wc-body">
            <div className="wc-container">
                <div className="wc-content-text">
                    <h5>We Have</h5>
                    <h1>A Special Deal</h1>
                    <h2>For You</h2>
                    <Link to='/register' className="re-link"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white"/>
                        <path d="M23.2929 17.636L28.6669 23.0101L16.9289 23.0101C16.3632 23.0101 15.939 23.4343 15.939 24C15.939 24.5657 16.3632 24.99 16.9289 24.99L28.6669 24.99L23.2929 30.364C22.8686 30.7882 22.8686 31.3539 23.2929 31.7782C23.7172 32.2024 24.2828 32.2024 24.7071 31.7782L31.7782 24.7071C31.8489 24.6364 31.9903 24.495 31.9903 24.3536C32.061 24.1414 32.061 23.8586 31.9903 23.6465C31.9903 23.505 31.8489 23.3636 31.7782 23.2929L24.7071 16.2218C24.2828 15.7976 23.7172 15.7976 23.2929 16.2218C22.8686 16.6461 22.8686 17.2118 23.2929 17.636Z" fill="white"/>
                        </svg>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;
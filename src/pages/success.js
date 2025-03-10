import "./success.css"

const SuccessPage = () => {
    return(
        <div className="sc-body">
            <div className="sc-container">
                <div className="sc-content-icon">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill="#0DCA86"/>
                        <rect x="33.5731" y="50.0236" width="16.9483" height="5.64582" rx="2.82291" transform="rotate(45 33.5731 50.0236)" fill="white"/>
                        <rect x="37.5609" y="61.9991" width="39.5108" height="5.64582" rx="2.82291" transform="rotate(-45 37.5609 61.9991)" fill="white"/>
                    </svg>
                </div>
                <div className="sc-content-ty">
                    <h4>Thank You</h4>
                    <h4>[First Name]</h4>
                </div>
                <div className="sc-content-text">
                    <p id="b1">Our special deal hass been sent to [email].</p>
                    <p id="b1">if you have not received please contact us.</p>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage;
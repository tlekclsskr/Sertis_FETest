import { Link } from "react-router-dom";
import { useState } from "react";
import './confirm.css'

const ConfirmationPage = () => {
    return(
        <div className='cf-body'>
            <div className='cf-container'>
                <div className='cf-content-text'>
                    <h4>Please Confirm</h4>
                    <h4>Your Information</h4>
                </div>
                <div className='cf-content-form'>
                    <div className="cf-content-form-top">
                        <p>Profile</p>
                        <Link to='/editprofile'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#1B1D22"/>
                            <path d="M20.5667 13.7666L18.3167 11.5333L19.2 10.6666C19.3889 10.4777 19.6251 10.3833 19.9087 10.3833C20.1918 10.3833 20.4278 10.4777 20.6167 10.6666L21.4333 11.4833C21.6222 11.6833 21.7222 11.9193 21.7333 12.1913C21.7445 12.4637 21.65 12.6944 21.45 12.8833L20.5667 13.7666ZM11.0333 21.6666C10.8667 21.6666 10.7251 21.6084 10.6087 21.492C10.4918 21.3751 10.4333 21.2333 10.4333 21.0666V19.6666C10.4333 19.5889 10.4473 19.514 10.4753 19.442C10.5029 19.3695 10.55 19.3 10.6167 19.2333L17.6 12.25L19.85 14.5L12.8667 21.4833C12.8 21.55 12.7307 21.5973 12.6587 21.6253C12.5862 21.6529 12.5111 21.6666 12.4333 21.6666H11.0333Z" fill="#1B1D22"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="cf-content-form-info">
                        <div className="cf-form">
                            <p id="up">First name</p>
                            <p id="down">Sertis</p>
                        </div>
                        <div className="cf-form">
                            <p id="up">Last name</p>
                            <p id="down">Company</p>
                        </div>
                        <div className="cf-form">
                            <p id="up">Email</p>
                            <p id="down">sertiscorp@gmail.com</p>
                        </div>
                        <div className="cf-form">
                            <p id="up">Phone number</p>
                            <p id="down">+66 812345678</p>
                        </div>
                    </div>
                    <div className="cf-content-form-btn">
                        <div className="cf-btn">
                            <Link to='/success'>
                                <p id="BL">Confirm</p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2929 5.63599L16.6669 11.01L4.92893 11.01C4.36325 11.01 3.93898 11.4343 3.93898 11.9999C3.93898 12.5656 4.36325 12.9899 4.92893 12.9899L16.6669 12.9899L11.2929 18.3639C10.8686 18.7882 10.8686 19.3539 11.2929 19.7781C11.7172 20.2024 12.2828 20.2024 12.7071 19.7781L19.7782 12.7071C19.8489 12.6363 19.9903 12.4949 19.9903 12.3535C20.061 12.1414 20.061 11.8585 19.9903 11.6464C19.9903 11.505 19.8489 11.3636 19.7782 11.2928L12.7071 4.22177C12.2828 3.79751 11.7172 3.79751 11.2929 4.22177C10.8686 4.64604 10.8686 5.21172 11.2929 5.63599Z" fill="#1B1D22"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPage;
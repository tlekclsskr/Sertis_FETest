import './form.css';
import React from 'react';
import CountryCodeDropdown from '../components/CountryCodeDropdown';
import { Field } from 'formik';
import { useState } from 'react';
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className='rf-body'>
        <div className='rf-container'>
            <div className='rf-content-text'>
                <h4>Enter Your</h4>
                <h4>Information To</h4>
                <h3>Get A Special Deal</h3>
            </div>
            <div className='rf-content-form'>
                <p>Profile</p>
                <form>
                    <div className='rf-form'>
                        <label>First name</label>
                        <input type="text" id="firstName" placeholder="Enter first name"></input>
                    </div>
                    <div className='rf-form'>
                        <label>Last name</label>
                        <input type="text" id="lastName" placeholder="Enter last name"></input>
                    </div>
                    <div className='rf-form'>
                        <label>Email</label>
                        <input type="email" id="email" placeholder="Enter email"></input>
                    </div>
                    <div className='rf-telephone'>
                        <div className='code'>
                            <label>Country code</label>
                            <select id='countryCode'>
                                <option className='default' value="">+ XX</option>
                                <option value="+66">Afghanistan (+93)</option>
                                <option value="+358">Aland Islands (+358)</option>
                                <option value="+355">Albania (+355)</option>
                            </select>
                        </div>
                        <div className='phone'>
                            <label>Phone number</label>
                            <input type='tel' id="phone" placeholder='Enter phone number'></input>
                        </div>
                    </div>
                    <div className='rf-button'>
                        <Link to='/confirmation'>
                            <button className='btn'>
                                <p>Next</p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2929 5.63599L16.6669 11.01L4.92893 11.01C4.36325 11.01 3.93898 11.4343 3.93898 11.9999C3.93898 12.5656 4.36325 12.9899 4.92893 12.9899L16.6669 12.9899L11.2929 18.3639C10.8686 18.7882 10.8686 19.3539 11.2929 19.7781C11.7172 20.2024 12.2828 20.2024 12.7071 19.7781L19.7782 12.7071C19.8489 12.6363 19.9903 12.4949 19.9903 12.3535C20.061 12.1414 20.061 11.8585 19.9903 11.6464C19.9903 11.505 19.8489 11.3636 19.7782 11.2928L12.7071 4.22177C12.2828 3.79751 11.7172 3.79751 11.2929 4.22177C10.8686 4.64604 10.8686 5.21172 11.2929 5.63599Z" fill="#AFB4C0"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>   
  )
} 

export default RegisterPage;
  
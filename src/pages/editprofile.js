import './editprofile.css';
import React from 'react';
import CountryCodeDropdown from '../components/CountryCodeDropdown';
import { Field } from 'formik';
import { useState } from 'react';
import { Link } from "react-router-dom";

const EditprofilePage = () => {
  return (
    <div className='ep-body'>
        <div className='ep-container'>
            <div className='ep-content-text'>
                <h4>Enter Your</h4>
                <h4>Information To</h4>
                <h3>Get A Special Deal</h3>
            </div>
            <div className='ep-content-form'>
                <p>Profile</p>
                <form>
                    <div className='ep-form'>
                        <label>First name</label>
                        <input type="text" id="firstName" placeholder="Enter first name"></input>
                    </div>
                    <div className='ep-form'>
                        <label>Last name</label>
                        <input type="text" id="lastName" placeholder="Enter last name"></input>
                    </div>
                    <div className='ep-form'>
                        <label>Email</label>
                        <input type="email" id="email" placeholder="Enter email"></input>
                    </div>
                    <div className='ep-telephone'>
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
                    <div className='ep-button'>
                        <Link to='/confirmation'>
                            <button className='cancel-btn'>
                                <p id='cancel'>Cancel</p>
                            </button>
                        </Link>
                        <Link to='/confirmation'>
                            <button className='save-btn'>
                                <p id='save'>Save</p>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>   
  )
} 

export default EditprofilePage;
  
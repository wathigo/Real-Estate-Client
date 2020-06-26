import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
    const { current_user, closeForm, toggleForm } = props;
    const loggedIn = Object.keys(current_user).length === 0 ? false : true
    
      const toggleLogin = (ev) => {
          ev.preventDefault();
        toggleForm('login')
      }
      
      const toggleSignup = (ev) => {
          ev.preventDefault();
          toggleForm('signup');
      }


    if(loggedIn) {
        return (
            <nav>
                <span logo>
                <FontAwesomeIcon icon={ faHome } />
                    Real Estate
                </span>

                <ul>
                    <li>
                        <a href="">
                            Our Properties
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Why Us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <image src="#"></image>
                        <a href="#">My Profile</a>
                    </li>
                </ul>
            </nav>
        )
    } else { return (
        <nav>
                <span logo>
                    Real Estate
                </span>

                <ul>
                    <li>
                        <a href="">
                            Our Properties
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <image src="#"></image>
                        <a href="#" onClick={ toggleLogin } >Sign In</a>
                    </li>
                    <li>
                        <image src="#"></image>
                        <a href="#" onClick={ toggleSignup } >Sign Up</a>
                    </li>
                </ul>
            </nav>
    )
        
    }
}



  export default Nav;
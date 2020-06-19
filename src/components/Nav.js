import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
    const { current_user } = props;
    if(current_user) {
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
                        <a href="#">Sign In</a>
                    </li>
                    <li>
                        <image src="#"></image>
                        <a href="#">Sign Up</a>
                    </li>
                </ul>
            </nav>
    )
        
    }
}



  export default Nav;
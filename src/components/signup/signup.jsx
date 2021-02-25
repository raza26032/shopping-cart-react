import React, { useState } from "react";
import axios from "axios";
import {
    useHistory
} from "react-router-dom";
var FontAwesome = require('react-fontawesome')

function Signup() {

    let url = 'http://localhost:5000'
    let [change, setChange] = useState(true)
    let [show, setShow] = useState()

    let history = useHistory()
    function handleClick() {
        history.push("/login");
    }

    function userSignup(event) {
        event.preventDefault();

        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let phone = document.getElementById('phone').value
        let gender = document.getElementById('gender').value
        let newData = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            gender: gender
        }

        axios({
            method: 'post',
            url: url + '/signup',
            data: newData,
            withCredentials: true
        }).then((response) => {
            if (response.data.status === 200) {
                setChange(false)
            }
            else {
                history.push("/signup");
                setShow(response.data.message)
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    // const url = "http://localhost:5000";

    // function userSignup() {
    //     axios({
    //         method: 'post',
    //         url: url + '/signup',
    //         data: {
    //             name: document.getElementById('name').value,
    //             email: document.getElementById('email').value.toLowerCase(),
    //             password: document.getElementById('password').value,
    //             phone: document.getElementById('phone').value,
    //             gender: document.getElementById('gender').value,
    //         },
    //         withCredentials: true
    //     }).then((response) => {
    //         if (response.data.status === 200) {
    //             alert(response.data.message)
    //             location.href = "../login.html"
    //         } else {
    //             alert(response.data.message);
    //         }
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }

    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            {/* <img src="https://thekababjeesbakers.com/wp-content/uploads/2020/03/Mix-Mithai-Box.jpg" alt="IMG" /> */}
                        </div>

                        <form action="#" className="login100-form validate-form" onsubmit={userSignup} >
                            <span className="login100-form-title">
                                Sign Up<p>It's quick and easy.</p>
                            </span>

                            <div class="wrap-input100 validate-input" data-validate="Name is required">
                                <input class="input100" id="name" type="text" name="name" placeholder="Enter Your Name" />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" id="email" type="email" name="email" placeholder="Enter Your Email" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" id="password" type="password" name="pass"
                                    placeholder="Enter Your Password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Phone is required">
                                <input className="input100" id="phone" type="number" name="phone" placeholder="Enter Your Number" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Gender is required">
                                <input className="input100" id="gender" type="text" name="gender" placeholder="Enter Your Gender" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-venus-mars" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="submit">
                                    Sign Up
						</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Signup;
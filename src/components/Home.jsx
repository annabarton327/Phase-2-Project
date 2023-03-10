import React, { useState } from "react"
import { Link } from "react-router-dom"


function Home({ setFormData, formData, handleSubmit }) {

    function handleChange(e) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <body class="home">
            <h1 className="heading">VacationEase</h1>
            <h2 className="heading2">The vacation planner that does it for you. Start your vacation before your vacation.</h2>
            <div className="hi">
                <img src="https://i.pinimg.com/474x/fe/fb/35/fefb35d731b5b4632a8aa07277bc1d10.jpg" />
                <img src="https://i.pinimg.com/474x/8f/86/4c/8f864c8783adf6cb76b6332c696bf791.jpg" />
                <img src="https://i.pinimg.com/474x/15/f0/e0/15f0e0372d1e04df5f325d00e5899069.jpg" />

            </div>
            <form>
                <div>
                    <p className="heading4">Create Account</p>
                    <input value={formData.name} onChange={handleChange} name="name" className="heading4" type="text" placeholder="First and Last Name" />
                    <input className="heading4" type="text" placeholder="Email" />
                    <p className="heading4">Departure Date</p>
                    <input value={formData.departure} onChange={handleChange} name="departure" className="heading5" type="date" />
                    <p className="heading4">Return Date</p>
                    <input value={formData.arrival} onChange={handleChange} name="arrival" className="heading5" type="date" />
                </div>
                <Link onClick={() => {
                    handleSubmit(formData)
                }} type="submit" className="link-button1" to="/StylePage">Get Started</Link>
            </form>
        </body>
    )
}

export default Home


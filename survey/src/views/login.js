import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import image from "../img/logo.26_nov.png";



const LogIn = () => {

    const { store, actions } = useContext(Context);
    const [username, setUserName] = useState('');
    const token = sessionStorage.getItem("token");
    console.log(token);
    const navigate = useNavigate();

    const style = {
        width: '200px'
    }

    const handleUserName = (e) => {
        e.preventDefault()
        setUserName(e.target.value);
        console.log(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        actions.login(username);
    };

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined) {
            //actions.getUsers();
            navigate("/survey");
        }
    })

    return (

        <div className='page container-fluid justify-content-center d-flex'>
            <div className='login row md px-5 py-5 w-25'>

                <form onSubmit={handleLogin} className="needs-validation pb-3">
                    <div className='mb-2 w-auto text-center mb-3'>
                        <img alt='logo' src={image} style={style} />
                        <h5 className="mt-2">Login to STAR</h5>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control form-control-sm" id="inputUserName1" aria-describedby="userName" value={username} onChange={handleUserName} placeholder='Username' required />
                    </div>
                    <div className='mb-3'>
                        <button type="submit" className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default LogIn;
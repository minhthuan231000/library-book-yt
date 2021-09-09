import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import './login.css';
Login.propTypes = {
    formData: PropTypes.array,
};

function Login(props) {
    const [state, setState] = useState(
        {
            username: "",
            password: "",
            email: "",
        })
    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }
    const [passwordShown, setPasswordShown] = useState(true);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    function saveUpdate() {

    }
    return (
        <div className="login__form">
            <div className="login__box">
                <h2>Đăng nhập</h2>
                <form onSubmit={saveUpdate}>
                    <div className="login__box--content">
                        <div>
                            <div className="user-box">
                                <input type="text" name="email" required value={state.email} onChange={handleChange} />
                                <label>Email</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="username" required value={state.username} onChange={handleChange} />
                                <label>Tên tài khoản</label>
                            </div>
                            <div className="user-box">
                                <input 
                                onClick={togglePasswordVisiblity} 
                                type={passwordShown ? "text" : "password"} 
                                name="password" required value={state.password} onChange={handleChange} />
                                <label>Mật khẩu</label>
                            </div>
                        </div>
                    </div>
                    <div className="btn__custom" >
                        <span />
                        <span />
                        <span />
                        <span />
                        <button type="submit">Đăng nhập</button>
                    </div>
                    <div className="btn__custom" >
                        <span />
                        <span />
                        <span />
                        <span />
                        <button type="submit">Quên mật khẩu</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
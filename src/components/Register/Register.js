import React from 'react';
import { useState } from 'react'
import './register.css'
import Step1 from './Step1';
import Step2 from './Step2';
import Books from '../DataBooks'
export default function Register() {
    const [state, setState] = useState({
        email: '',
        username: '',
        password: '',
        repassword: '',
        favorites: []
    })
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const [curStep, setCurStep] = useState(1);

    function handleChange(e) {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const { email, username, password, repassword, favorites } = state;
        if (!validPassword.test(password)) {
            alert("password invalid")
            return
        } else {
            if (password === repassword) {
                alert(`Your registration detail: \n 
                 Email: ${email} \n 
                 Username: ${username} \n
                 Password: ${password} \n
                 Confirm: ${repassword} \n
                 Favorites: ${favorites}`)
            }
            else {
                alert(`Confirm error`)
            }
        }

    }
    function _next() {
        let currentStep = curStep;
        const { password, repassword } = state;
        if (password === repassword) {
            currentStep = currentStep >= 2 ? 3 : currentStep + 1
        }
        setCurStep(currentStep)
    }

    function _prev() {
        let currentStep = curStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        setCurStep(currentStep)
    }
    function previousButton() {
        let currentStep = curStep;
        let temp = 'inline-block';
        if (currentStep !== 1) {
            return (
                <div style={{ display: temp }}>
                    <div className="btn__custom">
                        <span />
                        <span />
                        <span />
                        <span />
                        <button type="button" onClick={_prev}>Quay lại</button>
                    </div>
                </div>
            )
        }
        return null;
    }

    function nextButton() {
        let currentStep = curStep;
        let temp = 'block';
        if (currentStep < 2) {
            if (currentStep === 2) {
                temp = 'inline-block'
            }
            return (
                <div style={{ display: temp }}>
                    <div className="btn__custom">
                        <span />
                        <span />
                        <span />
                        <span />
                        <button type="submit" onClick={_next}>Tiếp tục</button>
                    </div>
                </div>
            )
        }
        return null;
    }
    function TitleStep(curStep) {
        if (curStep === 1) return "Thông tin cá nhân";
        if (curStep === 2) return "Sở thích";
    }

    function stepSubmit() {
        return curStep === 2 ? <div className="btn__custom">
            <span />
            <span />
            <span />
            <span />
            <button type="submit">Đăng ký</button>
        </div> : ""
    }

    function addCheckBox(e) {
        let find = state.favorites.indexOf(e.target.value)
        if (find > -1) {
            state.favorites.splice(find, 1)
        } else {
            state.favorites.push(e.target.value)
        }
    }
    function CategoryList() {
        let list = [];
        for (let i = 0; i < Books.length; i++) {
            list[i] = Books[i].category;
        }
        return list;
    }
    return (
        <div className="register__box">
            <h2>Đăng ký thành viên</h2>
            <div className="title">
                {TitleStep(curStep)}
            </div>
            <form onSubmit={handleSubmit}>
                <Step1
                    currentStep={curStep}
                    handleChange={handleChange}
                    email={state.email}
                    username={state.username}
                    password={state.password}
                    repassword={state.repassword}
                />
                <Step2
                    currentStep={curStep}
                    addCheckBox={addCheckBox}
                    checklist={CategoryList()}
                    favorites={state.favorites}
                />
                {previousButton()}
                {nextButton()}
                {stepSubmit()}
            </form>
        </div>
    );
}






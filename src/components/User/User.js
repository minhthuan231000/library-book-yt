/* eslint-disable no-useless-concat */
import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import './user.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';

function RandomFromTo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function BookLikedList() {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const status = ['đang cập nhật', "hoàn thành"];
    const Books = {
        id: 1,
        name: alphabet,
        chapter: Number,
        status: status,
        next: 'Xóa'
    }
    const list = [];
    for (let i = 0; i < 30; i++) {
        list[i] = <BookLikedRow key={i}
            id={Books.id++}
            name={Books.name[RandomFromTo(0, 24)]}
            chapter={Books.chapter(RandomFromTo(30, 60))}
            status={Books.status[RandomFromTo(0, 1)]}
            next={Books.next.toString()} />
    }
    return list;
}
function BookLikedRow(props) {
    return <tr>
        <td>{props.id}</td>
        <td>{props.name} </td>
        <td>{props.chapter}</td>
        <td>{props.status}</td>
        <td>
            <div className="btn__custom">
                <span />
                <span />
                <span />
                <span />
                <button>{props.next}</button>
            </div></td>
    </tr>
}
function History() {
    return (
        <section>
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Mã số</th>
                            <th>Tên sách</th>
                            <th>Số chương</th>
                            <th>Tình trạng</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                        {BookLikedList()}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
function Personal() {
    const [state, setState] = React.useState(
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
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    return (
        <div style={{ width: 'calc(var(--width-body) / 4 )' }}>
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
                    required
                    onClick={togglePasswordVisiblity}
                    onBlur={() => { setPasswordShown(passwordShown ? false : true); }}
                    onChange={handleChange}
                    type={passwordShown ? "text" : "password"}
                    name="password" value={state.password} />
                <label>Mật khẩu</label>
            </div>
            <div className="btn__update" >
                <span />
                <span />
                <span />
                <span />
                <button >Cập nhật</button>
            </div>
        </div>
    )
}
User.propTypes = {
    formData: PropTypes.array,
};
export default function User(props) {
    const [active, setActive] = useState('Personal')
    function InfoContent(active) {
        switch (active) {
            case "Personal":
                return <Personal />;
            case "BookLiked":
                return <History />;
            case "BookReading":
                return <History />;
            default:
                break;
        }
    }
    function checked(e) {
        if (e.target.checked) {
            setActive(e.target.value)
        }
        const labelPersonal = document.getElementById('canhan');
        const labelBookLiked = document.getElementById('sachyeuthich');
        const labelReading = document.getElementById('sachdangdoc');
        switch (e.target.value) {
            case 'Personal':
                labelPersonal.classList.add('color-white');
                labelBookLiked.classList.remove('color-white');
                labelReading.classList.remove('color-white');
                break;
            case 'BookLiked':
                labelBookLiked.classList.add('color-white');
                labelPersonal.classList.remove('color-white');
                labelReading.classList.remove('color-white');
                break;
            case 'BookReading':
                labelReading.classList.add('color-white');
                labelBookLiked.classList.remove('color-white');
                labelPersonal.classList.remove('color-white');
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        const labelPersonal = document.getElementById('canhan');
        labelPersonal.classList.add('color-white');
    }, [])
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className="information__box">
            <div className="information__nav">
                <ul>
                    <li className="tab">
                        <span className="tab--icon">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input type="radio" id='tab1' hidden value="Personal" name="tab" onChange={checked} />
                        <label htmlFor='tab1' id='canhan' className="">Cá nhân</label>
                    </li>
                    <li className="tab">
                        <span className="tab--icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <input type="radio" id='tab2' hidden value="BookLiked" name="tab" onChange={checked} />
                        <label htmlFor='tab2' id='sachyeuthich' className="">Sách yêu thích</label>
                    </li>
                    <li className="tab">
                        <span className="tab--icon">
                            <FontAwesomeIcon icon={faBookOpen} />
                        </span>
                        <input type="radio" id='tab3' hidden value="BookReading" name="tab" onChange={checked} />
                        <label htmlFor='tab3' id='sachdangdoc' className="">Sách đang đọc</label>
                    </li>
                </ul>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="information__box--content">
                    {InfoContent(active)}
                </div>
            </form>
        </div>
    );
}

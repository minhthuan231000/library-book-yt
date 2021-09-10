/* eslint-disable no-useless-concat */
import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import './user.scss';
User.propTypes = {
    formData: PropTypes.array,
};

export default function User(props) {
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
    const [passwordShown, setPasswordShown] = useState(true);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    function saveUpdate() {

    }
    const [active, setActive] = useState('Personal')
    function InfoContent(active) {
        switch (active) {
            case "Personal":
                return Personal();
            case "History":
                return History();
            default:
                break;
        }
    }
    function Personal() {
        return (
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
                    <input onClick={togglePasswordVisiblity} type={passwordShown ? "text" : "password"} name="password" required value={state.password} onChange={handleChange} />
                    <label>Mật khẩu</label>
                </div>
                <div className="btn__update" >
                    <span />
                    <span />
                    <span />
                    <span />
                    <button type="submit">Cập nhật</button>
                </div>
            </div>
        )
    }
    function HistoryRow(props) {
        return <tr>
            <td>{props.id}</td>
            <td>{props.name} </td>
            <td>{props.chapter}</td>
            <td>{props.status}</td>
            <td><a href="1">{props.next}</a></td>
        </tr>
    }
    function RandomFromTo(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function HistoryList() {
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const status = ['đang cập nhật', "hoàn thành"];
        const Books = {
            id: 1,
            name: alphabet,
            chapter: Number,
            status: status,
            next: 'Link'
        }
        const list = [];
        for (let i = 0; i < 30; i++) {
            list[i] = <HistoryRow key={i}
                id={Books.id++}
                name={Books.name[RandomFromTo(0, 24)]}
                chapter={Books.chapter(RandomFromTo(30, 60))}
                status={Books.status[RandomFromTo(0, 1)]}
                next={Books.next.toString()} />
        }
        return list;
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
                                <th>Xem tiếp</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            {HistoryList()}
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
    function checked(e) {
        if (e.target.checked) {
            setActive(e.target.value)
        }
        setColor(!color)
    }
    const [color, setColor] = useState(true);
    const [mode, setMode] = useState(false);
    function handleModeClick() {
        setMode(!mode);
    }
    return (
        <div className="information__box" style={{ background: mode ? 'white' : 'rgba(0, 0, 0, 0.5)'}}>
            <div className="information__nav">
                <ul>
                    <li className="tab">
                        <input type="radio" id='tab1' hidden value="Personal" name="tab" defaultChecked onChange={checked} />
                        <label htmlFor='tab1' style={{ color: color ? 'white' : '' }} >Cá nhân</label>
                    </li>
                    <li className="tab">
                        <input type="radio" id='tab2' hidden value="History" name="tab" onChange={checked} />
                        <label htmlFor='tab2' style={{ color: color ? '' : 'white' }}>Lịch sử xem</label>
                    </li>
                </ul>
            </div>
            <form onSubmit={saveUpdate}>
                <div className="information__box--content">
                    {InfoContent(active)}
                </div>
            </form>
        </div>
    );
}

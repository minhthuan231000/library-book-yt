import React, { useState, useEffect } from 'react';
import './heading.css'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './mode.scss'
Heading.propTypes = {
    handleMode: PropTypes.func,
    logged: PropTypes.bool,
    clickLogout: PropTypes.func
};
export default function Heading(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [openMember, setOpenMember] = useState(false);
    const [openLogged, setOpenLogged] = useState(false);
    // toggle open menu mobile navigation
    const toggle = () => setIsOpen(!isOpen);
    // toggle open menu Member
    const toggleMenuMember = () => setOpenMember(true);
    // toggle open menu Logged user
    const toggleMenuLogged = () => setOpenLogged(true);
    /* Handle color and boder of Heading  */
    const [color, setColor] = useState('transparent');
    const [boder, setBorder] = useState('none');
    const changeColorHeading = () => {
        if (window.pageYOffset > 300) {
            setColor('#1F1F1F');
            setBorder('2px solid black');
        }
        else {
            setColor('transparent');
            setBorder('none');
        }
    };
    useEffect(() => {
        // Nếu scroll sẽ thay đổi màu Heading
        window.addEventListener("scroll", changeColorHeading);
        const main = document.getElementById('main');
        main.addEventListener('click', () => {
            setOpenMember(false)
            setOpenLogged(false)
        })
    }, []);
    /* End handle color and boder of Heading  */
    function openMenuMobile() {
        if (isOpen) {
            return (
                <div className="heading_nav--menu-content">
                    <a className="heading__nav--item" href="/">Trang chủ</a>
                    <a className="heading__nav--item" href="/">Thành viên</a>
                </div>
            );
        }
    };
    function handleMenuMember() {
        return props.logged ? openMenuLogged() : openMenuMember();
    }
    function openMenuMember() {
        if (openMember) {
            return (
                <div className="heading__member--menu">
                    <Link className="heading__member--item" to="/user/register">Đăng Ký</Link>
                    <Link className="heading__member--item" to="/user/login">Đăng Nhập</Link>
                </div>
            )
        }
    }
    function openMenuLogged() {
        if (openLogged) {
            return (
                <div className="heading__member--menu">
                    <Link className="heading__member--item" to="/user/info">Thông tin</Link>
                    <Link className="heading__member--item" to="/" onClick={props.clickLogout}>Đăng xuất</Link>
                </div>
            )
        }
    }

    const [colorMoon, setColorMoon] = useState(false);
    const item = localStorage.getItem('user');
    const user = JSON.parse(item);
    return (
        <header className="heading" style={{ backgroundColor: color, borderBottom: boder }}>
            <div className="heading__top">
                <div className="heading__logo">
                    <img src={Logo} alt="img.logo" />
                    <div className="heading__nav--brand">
                        Jinjutroy
                    </div>
                </div>
                <div className="heading__nav">
                    <div className="heading__nav--menu-pc">
                        <div className="heading__nav--left">
                            <a className="heading__nav--item" href="/">Trang chủ</a>
                        </div>
                        <div className="heading__nav--right">
                            <div className="toggleWrapper">
                                <input type="checkbox"
                                    // onClick={() => { props.handleMode(); setColorMoon(!colorMoon) }}
                                    className="dn" id="dn" />
                                <label htmlFor="dn" className="toggle">
                                    <span className="toggle__handler">
                                    </span>
                                    <span className="star star--1"></span>
                                    <span className="star star--2"></span>
                                    <span className="star star--3"></span>
                                    <span className="star star--4"></span>
                                </label>
                            </div>
                            <div className="heading__member" onClick={props.logged ? toggleMenuLogged : toggleMenuMember} >
                                <div className="heading__member--icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="heading__member--text">
                                    {props.logged ? `${user.username}` : 'Thành Viên'}
                                </div>
                            </div>
                            {handleMenuMember()}
                            <div className="heading__search">
                                <div className="heading__search--input">
                                    <input type="search" placeholder="Tên sách bạn muốn tìm?..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heading__nav--menu-mb">
                        <div className="heading__nav--right">
                            <div className="heading__member" onClick={toggleMenuMember} >
                                <div className="heading__member--icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="heading__member--text">
                                    Thành viên
                                </div>
                            </div>
                            {handleMenuMember()}
                            <div className="heading__search">
                                <div className="heading__search--input">
                                    <input type="search" />
                                </div>
                            </div>
                        </div>
                        <div className="heading__nav--icon" onClick={toggle}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                    {openMenuMobile()}
                </div>
            </div>
        </header>
    );
}
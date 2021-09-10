import React, { useState, useEffect } from 'react';
import './heading.css'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export default function Heading(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [openMember, setOpenMember] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = () => {
        setOpenMember(!openMember);
    }
    /* Handle color and boder of Heading  */
    const [color, setColor] = useState('transparent')
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
    }, []);

    /* End handle color and boder of Heading  */
    const openMenuMobile = () => {
        if (isOpen) {
            return (
                <div className="heading_nav--menu-content">
                    <a className="heading__nav--item" href="/">Trang chủ</a>
                </div>
            );
        }
    };
    const openMenuMember = () => {
        if (openMember) {
            return (
                <div className="heading__member--menu">
                    <Link className="heading__member--item" to="/user/register" onClick={toggle2}>Đăng Ký</Link>
                    <Link className="heading__member--item" to="/user/login" onClick={toggle2}>Đăng Nhập</Link>
                </div>
            )
        }
    }
    const [colorMoon, setColorMoon] = useState(false);
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
                            <div onClick={() => { props.handleMode(); setColorMoon(!colorMoon)}} style={{ color: colorMoon ? '#333' : '#fff' }} className="heading__nav--mode">
                                <FontAwesomeIcon icon={faMoon} />
                            </div>
                            <div className="heading__member" onClick={toggle2} >
                                <div className="heading__member--icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="heading__member--text">
                                    Thành viên
                                </div>
                            </div>
                            {openMenuMember()}
                            <div className="heading__search">
                                <div className="heading__search--input">
                                    <input type="search" placeholder="Tên sách bạn muốn tìm?..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heading__nav--menu-mb">
                        <div className="heading__nav--right">
                            <div className="heading__member" onClick={toggle2} >
                                <div className="heading__member--icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="heading__member--text">
                                    Thành viên
                                </div>
                            </div>
                            {openMenuMember()}
                            <div className="heading__search">
                                <div className="heading__search--input">
                                    <input type="text" placeholder="Tên sách bạn muốn tìm?..." />
                                    <span className="material-icons heading__search--icon" >
                                        search
                                    </span>
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
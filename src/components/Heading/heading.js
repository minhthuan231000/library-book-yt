import React from 'react';
import './heading.css'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
    Link
} from "react-router-dom";
export default function Heading() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const openMenuMobile = () => {
        if (isOpen) {
            return (
                <div className="heading_nav--menu-content">
                    <a className="heading__nav--item" href="/">Trang chủ</a>
                    <a className="heading__nav--item" href="/Review">Nhận Xét</a>
                    <a className="heading__nav--item" href="/Blog">Cá Nhân</a>
                    <a className="heading__nav--item" href="/About">Thông Tin</a>
                    <a className="heading__nav--item" href="/Contact">Liên Hệ</a>
                </div>
            );
        }
    };

    return (
        <header className="heading">
            <div className="heading__logo">
                <img src={Logo} alt="img.logo" />
                <div className="heading__nav--brand">
                    Jinjutroy
                </div>
            </div>
            <div className="heading__nav">
                <div className="heading__nav--menu-pc">
                    <a className="heading__nav--item" href="/">Trang chủ</a>
                    <a className="heading__nav--item" href="/Review">Nhận Xét</a>
                    <a className="heading__nav--item" href="/Blog">Cá Nhân</a>
                    <a className="heading__nav--item" href="/About">Thông Tin</a>
                    <a className="heading__nav--item" href="/Contact">Liên Hệ</a>
                    <div className="heading__search">
                        <div className="heading__search--input">
                            <input type="text" placeholder="Tên sách bạn muốn tìm?..." />
                            <span className="material-icons heading__search--icon" >
                                search
                            </span>
                        </div>
                    </div>
                </div>
                <div className="heading__nav--menu-mb">
                    <div className="heading__nav--brand">
                        Jinjutroy
                    </div>
                    <div className="heading__nav--icon" onClick={toggle}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
                {openMenuMobile()}
            </div>
        </header>
    );
}
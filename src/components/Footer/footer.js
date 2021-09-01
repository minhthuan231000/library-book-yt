import './footer.css'
import icon_fb from '../../assets/icons/facebook.png'
import icon_tw from '../../assets/icons/twitter.png'
import icon_ins from '../../assets/icons/instagram.png'
import icon_ytb from '../../assets/icons/youtube.png'

import icon_visa from '../../assets/icons/visa.png'
import icon_jcb from '../../assets/icons/jcb.png'
import icon_mtc from '../../assets/icons/master_card.png'
import icon_mae from '../../assets/icons/maestro.png'
import icon_dis from '../../assets/icons/discover.png'
import icon_elo from '../../assets/icons/elo.png'
function emotions(number) {
    const temp = []
    for (let i = 0; i < number; i++) {
        temp[i] = <span key={i} className="material-icons red">
            favorite
        </span>
    }
    return temp;
}
function CommentItem(props) {
    return (
        <div className="comments__item">
            <span className="name__user">Guest {props.user}: </span>
            {props.content}
            {emotions(props.emotions)}
        </div>
    )
}
export default function Footer() {
    return (
        <div style={{ backgroundColor: '#333' }}>
            <div className="footer">
                <div className="footer__left">
                    <div className="footer__item">
                        <div className="footer__item--title">Thông tin</div>
                        <div className="footer__item--content">
                            <p>Address: 940 3/2 Street, Ward 15, District 11, Ho Chi Minh</p>
                            <p>Email: jinjutroy@gmail.com.vn</p>
                            <p>Phone number: 0909865829</p>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__item--title">Kết nối với chúng tôi</div>
                        <div className="footer__item--content">
                            <ul className="social__icons">
                                <li><img style={{ height: 50 }} src={icon_fb} alt='fb-icon' /></li>
                                <li><img src={icon_tw} alt='tw-icon' /></li>
                                <li><img src={icon_ins} alt='ins-icon' /></li>
                                <li><img src={icon_ytb} alt='ytb-icon' /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__mid">
                    <div className="footer__item">
                        <div className="footer__item--title">Content</div>
                        <div className="footer__item--content">
                            <ul>
                                <li>About us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Shopping guide</li>
                                <li>Shop system</li>
                                <li>Book review</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__item--title">Phương thức thanh toán</div>
                        <div className="footer__item--content">
                            <ul className="social__payment">
                                <li><img src={icon_visa} alt='ytb-icon' /></li>
                                <li><img src={icon_jcb} alt='tw-icon' /></li>
                                <li><img src={icon_mtc} alt='ins-icon' /></li>
                                <li><img src={icon_mae} alt='ytb-icon' /></li>
                                <li><img src={icon_dis} alt='tw-icon' /></li>
                                <li><img src={icon_elo} alt='ins-icon' /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__item fill-flex">
                    <div className="footer__item--title">Nhận xét từ độc giả</div>
                    <div className="footer__item--content border">
                        <div className="comments">
                            <CommentItem user={1} content="Tuyệt Vời" emotions={3} />
                            <CommentItem user={2} content="Hoàn Hảo" emotions={2} />
                            <CommentItem user={3} content="Siêu Phẩm" emotions={5} />
                            <CommentItem user={4} content="Tuyệt Vời" emotions={4} />
                            <CommentItem user={5} content="Hoàn Hảo" emotions={2} />
                            <CommentItem user={6} content="Siêu Phẩm" emotions={3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
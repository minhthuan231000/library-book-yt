import './detailProduct.css'
import { useParams } from "react-router-dom";
import Category from './../Category/Category';
import Banner from '../Banner/Banner';
import Slidebar from '../Slidebar/slidebar';
import Books from '../DataBooks'
import Chat from '../Chats/Chat.js';
const updated = new Date().toLocaleDateString();

export default function DetailProduct() {
    let { params } = useParams();
    // Show name book
    const NameBook = (params) => Books[0].items[params - 1].item_name;
    const AuthorBook = (params) => Books[0].items[params - 1].item_author;
    const TypeBook = (params) => Books[0].items[params - 1].item_type;
    const ContentBook = (params) => Books[0].items[params - 1].item_content;
    // Show rate book   
    const rankStar = (rate) => {
        var Rank = [];
        if (rate % 2 === 0) {
            for (let i = 1; i <= rate; i++) {
                Rank[i] = <span key={i} className="material-icons">star_rate</span>
            }
        }
        else {
            for (let i = 1; i <= rate; i++) {
                Rank[i] = <span key={i} className="material-icons">star_rate</span>
            }
            Rank.push(<span key={rate + 0.5} className="material-icons">star_half</span>)
        }
        return Rank;
    }
    function getRandomFromTo(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    const temp = getRandomFromTo(100000000, 199999999).toString();
    const temp2 = getRandomFromTo(100000, 199999).toString();
    var parts = temp.match(/.{1,3}/g);
    const view = parts.join(".");
    parts = temp2.match(/.{1,3}/g);
    const rate = parts.join(".");
    return (
        <div>
            <Banner />
            <Category />
            <div id="content__page">
                <div className="book__wrap">
                    <div className="book__title">
                        <h2 className="book__title--name">Tên sách: {NameBook(params)}</h2>
                        <em className="book__title--updated">Cập nhật lúc {updated}</em>
                    </div>
                    <div className="book__detail">
                        <div className="book__detail--card">
                            <img src={Books[0].items[params - 1].item_img} alt="item" />
                        </div>
                        <div className="book__info">
                            <div className="book__info--author">
                                <span className="material-icons">person</span>
                                <span className="book__info--text">Tác giả - {AuthorBook(params)}</span>
                            </div>
                            <div className="book__info--category">
                                <span className="material-icons">local_offer</span>
                                <span className="book__info--text">Thể loại - {TypeBook(params)}</span>
                            </div>
                            <div className="book__info--view">
                                <span className="material-icons">visibility</span>
                                <span className="book__info--text">Lượt xem - {view}</span>
                            </div>
                            <div className="book__info--rank">
                                <div className="book__info--ranktext">
                                    <span className="material-icons">stars</span>
                                    <span className="book__info--text">Xếp hạng: 4.5/5 - {rate} Lượt đánh giá. </span>
                                </div>
                                <div className="rank__star">
                                    {rankStar(4.5)}
                                </div>
                            </div>
                            <div className="book__info--read">
                                <button type="button">Đọc từ đầu</button>
                                <button type="button">Đọc phần đã lưu</button>
                            </div>
                        </div>
                    </div>
                    <div className="book__review">
                        <div className="book__review--text">
                            <span className="material-icons">
                                description
                            </span>
                            <span>Nội dung:</span>
                        </div>
                        <div className="book__review--content">
                            <p>{ContentBook(params)}</p>
                        </div>
                    </div>
                    <div className="book__comments">
                        <Chat />
                    </div>
                </div>
                <Slidebar />
            </div>
        </div>
    )
}
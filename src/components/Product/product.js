import './product.css'
import Books from '../DataBooks'
import {
    Link
} from "react-router-dom";
import React from 'react';
function getRandomFromTo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
export default function Product(props) {
    const randomView = getRandomFromTo(1, 10);
    const randomVote = getRandomFromTo(1, 5);
    const randomComment = getRandomFromTo(1, 100);
    
    const allItem = (listItem = []) => {
        for (let i = 0; i < Books.length; i++) {
            listItem[i] = []; // Tao matrix 
            for (let j = 0; j < Books[i].items.length; j++) {
                listItem[i][j] = <div key={j}  className="product__content">
                    <div className="product__item" >
                        <Link className="product__item--book" to={"/detail/" + Books[i].id + "/" + Books[i].items[j].item_id} >
                            <div className="product__item--front">
                                <div className="product__item--cover">
                                    <img src={Books[i].items[j].item_img} alt='cover' />
                                    <div className="product__item--name">
                                        {Books[i].items[j].item_name}
                                    </div>
                                </div>
                            </div>
                            <div className="product__item--leftside">
                                <img src={Books[i].items[j].item_img} alt='side' />
                            </div>
                        </Link>
                        <div className="item__footer">
                            <div className="item__footer--left">
                                <div className="vote">
                                    <span className="material-icons icon__star--yellow">
                                        star
                                    </span>
                                    {randomVote}
                                </div>
                                <div className="comment">
                                    <span className="material-icons">
                                        chat
                                    </span>
                                    {randomComment}
                                </div>
                            </div>
                            <div className="view">
                                <span className="material-icons icon__view--black">
                                    visibility
                                </span>
                                {randomView}
                            </div>
                        </div>
                    </div>
                </div>
            }
        }
        return listItem;
    }
    const Item = (listItem = [], params = 0) => {
        for (let i = 0; i < Books[props.id].items.length; i++) {
            params = i + 1;
            listItem[i] = <div key={i} className="product__item">
                <Link className="product__item--book" to={"/detail/" + Books[props.id].id + "/" + Books[props.id].items[i].item_id} >
                    <div className="product__item--front">
                        <div className="product__item--cover">
                            <img src={Books[props.id].items[i].item_img} alt='cover' />
                            <div className="product__item--name">
                                {Books[props.id].items[i].item_name}
                            </div>
                        </div>
                    </div>
                    <div className="product__item--leftside">
                        <img src={Books[props.id].items[i].item_img} alt='side' />
                    </div>
                </Link>
                <div className="item__footer">
                    <div className="item__footer--left">
                        <div className="vote">
                            <span className="material-icons icon__star--yellow">
                                star
                            </span>
                            {randomVote}
                        </div>
                        <div className="comment">
                            <span className="material-icons">
                                chat
                            </span>
                            {randomComment}
                        </div>
                    </div>
                    <div className="view">
                        <span className="material-icons icon__view--black">
                            visibility
                        </span>
                        {randomView}
                    </div>
                </div>
            </div>
        }
    }
    const showProductItem = (title) => {
        let listBook = []
        switch (title) {
            case "Cập nhật mới":
                Item(listBook)
                break;
            case "Đề xuất":
                Item(listBook);
                break;
            case "Văn học":
                Item(listBook);
                break;
            case "Nội dung chọn lọc":
                Item(listBook);
                break;
            case "Tất cả":
                allItem(listBook);
                break;
            default:
                break;
        }
        return listBook;
    }
    return (
        <div className="products">
            <div className="product__title">
                <span>{props.title}</span>
                <span><a href="#more">Xem thêm</a></span>
            </div>
            <div className="product__content" >
                {showProductItem(props.title)}
            </div>
        </div>
    );
}
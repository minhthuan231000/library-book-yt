import './slidebar.css'
import Books from '../DataBooks'
import { useParams, Link } from "react-router-dom";

export default function Slidebar() {
    let { type } = useParams();
    const showItem = () => {
        const listItem = [];
        for (let i = 0; i < Books[type].items.length; i++) {
            listItem[i] = <Link key={i} to={"/detail/" + type + "/" + Books[type].items[i].item_id} className="slidebar__content--item">
                <div className="slidebar__content--card">
                    <img src={Books[type].items[i].item_img} alt='cover' />
                </div>
                <div className="slidebar__content--text">
                    {Books[type].items[i].item_content}
                </div>
            </Link>
        }
        return listItem;
    }
    return (
        <div className="slidebar">
            <div className="slidebar__title">
                <span />
                <span />
                <span />
                Cùng thể loại
            </div>
            <div className="slidebar__content">
                {showItem()}
            </div>
        </div>
    );
}
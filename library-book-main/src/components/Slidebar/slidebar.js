import './slidebar.css'
import img from '../../assets/products/Item1.jpg'
export default function Slidebar() {
    var listItem = [];
    const showItem = (number) => {
        for (let i = 1; i <= number; i++) {
            listItem[i] = <div key={i} className="slidebar__content--item">
                <div className="slidebar__content--card">
                    <img src={img} alt="item" />
                </div>
                <div className="slidebar__content--text">
                    content 
                </div>
            </div>
        }
        return listItem;
    }
    return (
        <div className="slidebar">
            <div className="slidebar__title">xem nhiều nhất</div>
            <div className="slidebar__content">
                {showItem(10)}
            </div>
        </div>
    );
}
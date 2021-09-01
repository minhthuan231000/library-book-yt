import './product.css'
const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(require.context("../../assets/products", false, /\.(png|jpe?g|svg|gif)$/));

const images = Object.entries(cache).map(module => module[1].default);
const listNameItem = ['kirito', 'asuna', 'alice', 'eugeo']
const listContent = ['Hắc kiếm sỹ', 'Nữ hoàng tốc độ', 'Thiên thần kị sỹ', 'Hoàng tử băng kiếm']
function getRandomFromTo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
export default function Product(props) {
    const randomView = getRandomFromTo(1, 10);
    const randomVote = getRandomFromTo(1, 5);
    const randomComment = getRandomFromTo(1, 100);
    const showProductItem = (number = 4) => {
        var listItem = [];
        for (let i = 0; i < number; i++) {
            listItem[i] = <div key={i} className="product__item">
                <div className="item__card">
                    <img src={images[i]} alt="item" />
                </div>
                <div className="item__name">
                    {listNameItem[i]}
                </div>
                <div className="item__content">
                    {listContent[i]}
                </div>
                <div className="item__footer">
                    <div className="item__footer--left">
                        <div className="vote">
                            <span className="material-icons icon__star--yellow">
                                star
                            </span>
                            {randomVote}
                        </div>
                        <div className="comment">
                            <span className="material-icons icon__chat--red">
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
        return listItem;
    }
    return (
        <div className="content__page">
            <div className="products">
                <div className="product__title">
                    <span>{props.title}</span>
                    <span><a href="#more">Xem thêm</a></span>
                </div>
                <div className="product__content">
                    {showProductItem()}
                </div>
            </div>
        </div>
    );
}
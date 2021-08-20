import './category.css'
export default function Category() {
    return (
        <div className="category">
            <div className="category_title">Phân Loại:</div>
            <div className="category_content">
                <div className="category__item">Toàn Bộ</div>
                <div className="category__item">Tiểu Thuyết</div>
                <div className="category__item">Hành Động</div>
                <div className="category__item">Đam Mỹ</div>
                <div className="category__item">Trinh Thám</div>
                <div className="category__item">Kinh Dị</div>
                <div className="category__item">Ngôn Tình</div>
                <div className="category__item">Cổ Đại</div>
            </div>
        </div>
    );
}
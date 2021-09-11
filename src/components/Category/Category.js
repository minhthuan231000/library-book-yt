import './category.css'
import { useState, useEffect } from 'react';

const listCate = [
    'Truyện Ngắn - Ngôn Tình',
    'Kiếm Hiệp - Tiên Hiệp',
    'Tiểu Thuyết Phương Tây',
    'Trinh Thám - Hình Sự',
    'Tâm Lý - Kỹ Năng Sống',
    'Huyền bí - Giả Tưởng',
    'Truyện Ma - Truyện Kinh Dị',
    'Y Học - Sức Khỏe',
    'Thiếu Nhi- Tuổi Mới Lớn',
    'Tiểu Thuyết Trung Quốc',
    'Tài Liệu Học Tập',
    'Phiêu Lưu - Mạo Hiểm',
    'Kinh Tế - Quản Lý',
    'Cổ Tích - Thần Thoại',
    'Lịch Sử - Chính Trị',
    'Triết Học',
    'Hồi Ký - Tuỳ Bút',
    'Văn Học Việt Nam',
    'Marketing - Bán hàng',
    'Khoa Học - Kỹ Thuật',
    'Học Ngoại Ngữ',
    'Thư Viện Pháp Luật',
    'Truyện Cười - Tiếu Lâm',
    'Văn Hóa - Tôn Giáo',
    'Tử Vi - Phong Thủy',
    'Thể Thao - Nghệ Thuật',
    'Công Nghệ Thông Tin'
]
const listAuthor = [
    'Gào', 'Nguyễn Nhật Ánh', 'Nguyễn Minh Nhật', 'Trang Hạ', 'Anh Khang', 'Nguyễn Phong Việt',
    'Nguyễn Ngọc Thạch', 'Hamlet Trương', 'Đỗ Nhật Nam', 'Nguyễn Ngọc Sơn', 'Ernest Miller Hemingway',
    'Franz Kafka', 'J.R.R.Tolkien', 'Gabriel Garcia Marquez', 'Harper Lee', 'Paulo Coelho', 'Emily Bronte'
]
const listNXS = [
    'NXB Kim Đồng', 'NXB Trẻ', 'NXB Tổng hợp Tp HCM', 'NXB Giáo dục', 'Oxford', 'Cambridge', 'Hawaii',
    'The MIT Press', 'Penguin Random House', 'Routledge', 'Cengage Learning', 'Elsevier', 'Facts on File'
]
const listTopics = [
    'Hiện đại', 'Giới trẻ', 'Xã hội', 'Văn hóa', 'Thế giới', 'Gia đình', 'Đạo đức', 'Chính trị'
]
export default function Category(props) {
    function MenuCategory() {
        const list = [];
        for (let i = 0; i < listCate.length; i++) {
            list[i] = <li key={i}>{listCate[i]}</li>
        }
        return list;
    }
    function MenuAuthor() {
        const list = [];
        for (let i = 0; i < listAuthor.length; i++) {
            list[i] = <li key={i}>{listAuthor[i]}</li>
        }
        return list;
    }
    function MenuProducer() {
        const list = [];
        for (let i = 0; i < listAuthor.length; i++) {
            list[i] = <li key={i}>{listNXS[i]}</li>
        }
        return list;
    }
    function MenuTopic() {
        const list = [];
        for (let i = 0; i < listAuthor.length; i++) {
            list[i] = <li key={i}>{listTopics[i]}</li>
        }
        return list;
    }
    function handleClickToogle(e) {
        const name = e.target.name;
        switch (name) {
            case 'cate':
                setToggleCate(true);
                break;
            case 'author':
                setToggleAuthor(true);
                break;
            case 'producer':
                setToggleProducer(true);
                break;
            case 'topic':
                setToggleTopic(true);
                break;
            default:
                break;
        }
    }
    const [toggleCate, setToggleCate] = useState(false);
    const [toggleAuthor, setToggleAuthor] = useState(false);
    const [toggleProducer, setToggleProducer] = useState(false);
    const [toggleTopic, setToggleTopic] = useState(false);

    function hideToggles() {
        if (toggleCate) {
            setToggleCate(false)
        }
        if (toggleAuthor) {
            setToggleAuthor(false)
        }
        if (toggleProducer) {
            setToggleProducer(false)
        }
        if (toggleTopic) {
            setToggleTopic(false)
        }
    }
    useEffect(() => {
        const main = document.getElementById('main');
        main.addEventListener('click', hideToggles);
    })
    function OpenMenuCate() { return toggleCate ? MenuCategory() : ''; }
    function OpenMenuAuthor() { return toggleAuthor ? MenuAuthor() : ''; }
    function OpenMenuProducer() { return toggleProducer ? MenuProducer() : ''; }
    function OpenMenuTopic() { return toggleTopic ? MenuTopic() : ''; }

    return (
        <div className="category" >
            <div className="category_title">Danh mục:</div>
            <div className="category_content">
                <button className="category__item" name='cate' onClick={handleClickToogle}>
                    Thể loại
                    <div className="menu__category">
                        {OpenMenuCate()}
                    </div>
                </button>
                <button className="category__item" name='author' onClick={handleClickToogle}>
                    Tác giả
                    <div className="menu__category">
                        {OpenMenuAuthor()}
                    </div>
                </button>
                <button className="category__item" name='producer' onClick={handleClickToogle}>
                    Nhà sản xuất
                    <div className="menu__category">
                        {OpenMenuProducer()}
                    </div>
                </button>
                <button className="category__item" name='topic' onClick={handleClickToogle}>
                    Chủ đề
                    <div className="menu__category">
                        {OpenMenuTopic()}
                    </div>
                </button>
            </div>
        </div>
    );
}
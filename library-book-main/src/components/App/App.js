import "../../index.css"
import './app.css'
import Heading from "../Heading/heading";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Product from "../Product/product";
import Slidebar from '../Slidebar/slidebar'
import Footer from "../Footer/footer";
function App() {
  return (
    <div id="main">
      <Heading />
      <Banner />
      <Category />
      <div id="content__page">
        <div className="content">
          <Product title="Cập nhật mới" />
          <Product title="Đề xuất" />
          <Product title="Anime" />
          <Product title="Nội dung chọn lọc" />
        </div>
        <Slidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;

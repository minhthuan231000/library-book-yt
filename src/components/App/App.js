import "../../index.css"
import './app.css'
import Heading from "../Heading/heading";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Product from "../Product/product";
import Footer from "../Footer/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailProduct from "../Product/detailProduct";
function HomePage() {
  return (
    <div id="products__page">
      <div className="content">
        <Product title="Cập nhật mới" id={0} />
        <Product title="Đề xuất" id={1} />
        <Product title="Văn học" id={2} />
        <Product title="Nội dung chọn lọc" id={3} />
      </div>
    </div>
  )
}
function App() {
  return (
    <div id="main">
      <Heading />
      <Banner />
      <Category />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/detail/:params">
            <DetailProduct />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

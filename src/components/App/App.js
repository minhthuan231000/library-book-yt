import { useState } from 'react'
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
import Register from "../Register/Register";
import Login from "../Login/Login";
import User from './../User/User';
function HomePage() {
  return (
    <div id="products__page">
      <div className="contentt">
        <Product title="Cập nhật mới" id={0} />
        <Product title="Đề xuất" id={1} />
        <Product title="Văn học" id={2} />
        <Product title="Nội dung chọn lọc" id={3} />
        <Product title="Tất cả" />
      </div>
    </div>
  )
}
function RegisterPage() {
  return (
    <div id="reg__page">
      <Register />
    </div>
  )
}
function LoginPage() {
  return (
    <div id="reg__page">
      <Login />
    </div>
  )
}
function InfoPage() {
  return (
    <div id="inf__page">
      <User />
    </div>
  )
}
function App() {
  const [mode, setMode] = useState(false);
  function handleMode() {
    setMode(!mode)
  }
  return (
    <div id="main" style={{ backgroundColor: mode ? '#ffff' : '#1F1F1F' }}>
      <Router>
        <Heading handleMode={handleMode} />
        <Switch>
          <Route exact path="/">
            <Banner />
            <Category />
            <HomePage />
          </Route>
          <Route path="/detail/:type/:id">
            <Banner />
            <Category/>
            <DetailProduct />
          </Route>
          <Route path="/user/register">
            <RegisterPage />
          </Route>
          <Route path="/user/login">
            <LoginPage />
          </Route>
          <Route path="/user/info">
            <InfoPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

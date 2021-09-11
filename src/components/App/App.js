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

function InfoPage() {
  return (
    <div id="inf__page">
      <User />
    </div>
  )
}

export default function App() {
  const [mode, setMode] = useState(false);
  const [logged, setLogged] = useState(false);
  function handleMode() {
    setMode(!mode)
  }
  function LoginPage() {
    // Start range code for login page
    const user1 = {
      email: 'thuan123',
      username: 'thuan123',
      password: '123'
    }
    localStorage.setItem('user', JSON.stringify(user1));
    const item = localStorage.getItem('user');
    const checkLogin = JSON.parse(item);

    function onLoginSubmit(formData) {
      // do something when compoment Login send request submit;
      if (formData.username === checkLogin.username
        && formData.password === checkLogin.password
        && formData.email === checkLogin.email) {
        // if login success:
        alert('Đăng nhập thành công');
        setLogged(true);
      } else {
        alert('Đăng nhập thất bại')
      }
    }
    return (
      <div id="login__page">
        <Login onSubmit={onLoginSubmit} />
      </div>
    )
    // End range code for login page
  }
  function RegisterPage() {
    // Start range code for reg page
    function onRegSubmit() {
      // do something when compoment Register send request submit ;
    }
    return (
      <div id="reg__page">
        <Register onSubmit={onRegSubmit} />
      </div>
    )
    // End range code for reg page
  }
  return (
    <div id="main" style={{ backgroundColor: mode ? '#ffff' : '#1F1F1F' }}>
      <Router>
        <Heading handleMode={handleMode} logged={logged} clickLogout={() => setLogged(!logged)} />
        <Switch>
          <Route exact path="/">
            <Banner />
            <Category />
            <HomePage />
          </Route>
          <Route path="/detail/:type/:id">
            <Banner />
            <Category />
            <DetailProduct />
          </Route>
          <Route path="/user/register">
            <RegisterPage />
          </Route>
          <Route path="/user/login" >
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


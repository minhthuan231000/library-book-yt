import React from 'react';
import PropTypes from 'prop-types';

Step1.propTypes = {
  currentStep: PropTypes.number,
  email: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  repassword: PropTypes.string,
};

export default function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div>
      <div className="user-box">
        <input required name="email" type="text" value={props.email} onChange={props.handleChange} />
        <label>Địa chỉ Email</label>
      </div>
      <div className="user-box">
        <input required name="username" type="text" value={props.username} onChange={props.handleChange} />
        <label>Username</label>
      </div>
      <div className="user-box">
        <input required name="password" type="password" value={props.password} onChange={props.handleChange} />
        <label>Password</label>
      </div>
      <div className="user-box">
        <input required name="repassword" type="password" value={props.repassword} onChange={props.handleChange} />
        <label>Nhập lại mật khẩu</label>
      </div>
    </div>
  );
}
import React from 'react'
import logo from '../../assets/img/logo_circles.svg';


function AccountSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <a href='/main'><img src={logo} alt="로고" style={{ width: '100px' }} /></a>
      <p style={{ color: '#fff', fontSize: '24px', textAlign: 'center', fontWeight: '700', margin: '22px 0', lineHeight: '30px' }}>
                밈과사전에 오신 것을 환영합니다!<br />
                계정 정보를 입력해주세요.</p>
    </div>
  )
}

export default AccountSection;
import React from 'react'
import logo from '../assets/img/logo_circles.svg';


function AccountHeader() {
    return (
        <div style={{ background: '#232332', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={logo} alt="로고" style={{ width: '100px' }} />
            <p style={{ color: '#fff', fontSize: '24px', textAlign: 'center', fontWeight: '700', margin: '22px 0' }}>
                밈과사전에 오신 것을 환영합니다!<br />
                계정 정보를 입력해주세요.</p>
        </div>
    )
}

export default AccountHeader;
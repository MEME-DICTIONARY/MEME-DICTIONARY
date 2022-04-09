import React from 'react'
import styles from "../assets/style/LoginPage.module.css";
import AccountHeader from '../component/AccountHeader.js';
import BaseButton from '../component/BaseButton';

function LoginPage() {
    return (
        <div className={styles.loginPage__wrapper}>
            <AccountHeader />
            <div className={styles.account__wrapper}>
                <div className={styles.data__input}>
                    <strong><span>*</span>아이디</strong>
                    <div className={styles.data__id}>
                        <input type="text" placeholder="아이디를 입력해주세요." />
                        <button>중복확인</button>
                    </div>
                </div>

                <div className={styles.data__input}>
                    <strong><span>*</span>비밀번호</strong>
                    <div className={styles.data__password}>
                        <input type="text" placeholder="비밀번호를 입력해주세요." />
                    </div>
                </div>
            </div>
            <a className={styles.signup__link} href="/signup">회원가입 하러가기</a>
            <BaseButton text="로그인"></BaseButton>
        </div>
    )
}

export default LoginPage;
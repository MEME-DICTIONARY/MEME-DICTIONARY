import React from 'react'
import styles from "../assets/style/SignupPage.module.css";
import AccountHeader from '../component/AccountHeader.js';
import BaseButton from '../component/BaseButton';

function SignupPage() {
    return (
        <div className={styles.signupPage__wrapper}>
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

                <div className={styles.data__input}>
                    <strong><span>*</span>비밀번호 확인</strong>
                    <div className={styles.data__password}>
                        <input type="text" placeholder="비밀번호를 한 번 더 입력해주세요." />
                    </div>
                </div>
            </div>
            <BaseButton text="확인"></BaseButton>
        </div>
    )
}

export default SignupPage;
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isLoginState = atom({
  key:'isLogin',
  default:false,
  effects_UNSTABLE:[persistAtom],
})

export const tokenState = atom({
  key:'token',
  default:'',
  effects_UNSTABLE:[persistAtom],
})

export const passwordState = atom({
  key:'password',
  default:'',
  effects_UNSTABLE:[persistAtom],
})
import { certificationAtom } from '@/src/store/certification';
import { useAtom } from 'jotai';
import React from 'react';

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  const [state, setState] = useAtom(certificationAtom);
  return (
    <div>
      <button
        onClick={() => {
          setState((s) => ({
            isLogin: !s.isLogin,
            accessToken: s.accessToken ? null : 'dsalkfmdkfdkl',
          }));
        }}
      >
        로그인하기
      </button>
    </div>
  );
};

export default LoginPage;

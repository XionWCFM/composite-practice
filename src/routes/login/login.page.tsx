import { certificationAtom } from '@/src/store/certification';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React from 'react';

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  const [state, setState] = useAtom(certificationAtom);
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          setState((s) => ({
            isLogin: !s.isLogin,
            accessToken: s.accessToken ? null : 'dsalkfmdkfdkl',
          }));
          router.reload();
        }}
      >
        로그인하기
      </button>
    </div>
  );
};

export default LoginPage;

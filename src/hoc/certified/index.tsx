import LoginPage from '@/src/routes/login/login.page';
import { certificationAtom } from '@/src/store/certification';
import { useAtom } from 'jotai';
import React from 'react';

export const withCertified = <P extends object>(
  Component: React.FunctionComponent<P>,
) => {
  const WrappingComponent = (prop: P) => {
    const [certification, setCertification] = useAtom(certificationAtom);
    if (certification.isLogin) {
      return <Component {...prop} />;
    }
    return <LoginPage />;
  };
  const displayName = Component.displayName || Component.name || 'Component';
  WrappingComponent.displayName = `Certified(${displayName})`;
  return WrappingComponent;
};

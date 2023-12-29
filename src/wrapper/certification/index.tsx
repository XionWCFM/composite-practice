import LoginPage from '@/src/routes/login/login.page';
import { certificationAtom } from '@/src/store/certification';
import { useAtomValue } from 'jotai';

export const CertificationWrapper = ({
  children,
  fallback,
}: {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}) => {
  const certificate = useAtomValue(certificationAtom);
  if (certificate.isLogin) {
    return children;
  }
  return fallback ?? <LoginPage />;
};

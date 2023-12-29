import LoginPage from '@/src/routes/login/login.page';
import { certificationAtom } from '@/src/store/certification';
import { useAtomValue } from 'jotai';

export const CertificationWrapper = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const certificate = useAtomValue(certificationAtom);
  if (certificate.isLogin) {
    return children;
  }
  return <LoginPage />;
};

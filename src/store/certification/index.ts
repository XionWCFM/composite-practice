import { atom } from 'jotai';

type CertificationType = {
  isLogin: boolean;
  accessToken: string | null;
};

export const certificationAtom = atom<CertificationType>({
  isLogin: false,
  accessToken: null,
});

import { withCertified } from '@/src/hoc/certified';
import React from 'react';

interface InfoPageProps {}

const InfoPage = ({}: InfoPageProps) => {
  return <div>InfoPage</div>;
};

export default withCertified(InfoPage);

import React from 'react';

export default function Home() {
  const [client, setclient] = React.useState(false);
  const [steps, setSteps] = React.useState([
    {
      target: '.my-first-step',
      content: 'This is my awesome feature!',
    },
    {
      target: '.my-other-step',
      content: 'This another awesome feature!',
    },
  ]);
  React.useEffect(() => {
    setclient(true);
  }, []);
  return <div className=""></div>;
}


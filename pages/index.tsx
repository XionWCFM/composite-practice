import React from 'react';

export default function Home() {
  const [client, setclient] = React.useState(false);
  const tourElementList = React.useRef<HTMLDivElement[]>([]);
  const [tour, setTour] = React.useState({
    tourOpen: false,
    step: 0,
  });

  React.useEffect(() => {
    setclient(true);
  }, []);

  return (
    <div className="">
      {client && (
        <div className="">
          {tour.tourOpen && (
            <div className=" w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-25"></div>
          )}
          <div
            className=" relative z-10 bg-white"
            ref={(element) => (tourElementList.current[0] = element!)}
          >
            안녕하세요
          </div>
          <div
            className=" relative bg-white z-10"
            ref={(element) => (tourElementList.current[1] = element!)}
          >
            곽두팔입니다.
          </div>
        </div>
      )}
      <button
        onClick={() => {
          setTour((state) => ({
            ...state,
            tourOpen: !state.tourOpen,
          }));
        }}
        className=" z-20"
      >
        이런 코드를 써버리는{' '}
      </button>
    </div>
  );
}

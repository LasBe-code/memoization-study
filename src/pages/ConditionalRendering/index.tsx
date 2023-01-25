import { useEffect, useState } from 'react';

// 3초 후 return 하는 비동기 함수
const promiseFun = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 'JANG';
};
const Component = ({ name }: { name: string }) => {
  return <button>{name}</button>;
};

const Loading = () => {
  return <div>Loading...</div>;
};

export const ConditionalRendering = () => {
  const [state, setState] = useState<{ name: string }>();

  useEffect(() => {
    promiseFun().then((response) => {
      setState({ name: response });
    });
  }, []);

  // const renderWithIf = () => {
  //   if(state) return <Component name={state.name} />
  // }

  // return renderWithIf();

  // return state && <Component name={state.name} />

  // return isModalOpen && <Modal />
  // return stateA && stateB && stateC && <Component stateA={stateA} stateB={stateB} stateC={stateC} />

  // const renderWithIfElse = () => {
  //   if (state) {
  //     return <Component name={state.name} />;
  //   } else {
  //     return <Loading />;
  //   }
  // }

  // return renderWithIfElse()
  return state ? <Component name={state.name} /> : <Loading />;
};

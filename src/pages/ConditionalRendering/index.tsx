import { useEffect, useState } from 'react';

type StateType = {
  person: { name: string };
};

export const ConditionalRendering = () => {
  const [state, setState] = useState<StateType>();

  useEffect(() => {
    setTimeout(() => {
      const newData = { person: { name: 'kim' } };
      setState(newData);
    }, 1000);
  }, []);

  return <>{state && <Component person={state.person} />}</>;
};

const Component = ({ person }: StateType) => {
  return <button>{person.name}</button>;
};

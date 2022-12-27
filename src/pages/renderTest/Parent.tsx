import { useCallback, useMemo, useState } from "react";

type PropType = {
  propData: number;
};
const ExpensiveComponent = ({ propData }: PropType) => {
  console.log("ExpensiveComponent");
  const dataList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const average = () => {};
  return (
    <div>
      {dataList.map((data) => (
        <span key={data}>{data + propData} </span>
      ))}
    </div>
  );
};

export const Parent = () => {
  const [firstState, setFirstState] = useState<any>();
  const [secondState, setSecondState] = useState(0);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("inputOnChange, firstState: ", firstState);
    setFirstState(e.target.value);
  };

  const buttonOnClick = () => {
    console.log("buttonOnClick, secondState: ", secondState);
    setSecondState(secondState + 1);
  };

  const MemoizedComponent = useMemo(() => {
    return <ExpensiveComponent propData={secondState} />;
  }, [secondState]);

  const anyComponent = useCallback(() => {
    const num = secondState + 100;
    console.log("anyComponent, secondState: ", secondState);
    return <div>{num}</div>;
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "1000px",
      }}
    >
      <input
        type="text"
        onChange={(e) => {
          inputOnChange(e);
        }}
      />
      <button
        onClick={() => {
          buttonOnClick();
        }}
      >
        secondState++
      </button>
      {firstState}
      {MemoizedComponent}
      {anyComponent()}
    </div>
  );
};

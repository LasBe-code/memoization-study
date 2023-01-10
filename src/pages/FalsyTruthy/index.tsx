type CheckType = {
  valueType: string;
  value: any;
};

export const FalsyTruthy = () => {
  const dataList: CheckType[] = [
    { valueType: '[empty object] {}', value: {} },
    { valueType: '[empty array] []', value: [] },
    { valueType: 'null', value: null },
    { valueType: 'undefined', value: undefined },
    { valueType: 'NaN', value: NaN },
    { valueType: "[empty string] ''", value: '' },
    { valueType: '0', value: 0 },
  ];
  dataList.map((data) => {
    console.log(`::: ${data.valueType} :::`);
    console.log(`${data.valueType} ?? 'newValue' => ${data.value ?? 'newValue'}`);
    console.log(`${data.valueType} || 'newValue' => ${data.value || 'newValue'}`);
    console.log(`${data.valueType} && 'newValue' => ${data.value && 'newValue'}`);
    console.log('');

    return null;
  });
  return (
    <div>
      <h1>Check Console</h1>
    </div>
  );
};

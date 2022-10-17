import { useState } from 'react';
import ButtonsBox from '../components/ButtonsBox';
import Result from '../components/Result';
import Title from '../components/Title';

export type CalcState = {
  sign: string
  num: any
  res: any
}
const CalculatorPage = () => {
  let [calc, setCalc] = useState<CalcState>({
    sign: '',
    num: 0,
    res: 0,
  });
  return (
    <div className="flex mx-auto flex-col items-center justify-center w-[280px]">
      <Title />
      <Result value={calc.num ? calc.num : calc.res} />
      <ButtonsBox setCalc={setCalc} calc={calc}/>
    </div>
  );
};

export default CalculatorPage;

import { Button } from 'antd';
import { CalcState } from '../screens/Calculator';
import { BtnSetup } from '../util/calculator';

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

export interface ButtonsBoxProps {
  setCalc: (data: CalcState) => void;
  calc: CalcState;
}

const ButtonsBox = (props: ButtonsBoxProps) => {

  return (
    <div className="grid grid-cols-4">
      {btnValues.flat().map((item: string | number, i) => {
        //@ts-ignore
        const btn = BtnSetup[item];
        return (
          <Button
            className={`${btn?.className} !text-white !rounded`}
            key={i}
            onClick={(e) => btn.onClick?.(e, props)}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonsBox;

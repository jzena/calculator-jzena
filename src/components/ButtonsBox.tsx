import { Button } from 'antd';
import { CalcState } from '../screens/Calculator';
import { commaClickHandler, equalsClickHandler, invertClickHandler, numClickHandler, percentClickHandler, resetClickHandler, signClickHandler } from '../util/calculator';

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const btnSetup = {
  C: {
    className: '!bg-[#383939]',
    onClick: resetClickHandler,
  },
  '+-': {
    className: '!bg-[#383939]',
    onClick: invertClickHandler,
  },
  '%': {
    className: '!bg-[#383939]',
    onClick: percentClickHandler
  },
  '/': {
    className: '!bg-[#f39e2b]',
    onClick: signClickHandler
  },
  7: {
    className: '!bg-[#5a6575]',
    onClick: numClickHandler,
  },
  8: {
    className: '!bg-[#5a6575]',
    onClick: numClickHandler,
  },
  9: {
    className: '!bg-[#5a6575]',
    onClick: numClickHandler,
  },
  X: {
    className: '!bg-[#f39e2b]',
    onClick: signClickHandler
  },
  4: {
    className: '!bg-[#5a6575]',
    onClick: numClickHandler,
  },
  5: {
    className: '!bg-[#5a6575]',
    onClick: numClickHandler,
  },
  6: {
    className: '!bg-[#5a6575]',
    onClick: numClickHandler,
  },
  '-': {
    className: '!bg-[#f39e2b]',
    onClick: signClickHandler
  },
  1: {
    className: '!bg-[#5a6575]',
    onClick: numClickHandler,
  },
  2: {
    className: '!bg-[#5a6575]',
    onClick: numClickHandler,
  },
  3: {
    className: '!bg-[#5a6575]',
    onClick: numClickHandler,
  },
  '+': {
    className: '!bg-[#f39e2b]',
    onClick: signClickHandler
  },
  0: {
    className: 'col-span-2 !bg-[#5a6575]',
    onClick: numClickHandler,
  },
  '.': {
    className: '!bg-[#5a6575]',
    onClick: commaClickHandler
  },
  '=': {
    className: '!bg-[#f39e2b]',
    onClick: equalsClickHandler
  },
};

export interface ButtonsBoxProps {
  setCalc: (data: CalcState) => void;
  calc: CalcState;
}

const ButtonsBox = (props: ButtonsBoxProps) => {

  return (
    <div className="grid grid-cols-4">
      {btnValues.flat().map((item: string | number, i) => {
        //@ts-ignore
        const btn = btnSetup[item];
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

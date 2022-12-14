import {MouseEvent} from 'react'
import { ButtonsBoxProps } from '../components/ButtonsBox';

// Functions for making the computation
const toLocaleString = (num: number) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

const removeSpaces = (num: number) => num.toString().replace(/\s/g, '');


export const numClickHandler = (
  e: MouseEvent<HTMLButtonElement>,
  props: ButtonsBoxProps
) => {
  e.preventDefault();
  const { calc, setCalc } = props;
  const value = Number(e.currentTarget.textContent);

  if (removeSpaces(calc.num).length < 16) {
    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === 0
          ? 0
          : Number(removeSpaces(calc.num)) % 1 === 0
          ? toLocaleString(Number(removeSpaces(calc.num + value)))
          : toLocaleString(calc.num + value),
      res: !calc.sign ? 0 : calc.res,
    });
  }
};

export const commaClickHandler = (
  e: MouseEvent<HTMLButtonElement>,
  props: ButtonsBoxProps
) => {
  const { calc, setCalc } = props;
  e.preventDefault();
  const value = e.currentTarget.textContent;

  setCalc({
    ...calc,
    num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
  });
};
export const signClickHandler = (
  e: MouseEvent<HTMLButtonElement>,
  props: ButtonsBoxProps
) => {
  const { calc, setCalc } = props;
  e.preventDefault();
  const value = e.currentTarget.textContent;

  setCalc({
    ...calc,
    sign: value!,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: 0,
  });
};

export const equalsClickHandler = (
  e: MouseEvent<HTMLButtonElement>,
  props: ButtonsBoxProps
) => {
  const { calc, setCalc } = props;
  if (calc.sign && calc.num) {
    const math = (a: number, b: number, sign: any) =>
      sign === '+'
        ? a + b
        : sign === '-'
        ? a - b
        : sign === 'X'
        ? a * b
        : a / b;

    setCalc({
      ...calc,
      res:
        calc.num === 0 && calc.sign === '/'
          ? "Can't divide with 0"
          : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            ),
      sign: '',
      num: 0,
    });
  }
};
export const invertClickHandler = (
  e: MouseEvent<HTMLButtonElement>,
  props: ButtonsBoxProps
) => {
  const { calc, setCalc } = props;
  setCalc({
    ...calc,
    num: calc.num ? calc.num * -1 : 0,
    res: calc.res ? calc.res * -1 : 0,
    sign: '',
  });
};

export const percentClickHandler = ( e: MouseEvent<HTMLButtonElement>,
  props: ButtonsBoxProps) => {
    const { calc, setCalc } = props;
  let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
  let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

  setCalc({
    ...calc,
    num: (num /= Math.pow(100, 1)),
    res: (res /= Math.pow(100, 1)),
    sign: "",
  });
};

export const resetClickHandler = (
  e: MouseEvent<HTMLButtonElement>,
  props: ButtonsBoxProps
) => {
  const { calc, setCalc } = props;
  setCalc({
    ...calc,
    sign: '',
    num: 0,
    res: 0,
  });
};

// Map with all the setup for the calculator buttons
export const BtnSetup = {
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


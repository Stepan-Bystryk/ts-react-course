import { useState } from "react";
import { Button } from "../Button";
import style from "./style.module.css";

export const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);

  const onClickPlus = () => {
    setClickCount(clickCount + 1);
  };

  const onClickMinus = () => {
    setClickCount(clickCount - 1);
  };

  const reset = () => {
    setClickCount(0);
  };

  return (
    <div className={style.wrap}>
      <p>Counter</p>
      <h2>{clickCount}</h2>

      <div className={style.wrapBtn}>
        {clickCount <= 0 && (
          <Button text={"+"} onClick={onClickPlus} type="first" />
        )}

        {clickCount >= 10 && (
          <div className={style.btnMinus}>
            <Button text={"-"} onClick={onClickMinus} type="first" />
          </div>
        )}

        {!(clickCount >= 10) && !(clickCount <= 0) && (
          <div>
            <Button text={"+"} onClick={onClickPlus} type="first" />
            <Button text={"-"} onClick={onClickMinus} type="first" />
          </div>
        )}
        <Button text={"reset"} onClick={reset} type="second" />
      </div>
    </div>
  );
};

import style from "./style.module.css";

export const Button = (props: Props) => {
  return (
    <button
      className={`${style.button} ${getBtnStyle(props.type)}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

interface Props {
  text: string;
  onClick: () => void;
}

interface Props {
  text: string;
  type: "first" | "second" | "third";
  disabled?: boolean;
  onClick: () => void;
}

const getBtnStyle = (type: "first" | "second" | "third") => {
  if (type === "first") {
    return style.first;
  }

  if (type === "second") {
    return style.second;
  }

  if (type === "third") {
    return style.third;
  }
};

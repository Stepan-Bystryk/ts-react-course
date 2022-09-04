import style from "./style.module.css";

interface Props {
  userName: string;
  isDark: boolean;
}

export const UserCard = (props: Props) => {
  const arrFullName = props.userName.split(" ");

  return (
    <div
      className={`${style.container} ${
        props.isDark ? style.containerDark : ""
      }`}
    >
      <div
        className={`${style.userInicial} ${
          props.isDark ? style.userInicialDark : ""
        }`}
      >{`${arrFullName[0][0]}${arrFullName[1] ? arrFullName[1][0] : ""}`}</div>

      <div className={style.user}>{props.userName}</div>
    </div>
  );
};

import "./App.css";
import { Button } from "./components/Button";
import { Clicker } from "./components/Clicker";
import { Input } from "./components/Input";
import { UserCard } from "./components/UserCard";
import { Title } from "./components/Title";
import { EmojiList } from "./components/Emoji/EmojiList";

function App() {
  const onClickBtn1 = () => {
    alert("Well done !");
  };

  const onClickBtn2 = () => {
    alert("Well done !");
  };

  return (
    <div className="App">
      <Title text="React Course" />
      <div>
        <Button text="Кнопка 1" onClick={onClickBtn1} type="first" />
        <Button text="Кнопка 2" onClick={onClickBtn2} type="second" />
      </div>
      <Input value="Текст 1" />
      <Input value="Текст 2" />
      <UserCard userName="Степан Б" isDark={false} />
      <UserCard userName="Виталий Б" isDark={true} />
      <Clicker />
      <EmojiList />
    </div>
  );
}

export default App;

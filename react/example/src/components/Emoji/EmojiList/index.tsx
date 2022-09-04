import { EmojiRow } from "../EmojiRow";
import { emojies } from "./list";

export const EmojiList = () => {
  return (
    <div>
      <h3>Emoji</h3>
      {emojies.map((item) => {
        return (
          <EmojiRow
            key={item.keywords}
            symbol={item.symbol}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

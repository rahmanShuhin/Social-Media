import { Avatar, Button, Input, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Picker from "emoji-picker-react";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
const Post = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    const emoji = chosenEmoji?.emoji;
    console.log(emoji);
    if (emoji) {
      setInput(input + emoji);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setShow(false);
    console.log(input);
  };
  useEffect(() => {
    fetch("http://localhost:5000/post/get")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <Avatar></Avatar>
        <input
          type="text"
          placeholder="What's on your Mind ?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div className="hr"></div>
      <div className="input__bottom">
        <div>
          <TextField type="file" onChange={() => setImg(true)} />
        </div>
        <div>
          <Button onClick={() => setShow(!show)}>
            <EmojiEmotionsIcon></EmojiEmotionsIcon> Emoji/Feeling
          </Button>
          <div className="emojiBox">
            {show && <Picker onEmojiClick={onEmojiClick} />}
          </div>
        </div>
      </div>
      <div className="input__post">
        {img && (
          <Button variant="contained" color="primary">
            Post
          </Button>
        )}
      </div>
    </div>
  );
};

export default Post;

import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    const handleEmoji = e => {
        setText((prev) => prev + e.emoji);
        setOpen(false)
    };

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./mini.jpeg" alt="" />
                    <div className="texts">
                        <span>Minnie Mouse</span>
                        <p>Always choose joy</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./mini.jpeg" alt="" />
                    <div className="texts">
                        <p>
                           Hey Mickey, how about we get everyone together for a group photo?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                           That’s a great idea, Minnie! I love taking photos with all our friends.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./mini.jpeg" alt="" />
                    <div className="texts">
                        <p>
                        Me too! It’s always so special to have memories like that. I’ll go grab Pluto and make sure everyone’s ready!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                           I’ll get Donald and Daisy! We’re going to have the best group photo!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./mini.jpeg" alt="" />
                    <div className="texts">
                        <p>
                            Oh, don’t worry. I’m sure we’ll get them all to laugh! It’ll be such a fun photo, I can already picture it!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                        Yep! Everyone’s going to look great! This is going to be one photo we’ll treasure forever.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./mini.jpeg" alt="" />
                    <div className="texts">
                        <p>
                        Let’s do it! I can’t wait to see the results!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="./disneyfam.jpg"/>
                      
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input 
                  type="text" 
                  placeholder="Type a message..."
                  value={text}
                  onClick={(e) => setText(e.target.value)} 
                />
                <div className="emoji">
                    <img 
                      src="./emoji.png" 
                      alt=""
                      onClick={() => setOpen((prev) => !prev)} 
                    />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    );
};

export default Chat;
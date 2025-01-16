import { useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/addUser";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img 
                  src={addMode ? "./minus.png" : "./plus.png"}
                  alt="" 
                  className="add"
                  onClick={() => setAddMode((prev) => !prev)}
                />
            </div>
            <div className="item">
                <img src="./mickey.jpeg" alt="" />
                <div className="texts">
                    <span>Mickey Mouse</span>
                    <p>It's me!</p>
                </div>
            </div><div className="item">
                <img src="./mini.jpeg" alt="" />
                <div className="texts">
                    <span>Minnie Mouse</span>
                    <p>Always choose joy</p>
                </div>
            </div>
            <div className="item">
                <img src="./pooh.jpeg" alt="" />
                <div className="texts">
                    <span>Winnie the Pooh</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./pluto.jpg" alt="" />
                <div className="texts">
                    <span>Pluto</span>
                    <p>Mickey's pet dog</p>
                </div>
            </div>
            <div className="item">
                <img src="./daisy.png" alt="" />
                <div className="texts">
                    <span>Daisy</span>
                    <p>Stylish, confident, playful</p>
                </div>
            </div>
            <div className="item">
                <img src="./donald.jpg" alt="" />
                <div className="texts">
                    <span>Donald</span>
                    <p>Fun, spirited, goofy</p>
                </div>
            </div>
            <div className="item">
                <img src="./barbie.jpeg" alt="" />
                <div className="texts">
                    <span>Barbie</span>
                    <p>Because Barbie</p>
                </div>
            </div>
            {addMode && <AddUser/>}
        </div>
    );
};

export default ChatList;
import React, { useState } from 'react';
import './App.css';
import menu from "./assets/menu.png";
import newchat from "./assets/comment.png";
import plan from "./assets/coin.png";
import send from "./assets/send.png";
import gpt from "./assets/openai.svg";
import { sendMsgToOpenAI } from './openAI';

const App = () => {
    const [input, setInput] = useState("");

    const handleSend = async () => {
        const res = await sendMsgToOpenAI(input);
        console.log(res);
    }


    return (
        <div className="App">
            <div className="sidebar">
                <div className="upperside">
                    <div className="upperside-top">
                        <img className="menu" src={menu} alt="Menu" />
                        <button className="new-chat">
                            <img src={newchat} alt="New Chat" />
                        </button>
                    </div>
                    <div className="uppersideBottom">
                        <button className="chats">What is programming</button>
                        <button className="chats">What is React</button>
                    </div>
                </div>
                <div className="lowerside">
                    <a href="/">
                        <div className="plan">
                            <img src={plan} alt="Plan Icon" />
                            <p>Upgrade Plan</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="main">
                <div className="header">
                    <h1>ChatGPT</h1>
                </div>
                <div className="output">
                    <div className="message">
                        <div className="gpt-icon">
                            <img src={gpt} alt="GPT Icon" />
                        </div>
                        <p className="gpt-message">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt ut, optio accusantium fuga maiores expedita fugit, placeat obcaecati laboriosam sapiente corporis voluptates nulla eum odit repellendus officiis aspernatur exercitationem!
                        </p>
                    </div>
                </div>
                <div className="footer">
                    <input
                        className="prompt"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Message ChatGPT"
                    />
                    <button className="send" onClick={handleSend}>
                        <img className="send-img" src={send} alt="Send" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;

import React from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "../components/Messages";
import Input from "../components/Input";


const Chat = () => {
    return(
        <div clasName='chat'>
            <div className="chatInfo">
                <span>Paulo</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                
                </div>
            </div>
                <Messages />
                <Input/>
        </div>
        

    );
};

export default Chat
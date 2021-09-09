import React, { useState } from 'react';
import './chat.scss';
import ChatForm from './ChatForm';
import ChatList from './ChatList';
/* Class parent Chat */
export default function Chat() {
    const [listChat, setListChat] = useState([
        { id: 0, name: 'Robin', chat: 'Hay cực', sex: 'nam', avt: '/assets/avatars/male_avt.ico' },
        { id: 1, name: 'Dennis', chat: 'Đáng để đọc', sex: 'nu', avt: '/assets/avatars/female_avt.ico' },
    ])
    function handleChatClick(chat) {
        const index = listChat.findIndex(x => x.id === chat.id);
        if (index < 0) return;
        const newListChat = [...listChat];
        newListChat.splice(index, 1);
        setListChat(newListChat);
    }
    function handleChatSubmit(formValue) {
        // Add new chat to listChat
        const newChat = {
            id: listChat.length + 1,
            name: 'Guest',
            sex: 'nam',
            avt: '/assets/avatars/male_avt.ico',
            ...formValue // clone form value lấy từ ChatForm
        }
        const newListChat = [...listChat];
        newListChat.push(newChat);
        setListChat(newListChat);
    }
    return (
        <div className="chat__box">
            <div className="chat__box--text">
                <span className="material-icons">
                    description
                </span>
                <span>Bình luận:</span>
            </div>
            <div className="chat__box-content">
                <ChatList chats={listChat} onChatClick={handleChatClick} />
            </div>
            <ChatForm onSubmit={handleChatSubmit} />
        </div>
    )
}
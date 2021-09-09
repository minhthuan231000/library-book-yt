import React from 'react';
import PropTypes from 'prop-types';

// Khởi tạo với giá trị truyền vào
ChatList.propTypes = {
    chats: PropTypes.array,
    onChatClick: PropTypes.func
};
// Khởi tạo với giá trị mặc định
ChatList.defaultProps = {
    chats: [],
    onChatClick: null,
}
export default function ChatList(props) {
    const { chats, onChatClick } = props;

    function handleClick(chat) {
        if (onChatClick) {
            onChatClick(chat);
        }
    }
    return (
        <ul>
            {chats.map(chat => (
                <li className="chat__user" key={chat.id} onClick={() => handleClick(chat)}>
                    <span className="chat__user--avatar">
                        <img src={chat.avt} alt='alt' />
                    </span>
                    <span className="chat__user--content">
                        {chat.name} - {chat.chat}
                    </span>
                </li>
            ))}
        </ul>
    );
}
import { useState } from "react"
import './chat.scss'
import avt from '../../assets/icons/facebook.png'
export default function Chat() {
    const listChat = [
        {
            id: 0,
            name: 'Robin',
            chat: 'ABC'
        },
        {
            id: 1,
            name: 'Dennis',
            chat: 'XYZ'
        },
    ];
    const [addChat, setAddChat] = useState();
    const handleChangeChat = (e) => {
        setAddChat(e.target.value);
    }
    const ChatItem = () => {
        var list = [];
        for (let i = 0; i < listChat.length; i++) {
            const item = <div key={listChat[i].id} className="chat__box--item">
                {listChat[i].chat}
            </div>
            list.push(item);
        }
        return list;
    }
    const AddChat = () => {
        listChat.push(addChat)
    }
    return (
        <div className="chat__box">
            <div className="chat__box-content">
                {ChatItem()}
            </div>
            <form method="POST" className="chat__user">
                <div className="chat__user--avatar">
                    <img src={avt} alt='img' />
                </div>
                <div className="chat__name">User</div>
                <div className="chat__input">
                    <input value={addChat} required={true} onChange={(e) => handleChangeChat(e)} />
                </div>
                <div>
                    <button type="button" onClick={AddChat()}>Thêm bình luận mới</button>
                </div>
            </form>
        </div>
    )
}
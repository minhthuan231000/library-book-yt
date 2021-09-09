import React from 'react';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

ChatForm.propTypes = {
    onSubmit: PropTypes.func,
};
ChatForm.defaultProps = {
    onSubmit: null,
}
/* class children Chat */
function ChatForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');
    function handleChangeValue(e) {
        console.log(e.target.value)
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        // Prevent reloading browser
        e.preventDefault();
        if (!onSubmit) return;
        const formValues = {
            chat: value,
        }
        onSubmit(formValues)
        // Reset forrm
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                required
                type="text"
                value={value}
                onChange={handleChangeValue}
                className="input-chat"
            />
            <button className="btn-chat btn-primary" type="submit">Thêm</button>
        </form>
    );
}

export default ChatForm;
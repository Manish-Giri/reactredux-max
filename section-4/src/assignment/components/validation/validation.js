import React from "react";

export default (props) => {
    const textLen = props.text.length;
    const message = <p> {textLen < 5 ? 'Message too short' :
        textLen > 10 ? 'Message too long' : 'Message accepted'}</p>;
    return (
        <div className={textLen >= 5 && textLen <= 10 ?  'correct' : 'wrong'}>
            {message}
        </div>
    )
}

import React, {useState} from "react";


function toogleMessageFun(toogleMessage, setToggleMessage) {
    if (toogleMessage === "true") {
        setToggleMessage("false")
    } else {
        setToggleMessage("true")
    }
}

function Message({message}) {
    const [toogleMessage, setToggleMessage] = useState("true")

    return (
        <>
            {toogleMessage === "true" && (<>message is : {message}</>)}
            <button onClick={() => {
                toogleMessageFun(toogleMessage, setToggleMessage)
            }}>Toggle message visibility
            </button>
        </>
    )
}


export default Message;
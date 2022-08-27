import React, {useState} from "react";


function changeMessageVisibility (toogleMessage, setToggleMessage) {
    if (toogleMessage === "true"){
            setToggleMessage("false")
    }
        console.log(toogleMessage)

}

function Message ({message}) {
    const [toogleMessage, setToggleMessage] = useState("true")

    return (
        <>
            {toogleMessage === "true" && (<>message is : {message}</>)}
        <button onClick={() =>{setToggleMessage("false")}}>Toggle message visibility</button>        </>
    )
}

export default Message;
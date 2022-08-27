import React from "react";


function Message({message, toogleMessageFun, toogleMessage}) {

    return (
        <>
            {toogleMessage === "true" && (<>message is : {message}</>)}
            <button onClick={() => {
                toogleMessageFun(toogleMessage)
            }}>Toggle message visibility
            </button>
        </>
    )
}


export default Message;
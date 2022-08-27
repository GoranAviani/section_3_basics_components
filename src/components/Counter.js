import React from "react";

function Counter({counterNumber, resetCounter}) {

    return (
        <>
            Counter: {counterNumber}
            <button onClick={() => {
                resetCounter()
            }}>Reset counter
            </button>
        </>
    )
}

export default Counter;
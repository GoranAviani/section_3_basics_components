import Message from "./components/message";
import Counter from "./components/Counter";
import {useState} from "react";

function App() {
    const [toogleMessage, setToggleMessage] = useState("true")
    const [counterNumber, setCounterNUmber] = useState(0)

    const toogleMessageFun = (toogleMessage) => {
        setCounterNUmber(counterNumber + 1)
        if (toogleMessage === "true") {
            setToggleMessage("false")
        } else {
            setToggleMessage("true")
        }
    }

    return (
        <div>
            app
            <Message message={"test message"} toogleMessageFun={toogleMessageFun} toogleMessage={toogleMessage}/>
            <br/>
            <Counter counterNumber={counterNumber}/>
        </div>
    );
}


export default App;

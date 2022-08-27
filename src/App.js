import Message from "./components/message";

function App() {

    Cookies.set("displayMessage", "true")
  return (
    <div>
     app
        <Message message = "test message"/>
    </div>
  );
}

export default App;

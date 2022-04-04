import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed.jsx";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height='100vh'
        userName='henry'
        userSecret='123456'
        projectID='0452794c-a863-4e55-a613-dc1355e34a25'
        renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps}/>}
        onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
    />
    </div>
  );
}

export default App;

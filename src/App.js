import { ChatEngine } from "react-chat-engine";
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine
        height='100vh'
        userName='henry'
        userSecret='123456'
        projectID='0452794c-a863-4e55-a613-dc1355e34a25'
		/>
    </div>
  );
}

export default App;

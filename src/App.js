import FriendsState from "./contexts/FriendsState";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import './App.css';

function App() {
  return (
    <div id="app">
      <FriendsState>
        <Friends />
        <AddFriend />
      </FriendsState>
    </div>
  );
}

export default App;

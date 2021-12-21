import FriendsState from "./contexts/FriendsState";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import UpdateFriend from './components/UpdateFriend';
import './App.css';

function App() {
  return (
    <div id="app">
      <FriendsState>
        <Friends />
        <AddFriend />
        <UpdateFriend />
      </FriendsState>
    </div>
  );
}

export default App;

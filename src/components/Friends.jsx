import { useContext } from "react";
import friendsContext from '../contexts/friendsContext';
import Friend from "./Friend";

function Friends() {
    const {friends, dispatch} = useContext(friendsContext);
    const { friendsList } = friends;
    return(
        <div id='friends'>
            {friendsList.map(({name, age}) => (
                <Friend name={name} age={age} />
            ))}
        </div>
    )
}

export default Friends;

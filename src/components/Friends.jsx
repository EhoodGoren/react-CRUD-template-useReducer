import { useContext } from "react";
import { nanoid } from'nanoid';
import friendsContext from '../contexts/friendsContext';
import Friend from "./Friend";
import './Friends.css';

function Friends() {
    const { friends } = useContext(friendsContext);
    const { friendsList } = friends;

    return(
        <div id='friends'>
            {friendsList.map(({name, age, id}) => (
                <Friend
                    key={nanoid()}
                    id={id}
                    name={name}
                    age={age}
                />
            ))}
        </div>
    )
}

export default Friends;

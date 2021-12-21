import { useReducer } from "react";
import friendsContext from "./friendsContext";
import friendsReducer from '../reducers/friendsReducer';

const initialState = {
    friends: []
}
function FriendsState(props) {
    const [friends, dispatch] = useReducer(friendsReducer, initialState);
    return (
        <friendsContext.Provider value={{ friends, dispatch }} >
            {props.children}
        </friendsContext.Provider>
    )
}

export default FriendsState;

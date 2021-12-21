import { useReducer } from "react";
import friendsContext from "./friendsContext";
import friendsReducer from '../reducers/friendsReducer';
import db from '../db/drillDb';

const initialState = {
    friends: [...db]
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

import { useContext } from "react";
import friendsContext from '../contexts/friendsContext';

function Friend({ id, name, age }) {
    const { dispatch } = useContext(friendsContext);

    const removeFriend = () => {
        dispatch({
            type: 'REMOVE_FRIEND',
            id
        })
    }
    const selectFriendToUpdate = () => {
        dispatch({
            type: 'SELECT_UPDATE',
            id,
            name,
            age
        })
    }
    return(
        <div className='friend' onClick={selectFriendToUpdate}>
            <span>{name}, {age}</span>
            <button className='remove-friend' onClick={removeFriend}>REMOVE</button>
        </div>
    )
}

export default Friend;

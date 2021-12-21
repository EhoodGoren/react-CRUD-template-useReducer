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
    return(
        <div className='friend'>
            <span>{name}, {age}</span>
            <button className='remove-friend' onClick={removeFriend}>REMOVE</button>
        </div>
    )
}

export default Friend;

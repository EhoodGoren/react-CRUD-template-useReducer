import { useContext, useRef } from 'react';
import friendsContext from '../contexts/friendsContext';
import './AddFriend.css';

function AddFriend() {
    const {dispatch} = useContext(friendsContext);
    const nameInput = useRef()
    const ageInput = useRef()

    const addFriend = () => {
        dispatch({
            type:'ADD_FRIEND',
            name: nameInput.current.value,
            age: ageInput.current.value
        });
    }
    return(
        <div id='add-friend'>
            <h3>ADD FRIEND</h3>
            <input ref={nameInput} className='add-friend-input' placeholder="Name" /><br />
            <input ref={ageInput} className='add-friend-input' placeholder="Age" /><br />
            <button onClick={() => addFriend()}>ADD</button>
        </div>
    )
}

export default AddFriend;

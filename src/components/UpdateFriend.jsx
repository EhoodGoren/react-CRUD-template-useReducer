import { useContext, useEffect, useRef, useState } from 'react';
import friendsContext from '../contexts/friendsContext';
import './UpdateFriend.css';

function UpdateFriend() {
    const {friends: {friendToUpdate} ,dispatch} = useContext(friendsContext);
    const nameInput = useRef()
    const ageInput = useRef()
    const [selectedFriend, setSelectedFriend] = useState('')

    useEffect(() => {
        if(!friendToUpdate) {
            setSelectedFriend('');
            return;
        }
        const { name, age } = friendToUpdate;
        setSelectedFriend(`${name}, ${age}`)
    }, [friendToUpdate])

    const updateFriend = () => {
        if(!friendToUpdate) return;
        dispatch({
            type:'UPDATE_FRIEND',
            name: nameInput.current.value,
            age: ageInput.current.value,
            id: friendToUpdate.id
        });
        nameInput.current.value = '';
        ageInput.current.value = '';
    }
    return(
        <div id='update-friend'>
            <h3>UPDATE FRIEND</h3>
            <div id='friend-to-update'>{selectedFriend ||'Click a friend to update'}</div>
            <input ref={nameInput} className='update-friend-input' placeholder="Name" /><br />
            <input ref={ageInput} className='update-friend-input' placeholder="Age" /><br />
            <button onClick={() => updateFriend()}>UPDATE</button>
        </div>
    )
}

export default UpdateFriend;

import './AddFriend.css';

function AddFriend() {
    return(
        <div id='add-friend'>
            <h3>ADD FRIEND</h3>
            <input className='add-friend-input' placeholder="Name" /><br />
            <input className='add-friend-input' placeholder="Age" /><br />
            <button>ADD</button>
        </div>
    )
}

export default AddFriend;

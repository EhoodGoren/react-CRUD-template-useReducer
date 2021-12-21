import db from '../db/drillDb';
import { nanoid } from 'nanoid';

export default function friendsReducer(state, action) {
    switch (action.type) {
        case 'INITIAL_STATE': {
            return {
                friends: [...db]
            }
        }
        case 'ADD_FRIEND': {
            const { name, age } = action
            return {
                friends: [
                    ...state.friends, {
                    name,
                    age,
                    id: nanoid()
                }]
            }
        }
        case 'REMOVE_FRIEND': {
            const updatedFriends = state.friends.filter(friend => friend.id !== action.id)
            return {
                friends: [...updatedFriends]
            }
        }
        case 'UPDATE_FRIEND': {
            const { name, age, id } = action;
            const updatedFriends = state.friends.map(
                ({name: friendName, age: friendAge, id: friendId}) => {
                    if(friendId === id) {
                        return {
                            name: name || friendName,
                            age: age || friendAge,
                            id: friendId
                        }
                    } else {
                        return {friendName, friendAge, friendId};
                    }
            })
            return {
                friends: [...updatedFriends]
            }
        }
        default:
            return state;
    }
}

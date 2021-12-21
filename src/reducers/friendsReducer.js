import db from '../db/drillDb';
import { nanoid } from 'nanoid';

export default function friendsReducer(state, action) {
    switch (action.type) {
        case 'INITIAL_STATE': {
            return {
                friendsList: [...db]
            }
        }
        case 'ADD_FRIEND': {
            const { name, age } = action
            return {
                friendsList: [
                    ...state.friendsList, {
                    name,
                    age,
                    id: nanoid()
                }]
            }
        }
        case 'REMOVE_FRIEND': {
            const updatedFriends = state.friendsList.filter(friend => friend.id !== action.id)
            return {
                friendsList: [...updatedFriends]
            }
        }
        case 'UPDATE_FRIEND': {
            const { name, age, id } = action;
            const updatedFriends = state.friends.map(friend => {
                if(friend.id === id) {
                    return {
                        ...friend,
                        name: name || friend.name,
                        age: age || friend.age
                    }
                } else {
                    return friend
                }
            })
            return {
                friendsList: [...updatedFriends]
            }
        }
        default:
            return state;
    }
}

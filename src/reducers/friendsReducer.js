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
                friends: [...updatedFriends]
            }
        }
        default:
            return state;
    }
}

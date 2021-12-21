import db from '../db/drillDb';
import { nanoid } from 'nanoid';

export default function friendsReducer(state, action) {
    switch (action.type) {
        case 'INITIAL_STATE': {
            return {
                friendsList: [...db],
                friendToUpdate: ''
            }
        }
        case 'ADD_FRIEND': {
            const { name, age } = action
            return {
                ...state,
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
                ...state,
                friendsList: [...updatedFriends]
            }
        }
        case 'UPDATE_FRIEND': {
            const { name, age, id } = action;
            const updatedFriends = state.friendsList.map(friend => {
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
                ...state,
                friendsList: [...updatedFriends],
                friendToUpdate: ''
            }
        }
        case 'SELECT_UPDATE': {
            const {name, age, id} = action;
            return {
                ...state,
                friendToUpdate: { id, name, age }
            }
        }
        default:
            return state;
    }
}

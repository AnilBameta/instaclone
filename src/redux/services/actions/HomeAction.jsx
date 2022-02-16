import {NEW_POST} from '../constants';

export const newPost = (data) => {
    return {
        type: NEW_POST,
        data: data
    }
}
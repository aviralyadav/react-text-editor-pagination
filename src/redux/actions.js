export const removePhoto = index => {
    return {
        type: 'REMOVE_PHOTO',
        index
    }
}

export const addPhoto = post => {
    return {
        type: 'ADD_PHOTO',
        post
    }
}

export const addComment = (comment, postId) => {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}
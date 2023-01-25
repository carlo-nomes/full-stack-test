export function validateTitleProperty(title: unknown) {
    if (!title || typeof title !== 'string') {
        throw new Error('Incorrect request body');
    }
}

export function validateCompletedProperty(completed: unknown) {
    if (!completed || typeof completed !== 'boolean') {
        throw new Error('Incorrect request body');
    }
}

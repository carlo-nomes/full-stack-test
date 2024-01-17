import axios, { AxiosError } from 'axios';

export function getUserFriendlyErrorMessage(error: unknown) {
    if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response) {
            const { data } = response;
            return data.message;
        }
    }
    return 'An error occurred, please try again later.';
}

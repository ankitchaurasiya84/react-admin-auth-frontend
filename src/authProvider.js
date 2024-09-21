import { fetchUtils } from 'react-admin';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

const apiUrl = 'http://localhost:5008/auth';

export const authProvider = {
    login: ({ username, password }) => {
        const request = new Request(`${apiUrl}/login`, {
            method: 'POST',
            body: JSON.stringify({ email: username, password: password}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });

        return fetchUtils.fetchJson(request)
            .then(({ json }) => {
                localStorage.setItem('auth', JSON.stringify(json));
            })
            .catch(() => {
                throw new Error('Invalid credentials');
            });
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('auth')
            ? Promise.resolve()
            : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
};

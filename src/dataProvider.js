import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const httpClient = fetchUtils.fetchJson;
const apiUrl = 'http://localhost:5008';

export const dataProvider = simpleRestProvider(apiUrl, httpClient);

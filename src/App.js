import React from 'react';
import { Admin, Resource } from 'react-admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { authProvider } from './authProvider';
import { dataProvider } from './dataProvider';
import UserList from './UserList';
import Signup from './Signup';  // Import the Signup component

console.log(dataProvider);
const App = () => (
    
    <BrowserRouter>
        <Routes>
            <Route path="*" element={
                <Admin authProvider={authProvider} dataProvider={dataProvider}>
                    <Resource name="userssdsd" list={UserList} />
                </Admin>
            } />
        </Routes>
    </BrowserRouter>
);

export default App;


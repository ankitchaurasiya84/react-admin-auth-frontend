import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const UserList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="email" />
        </Datagrid>
    </List>
);

export default UserList;

import React from 'react';
import { registrations } from '../../../mock-data/registration-open';
import { RegisterItem } from './register-item';

const Table = () => {
    const items = registrations; // Replace with your dynamic data

    return (
        <div style={{ overflowY: 'scroll', maxHeight: '400px' }}>
            {items.map((item, index) => (
                <div key={index} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
                    <RegisterItem details={item} />
                </div>
            ))}
        </div>
    );
};

export default Table;

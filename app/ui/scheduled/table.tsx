import React from 'react';
import { tournaments } from '../../../mock-data/registration-closed';
import { ScheduledItem } from './scheduled-item';

const Table = () => {
    const items = tournaments; // Replace with your dynamic data

    return (
        <div style={{ overflowY: 'scroll', maxHeight: '400px' }}>
            {items.map((item, index) => (
                <div key={index} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
                    <ScheduledItem details={item} />
                </div>
            ))}
        </div>
    );
};

export default Table;

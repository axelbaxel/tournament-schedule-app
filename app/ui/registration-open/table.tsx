import React from 'react';
import { RegisterItem } from './register-item';
import { Tournament } from '@/app/lib/definitions';

const Table = ({ tournaments }: { tournaments: Tournament[] }) => {
    // const items = registrations; // Replace with your dynamic data

    return (
        <div style={{ overflowY: 'scroll', maxHeight: '400px' }}>
            {tournaments.map((item, index) => (
                <div key={index} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
                    <RegisterItem details={item} />
                </div>
            ))}
        </div>
    );
};

export default Table;

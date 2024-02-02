import React from 'react';
import { ScheduledItem } from './scheduled-item';
import { Tournament } from '@/app/lib/definitions';

const Table = ({ tournaments }: { tournaments: Tournament[] }) => {

    return (
        <div style={{ overflowY: 'scroll', maxHeight: '400px' }}>
            {tournaments.map((item, index) => (
                <div key={index} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
                    <ScheduledItem details={item} />
                </div>
            ))}
        </div>
    );
};

export default Table;

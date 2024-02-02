import React from 'react';
import './overview.css';
import Table from './table';
import { fetchScheduledTournaments } from '@/app/lib/data';

const ScheduleOverview: React.FC = async () => {
    const scheduledTournaments = await fetchScheduledTournaments()
    return (
        <div className="container">
            <Table tournaments={scheduledTournaments} />
        </div>
    );
};

export default ScheduleOverview;

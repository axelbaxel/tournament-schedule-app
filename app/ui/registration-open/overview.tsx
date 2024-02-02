import React from 'react';
import './overview.css';
import Table from './table';
import { fetchOpenTournaments } from '@/app/lib/data';

const RegistrationOverview: React.FC = async () => {
    const openTournaments = await fetchOpenTournaments();
    return (
        <div className="container">
            <Table tournaments={openTournaments} />
        </div>
    );
};

export default RegistrationOverview;

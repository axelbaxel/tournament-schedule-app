'use client';
import React, { useState } from 'react';
import './HeaderBar.css';

const HeaderBar = ({ title }: { title: string }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (<>
        <header>
            <h1 style={{ width: "28rem", fontSize: "2rem" }}>{title}</h1>
            <Burger handleSidebarToggle={handleSidebarToggle} />
        </header>
        <Sidebar isOpen={isSidebarOpen} closeAction={handleSidebarToggle} />
    </>
    );
};

interface SidebarProps {
    isOpen: boolean;
    closeAction: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeAction }) => {
    return (
        <div className={`sidebar flex flex-col gap-4 ${isOpen ? 'open' : ''}`}>
            <Burger handleSidebarToggle={closeAction} />
            <span>SIDEBAR CONTENT</span>
            <span>SIDEBAR CONTENT</span>
            <span>SIDEBAR CONTENT</span>
            <span>SIDEBAR CONTENT</span>
            <span>SIDEBAR CONTENT</span>
            <span>SIDEBAR CONTENT</span>
        </div>
    );
};

const Burger = ({ handleSidebarToggle }: { handleSidebarToggle: () => void }) => {
    return (
        <button onClick={handleSidebarToggle} className="flex flex-col justify-center items-center px-4 py-4">
            <span className={`white block transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm my-0.5`} >
            </span>
            <span className={`white block transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm my-0.5`} >
            </span>
            <span className={`white block transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm my-0.5`} >
            </span>
        </button>
    )
}


export default HeaderBar;

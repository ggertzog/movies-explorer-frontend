import React, { createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const currentPath = window.location.pathname;
        const lastPage = localStorage.getItem('lastVisitedPage');
        const isPageReload = performance.getEntriesByType("navigation")[0].type === "reload";

        if (isPageReload && currentPath !== lastPage) {
            navigate(lastPage);
            localStorage.removeItem('lastVisitedPage')
        } else {
            localStorage.setItem('lastVisitedPage', currentPath);
        }
    }, [navigate]);

    return (
        <PageContext.Provider value={{}}>
            {children}
        </PageContext.Provider>
    );
};
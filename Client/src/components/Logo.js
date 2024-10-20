import React, { useEffect } from 'react';

export function Logo() {
    useEffect(() => {
        const toggleButton = document.querySelector('.toggle-sidebar-btn');
        const body = document.querySelector('body');

        const handleToggle = () => {
            body.classList.toggle('toggle-sidebar');
        };

      
        if (toggleButton) {
            toggleButton.addEventListener('click', handleToggle);
        }

        return () => {
            if (toggleButton) {
                toggleButton.removeEventListener('click', handleToggle);
            }
        };
    }, []);

    return (
        <div className="d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
                <span className="d-none d-lg-block">JobHub</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>
    );
}

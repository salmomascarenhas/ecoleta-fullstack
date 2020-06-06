import React from 'react';

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <header>
            <p>{title}</p> 
        </header>
    );
}

export default Header;
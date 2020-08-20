import React from 'react';


export default class Sidebar extends React.Component {

    render() {
        return (
            <aside className="max-w-sm mx-auto flex p-6 bg-white shadow-xl z-50 w-1/2 sm:w-1/3 lg:w-1/3" style={{ height: '100vh', position: 'absolute' }}>
                <span role="img" aria-label="seedling">🌱</span> Our Environment
            </aside>
        )
    }

}
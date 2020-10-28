import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ProductPanel from "../ProductPanel/ProductPanel"

function Dashboard() {
    const [email, setEmail] = useState('');

    return (
            <Router>
                <div className="contaianer-fluid">
                    <Route path="/" component={ProductPanel} />
                </div>
            </Router>
    )
}

export default Dashboard;
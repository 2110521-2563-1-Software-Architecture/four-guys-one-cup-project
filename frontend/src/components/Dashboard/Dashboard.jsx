import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ProductPanel from "../ProductPanel/ProductPanel"

function Dashboard(props) {
    const [email, setEmail] = useState('');

    return (
            <Router>
                <div className="contaianer-fluid">
                    <Route path="/">
                        <ProductPanel jwt={props.jwt} />
                    </Route>
                </div>
            </Router>
    )
}

export default Dashboard;
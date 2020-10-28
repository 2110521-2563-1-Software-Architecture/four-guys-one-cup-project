import React, { useState } from 'react';
import LoginForm from '../Login/LoginForm';

function LoginModal() {


    return (
        <div className="container">
            {/* Button trigger modal */}
            <a className="nav-link" data-toggle="modal" data-target="#loginModal">
                                Login
            </a>
            {/* modal */}
            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
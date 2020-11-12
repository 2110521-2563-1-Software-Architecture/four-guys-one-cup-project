import React, { useState } from 'react';
import RegisterForm from '../Register/RegisterForm';

function RegisterModal() {


    return (
        <div className="container">
            {/* Button trigger modal */}
            <a className="nav-link" data-toggle="modal" data-target="#registerModal">
                                Register
            </a>
            {/* modal */}
            <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal
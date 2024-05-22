import React, { useState } from 'react';

export default function Login() {
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const handleEmailFocus = () => {
        setEmailFocused(true);
    };

    const handleEmailBlur = () => {
        setEmailFocused(false);
    };

    const handlePasswordFocus = () => {
        setPasswordFocused(true);
    };

    const handlePasswordBlur = () => {
        setPasswordFocused(false);
    };

    return (
        <div className='login-container'>
            <div className="card">
                <div className="card-content">
                    <h2 className='login-header'>Login</h2>
                    <form>
                        <div className={`input-group ${emailFocused ? 'focused' : ''}`}>
                            <input
                                type="text"
                                id="email"
                                placeholder=""
                                onFocus={handleEmailFocus}
                                onBlur={handleEmailBlur}
                            />
                            <label className='placeholder'>E-mail</label>
                        </div>
                        <div className={`input-group ${passwordFocused ? 'focused' : ''}`}>
                            <input
                                type="password"
                                id="password"
                                placeholder=""
                                onFocus={handlePasswordFocus}
                                onBlur={handlePasswordBlur}
                            />
                            <label className='placeholder1'>Password</label>
                        </div>
                        <div className="link">
                        <a href="#">Forgot your password?</a>
                    </div>
                        <button type="submit" className='btn-login'>LOGIN</button>
                    </form>
                </div>
                <div className='links'>
                <a href="#">Signup</a>
                </div>
            </div>
        </div>
    );
}

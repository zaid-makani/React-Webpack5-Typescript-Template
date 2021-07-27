import React from 'react';
import classes from './ProfileForm.module.css';

const ProfileForm = () => (
    <form className={classes.form}>
        <div className={classes.control}>
            <label htmlFor="new-password">New Password
                <input type="password" id="new-password" />
            </label>
        </div>
        <div className={classes.action}>
            <button>Change Password</button>
        </div>
    </form>
);

export default ProfileForm;

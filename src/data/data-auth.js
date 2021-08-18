
const auth = {
    authFormControls: [
        {
            inputType: 'email',
            id: 'email',
            labelText: 'Email',
        },
        {
            inputType: 'password',
            id: 'password',
            labelText: 'Password',
        }
    ],
    authSuccessMessage: 'You are now logged in! Now you can do so many things... actually, the only difference is that now you have Logout button :)',
    authError: 'Untill I do a proper modal this will have to do... so there was a problem, and this problem is: ',
    logoutMessage: 'Consider yourself logged out now:)'
};

export default auth;

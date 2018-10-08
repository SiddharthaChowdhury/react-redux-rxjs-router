export const TypeActionHome = {
    checkLogin : "AuthInfo > checkLogin",
    setLogin : "AuthInfo > setLogin",

    signupUser : "Home > signupUser",
};

export const actionCheckIsLoggedIn = () => ({
    type: TypeActionHome.checkLogin,
});

export const actionSetIsLoggedIn = (status) => ({
    type: TypeActionHome.setLogin,
    status
});
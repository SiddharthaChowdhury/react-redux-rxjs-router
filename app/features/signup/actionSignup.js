export const TypeActionHome = {
    checkLogin : "AuthInfo > checkLogin",
    signupUser : "Home > signupUser",
};

export const isLoggedIn = () => ({
    type: TypeActionHome.checkLogin,
    isLoggedIn: true
});
import { atom } from "recoil";

// CART STATE
export const CartState = atom({
    key: "CartState",
    default: [],
});

// LOGIN STATES
export const UsernameState = atom({
    key: "UsernameState",
    default: [],
});

export const PasswordState = atom({
    key: "PasswordState",
    default: [],
});

export const RoleState = atom({
    key: "RoleState",
    default: [],
})

 // REGISTER STATES
export const RegisterUser = atom({
    key: "RegisterUser",
    default: [],
})

export const RegisterPassword = atom({
    key: "RegisterPassword",
    default: [],
})

// ADMIN STATES
export const UsersState = atom({
    key: "UsersState",
    default:[],
})

export const ProductsState = atom({
    key: "ProductsState",
    default: [],
})


// SuccessState for succesfully login/register
export const SuccessState = atom({ 
    key: "SuccesState",
    default: false,
})

//Auth state
export const AuthProviderState = atom({ //For the auth provider
    key: "AuthProviderState",
    default: {},
})

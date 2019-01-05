import { AUTH_USER_SIGNIN, AUTH_USER_SIGNUP, AUTH_USER_SIGNOUT, AUTH_INIT_USER_DATA, AUTH_FETCHING_USER, AUTH_FETCHING_USER_SUCCESS, AUTH_FETCHING_USER_FAILURE } from '../actions/auth'

const initState = {
    user: {
        token: null,
        Id: null,
        GivenName: null,
        FamilyName: null,
        PicUrl: null,
        Email: null,
        PhoneNumber: null,
    },
    error: null,
    fetching_user: false,
    authRedirectPath: '/'
};

const updateState = (prevState, updatedObj) => { return { ...prevState, ...updatedObj }; };

const authSuccess = (state, action) => {
    const user = { ...state.user };
    return updateState(state, {
        user: {
            ...user,
            token: action.authToken,
            Id: action.userId,
            GivenName: action.authUserInfo.profile.given_name,
            FamilyName: action.authUserInfo.profile.family_name,
            PicUrl: action.authUserInfo.profile.picture,
            Email: action.authUserInfo.profile.email,
            PhoneNumber: action.authUser.phoneNumber || 'No Number Provided'
        }
    });
};

const logoutInit = (state) => {
    //console.log('[Red/Auth] Logout Initiated');
    return updateState(state, initState);
    // return updateObject(state, {
    //     token: null, 
    //     user: null, 
    //     userInfo: null});
};

const mapUserData = (state, action) => {
    //console.log("[Red/User] User Data Payload Is:", action.obj);
    return updateState(state, {
        userId: action.obj.uID,
        givenName: action.obj.gname,
        familyName: action.obj.fname,
        eMail: action.obj.email,
        dPic: action.obj.dp,
        mobNum: action.obj.mobile || 'No Number Provided'
    });
};

export default (state = initState, action) => {
    switch (action.type) {
        case AUTH_FETCHING_USER:
            return updateState(state, { fetching_user: true });
        case AUTH_FETCHING_USER_FAILURE:
            return updateState(state, { 
                fetching_user: false,
                error: action.error 
            });
        case AUTH_FETCHING_USER_SUCCESS:
            return authSuccess(state, action);
        case AUTH_USER_SIGNOUT:
            return logoutInit(state);
        case AUTH_INIT_USER_DATA:
            return mapUserData(state, action);
        default:
            return state;
    }
};
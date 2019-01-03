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
    loading: false,
    authRedirectPath: '/'
};

const updateObject = (baseObject, updater) => { return{...baseObject ,...updater}; };

const authSuccess = (state, action) => {
    //console.log('[Red/Auth] Authentication Successful');
    // //Extracting Values from User Object
    // const uPhNum = action.authUser.phoneNumber;
    // //Extracting Values from UserInfo Object
    // const uFName = action.authUserInfo.profile.given_name;
    // const uLName = action.authUserInfo.profile.family_name;
    // const uEmail = action.authUserInfo.profile.email;
    // const uPic = action.authUserInfo.profile.picture;

    

    //const oldState = {...state}

    // console.log('User Initial State', state);

    const user = {...state.user};
    // console.log('Initial User', user);

    // const newState = { user: {
    //     ...user,
    //     isAuth: true,
    //     token: action.authToken,
    //     Id: action.userId,
    //     GivenName: action.authUserInfo.profile.given_name,
    //     FamilyName: action.authUserInfo.profile.family_name,
    //     PicUrl: action.authUserInfo.profile.picture,
    //     Email: action.authUserInfo.profile.email,
    //     PhoneNumber: action.authUser.phoneNumber || 'No Number Given',
    // }};
    // console.log('New User', newUser);
    // console.log('User update State', uFName, uLName, uPhNum, uEmail, uPic);

    // localStorage.setItem('userGivenName', uFName);
    // localStorage.setItem('userFamilyName', uLName);
    // localStorage.setItem('userPhoneNumber', uPhNum);
    // localStorage.setItem('userEmail', uEmail);
    // localStorage.setItem('userPic', uPic);
    // return updateObject(state, newState);
    return updateObject(state, { user: {
        ...user,
        token: action.authToken,
        Id: action.userId,
        GivenName: action.authUserInfo.profile.given_name,
        FamilyName: action.authUserInfo.profile.family_name,
        PicUrl: action.authUserInfo.profile.picture,
        Email: action.authUserInfo.profile.email,
        PhoneNumber: action.authUser.phoneNumber || 'No Number Provided'
    }});
};

const logoutInit = (state) => {
    //console.log('[Red/Auth] Logout Initiated');
    return updateObject(state, initState);
    // return updateObject(state, {
    //     token: null, 
    //     user: null, 
    //     userInfo: null});
};

const mapUserData = (state, action) => {
    //console.log("[Red/User] User Data Payload Is:", action.obj);
    return updateObject(state, {
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
        case actionTypes.AUTH_LOGIN:
            return authSuccess(state, action);
        case actionTypes.AUTH_LOGOUT:
            return logoutInit(state);
        case actionTypes.AUTH_SET_USERDATA:
            return mapUserData(state, action);
        default:
            return state;
    }
};
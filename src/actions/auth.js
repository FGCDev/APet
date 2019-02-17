import { callReducer } from "../shared/commons";
import { authRef, getUserRef, gProvider } from '../services/fb';

export const AUTH_USER_SIGNIN_GOOGLE = "USER_SIGNIN";
export const AUTH_USER_SIGNUP_MOBILE = "USER_SIGNUP";
export const AUTH_USER_SIGNOUT = "USER_SIGNOUT";
export const AUTH_INIT_USER_DATA = "INITIALIZE_USER_DATA";
export const AUTH_FETCHING_USER = 'FETCHING_USER'
export const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'
export const AUTH_FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
export const AUTH_FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'

const fetchUserDetails = (uID, uGname, uFname, uEmail, uPic, uPhone) => {
	const userInfo = {
		uID,
		uGname,
		uFname,
		uEmail,
		uPic,
		uPhone
	};
	return dispatch => {/*(dispatch, getState)*/
		//console.log("[Act/User] [writeUserPersonalInfo] State is:", getState());
		const usersRef = getUserRef(uID);

		usersRef.set({
			gname: uGname,
			fname: uFname,
			email: uEmail,
			dp: uPic,
			mobile: uPhone
		});
		// usersRef.push({[uID]: {
		//     'Given_Name': uName
		// }});

		//console.log("[Act/Auth/writeUserPersonalInfo] uInfo is:", userInfo);
		dispatch(callReducer(AUTH_INIT_USER_DATA, userInfo));
	};
};

const logInSuccess = (token, user, uInfo, userID) => {
	return { /*Retunrs an action*/
		type: AUTH_USER_SIGNIN_GOOGLE,
		authToken: token,
		authUser: user,
		authUserInfo: uInfo,
		userId: userID
	};
};

const logInError = (error, message) => {
	return { /*Retunrs an action*/
		type: AUTH_FETCHING_USER_FAILURE,
		errorCode: error,
		errorMessage: message
	};
};

export const signInFB = (/*Takes Payload of the associated Action*/) => {
	return async dispatch => {
		await authRef.signInWithPopup(gProvider).then(result => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const token = result.credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			const userId = result.user.uid;
			const uInfo = result.additionalUserInfo;

			localStorage.setItem('token', token);
			localStorage.setItem('userID', userId);

			dispatch(logInSuccess(token, user, uInfo, userId));
			//console.log('[Act/Auth/FBSignin] user Info is: ', uInfo);
			//console.log('[Act/Auth/FBSignin] user Data is: ', user);

			dispatch(fetchUserDetails(userId,
				uInfo.profile.given_name,
				uInfo.profile.family_name,
				uInfo.profile.email,
				uInfo.profile.picture,
				user.phoneNumber)); //FIXME
			//console.log("[Act/Auth] Trying Multi Dispatcher");

			if (uInfo.isNewUser)
				console.log("[Todo] Initialize Data for New User");
			//dispatch(acts.addTodo(userId));

		}).catch(error => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			// const email = error.email;
			// // The firebase.auth.AuthCredential type that was used.
			// const credential = error.credential;

			dispatch(logInError(errorCode, errorMessage));
		});
	}
};

export const logout = () => {
	localStorage.removeItem('authState');
	localStorage.removeItem('token');
	localStorage.removeItem('userID');
	return {
		type: AUTH_USER_SIGNOUT
	};
};

// export function fetchAndHandleAuthedUser () {
//     return function (dispatch) {
//       dispatch(fetchingUser())
//       return auth().then(({user, credential}) => {
//         const userData = user.providerData[0]
//         const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
//         return dispatch(fetchingUserSuccess(user.uid, userInfo, Date.now()))
//       })
//       .then(({user}) => saveUser(user))
//       .then((user) => dispatch(authUser(user.uid)))
//       .catch((error) => dispatch(fetchingUserFailure(error)))
//     }
//   }
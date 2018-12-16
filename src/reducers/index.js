import { combineReducers } from 'redux';
import users from './users';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  users,
  loadingBar: loadingBarReducer
})

export const loadState = () => {
  try{
      const serializedState = localStorage.getItem('storeState');
      if(serializedState === null){
          return undefined;
      }
      return JSON.parse(serializedState);
  }
  catch(err){
      console.log('[Red/Index] -> [loadState()] Error Getting Serilaized State');
      return undefined;
  }
};

export const setState = (state) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('storeState', serializedState);
  } catch (err) {
      console.log('[Red/Index] -> [setState()] Error Setting Serilaized State');
  }
}
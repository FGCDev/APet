const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log('The init state:', store.getState());
	console.log('The action:', action);
	const returnValue = next(action);
	console.log('The new state:', store.getState());
	console.groupEnd();
	return returnValue;
}

export default logger;
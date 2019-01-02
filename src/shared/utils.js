//Shared Utility Functions

export const asyncTriggerReducer = (type, object) => {
	//console.log('[Act/User][asyncTrigger] Action Dispatched: ', type, ' with data: ', object);
	return {
		type: type,
		obj: object
	};
};
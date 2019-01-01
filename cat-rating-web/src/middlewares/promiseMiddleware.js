export default () =>
	({dispatch, getState}) => next => action => {
		if (typeof action === 'function') {
			return action(dispatch, getState)
		}

		const {promise, types, ...rest} = action // eslint-disable-line no-redeclare

		if (!promise) {
			return next(action)
		}

		const [REQUEST, SUCCESS, FAILURE] = types
		next({payload: {...rest}, type: REQUEST})

		const actionPromise = promise()
		actionPromise.then(
			result => next({payload: {result, ...rest}, type: SUCCESS}),
			err => next({payload: {err, ...rest}, type: FAILURE}),
		).catch(err => {
			next({payload: {err, ...rest}, type: FAILURE})
		})

		return actionPromise
	}

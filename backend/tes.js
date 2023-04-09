import send from '../src/utils/send.js'

const Tes = {
	path: '/tes',
	method: 'GET',
	main: (req, res, next) => {
		return send.OK(null, res, `Success testing di server`)
	}
}

export default Tes;
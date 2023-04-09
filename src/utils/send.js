const Continue = (data, res, msg = 'server has continue') => 
res.status(100).send({
	status: false,
	statusCode: 100,
	data,
	message: msg
})
const SwitchingProts = (data, res, msg = 'server switch protocols for optimal response delivery') => 
res.status(101).send({
	status: false,
	statusCode: 101,
	data,
	message: msg
})
const OK = (data, res, msg = 'server is working normally') => 
res.status(200).send({
	status: true,
	statusCode: 200,
	data,
	message: msg
})
const Created = (data, res, msg = 'the request was successfully sent and the server has created a new resource which will be sent back in the body of the response.') => 
res.status(201).send({
	status: true,
	statusCode: 201,
	data,
	message: msg
})
const Accepted = (data, res, msg = 'The server has approved the request, but has not started or completed the process.') => 
res.status(202).send({
	status: true,
	statusCode: 202,
	data,
	message: msg
})
const BadRequest = (data, res, msg = 'there was a problem on the client side that invalidated the request for processing') => 
res.status(400).send({
	status: false,
	statusCode: 400,
	data,
	message: msg
})
const Unauthorized = (data, res, msg = 'The server cannot process the request because it does not have valid authentication credentials') => 
res.status(401).send({
	status: false,
	statusCode: 401,
	data,
	message: msg
})

const Forbidden = (data, res, msg = 'Insufficient permissions') => 
res.status(403).send({
	status: false,
	statusCode: 403,
	data,
	message: msg
})

const NotFound = (data, res, msg = 'temporary or permanent loss of resources.') => 
res.status(404).send({
	status: false,
	statusCode: 404,
	data,
	message: msg
})

const MethodNotAllowed = (data, res, msg = 'The origin server supports the HTTP request method, but the target resource does not.') => 
res.status(405).send({
	status: false,
	statusCode: 405,
	data,
	message: msg
})

const RequestTimeout = (data, res, msg = 'The origin server will send this code if the user does not submit a request during the timeout, so the connection is considered idle') => 
res.status(408).send({
	status: false,
	statusCode: 408,
	data,
	message: msg
})

const ServerError = (data, res, msg = 'The server error') => 
res.status(500).send({
	status: false,
	statusCode: 500,
	data,
	message: msg
})

const Custom = (data, res, code, status, msg) => 
res.status(code).send({
	status,
	statusCode: code,
	data,
	message: msg
})

export default {
	Continue,
	SwitchingProts,
	OK,
	Created,
	Accepted,
	BadRequest,
	Unauthorized,
	Forbidden,
	NotFound,
	MethodNotAllowed,
	RequestTimeout,
	ServerError,
	Custom,
}
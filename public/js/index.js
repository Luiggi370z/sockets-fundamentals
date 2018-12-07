var socket = io()

socket.on('connect', function() {
	console.log('Connected to server')
})

socket.on('disconnect', function() {
	console.log('Connection with server lost!')
})

socket.emit(
	'sendMessage',
	{
		user: 'Luis',
		message: 'Hello world!'
	},
	function(res) {
		console.log('Server res:', res)
	}
)

socket.on('sendMessage', function(msg) {
	console.log('Server says:', msg)
})

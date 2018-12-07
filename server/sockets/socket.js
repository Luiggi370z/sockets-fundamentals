import { io } from '../server'

io.on('connect', client => {
	console.log('User connected')

	client.emit('sendMessage', {
		user: 'Admin',
		message: 'Welcome to the app'
	})

	client.on('disconnect', () => {
		console.log('User disconnected')
	})

	client.on('sendMessage', (msg, callback) => {
		console.log('Client says:', msg)

		client.broadcast.emit('sendMessage', msg)
		// if (msg.user) {
		// 	return callback({ msg: 'Ok' })
		// }
		// callback({ msg: 'Wrong!!' })
	})
})

io.on('connect', client => {
	console.log('User connected')
})

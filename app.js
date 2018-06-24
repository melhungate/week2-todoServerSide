const express = require('express');

const app = express();

const todos = ['heya'];

app.get('/todos', (req, res) => {
	res.status(200).json({
		success: true, 
		message: todos
	});
});

app.post('/todos/:todo', (req, res) => {
	const todo = req.params.todo;
	todos.push(todo);
	res.status(200).json({
		success: true, 
		todo: todo
	});
});

app.delete('/todos/:index', (req, res) => {
	const index = req.params.index;
	const removed = todos.splice(index, 1);
	if (removed.length === 0) {
		res.status(404).json({
			success: false, 
			message: 'No todo found at that index'
		})
	}
	res.status(200).json({
		success: true, 
		todo: removed
	});
});

app.listen(8080);
console.log('Server listening on port 8080');
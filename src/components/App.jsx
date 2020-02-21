import React, { useState, useEffect } from 'react';

import AddTaskForm from './AddTaskForm';
import ListElement from './ListElement';

import './App.css';

const App = () => {
	const [ tasks, setTasks ] = useState(JSON.parse(localStorage.getItem('simpleTodolist')) || []);

	useEffect(
		() => {
			localStorage.setItem('simpleTodolist', JSON.stringify(tasks));
		},
		[ tasks ]
	);

	const handleAddTask = (task) => {
		const tmpTasks = [ ...tasks ];
		tmpTasks.push(task);
		setTasks(tmpTasks);
	};

	const handleDelete = (taskId) => {
		const tmpTasks = [ ...tasks ];
		const index = tasks.findIndex((task) => task.id === taskId);

		tmpTasks.splice(index, 1);
		setTasks(tmpTasks);
	};

	const handleClear = () => {
		setTasks([]);
		localStorage.clear('simpleTodolist');
	};

	return (
		<div className="content">
			<h1>TODOLIST</h1>
			<div className="wrapper">
				<AddTaskForm onAddTask={handleAddTask} />
				{tasks.length !== 0 ? (
					<div>
						<ul>
							{tasks.map((task) => <ListElement key={task.id} details={task} onDelete={handleDelete} />)}
						</ul>
						<div className="clear-btn">
							<button onClick={handleClear}>Clear</button>
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default App;

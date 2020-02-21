import React, { useState } from 'react';

import Emoji from './Emoji';

import './AddTaskForm.css';

const AddTaskForm = (props) => {
	const [ newTask, setNewTask ] = useState('');

	const handleChange = (event) => setNewTask(event.currentTarget.value);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (newTask !== '') {
			const id = new Date().getTime();
			const name = newTask;

			props.onAddTask({ id, name });
			setNewTask('');
		}
	};

	return (
		<div className="addTaskForm">
			<form onSubmit={handleSubmit}>
				<input value={newTask} onChange={handleChange} type="text" placeholder="Add a task" autoFocus />
				<button>
					<Emoji symbol="✔️" label="checked" />
				</button>
			</form>
		</div>
	);
};

export default AddTaskForm;

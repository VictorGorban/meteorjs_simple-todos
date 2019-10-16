import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.helpers({
	tasks() {
		return Tasks.find({}, {sort: {createdAt: -1} });
	},
});


Template.body.events({
	'submit .new-task'(event) {
		// Prevent default browser form submit
		event.preventDefault();

		// Get value from form element
		const target = event.target;
		console.log(target);
		const text = target.text.value;
		if (Boolean(text)===false)
			return;

		// Insert a task into the collection
		Tasks.insert({
			text,
			createdAt: new Date(), // current time
		});

		// Clear form
		target.text.value = '';
	},
});
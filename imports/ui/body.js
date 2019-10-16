import {Template} from 'meteor/templating';

import './body.html';


		Template.body.helpers({
	tasks: [
		{text: 'This is task 1', time: new Date().toUTCString() },
		{text: 'This is task 2', time: new Date().toUTCString() },
		{text: 'This is task 3', time: new Date().toUTCString() },
	],
});
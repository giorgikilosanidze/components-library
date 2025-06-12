import './style.css';
import Form from './components/form';

new Form({
	dateInput: { label: 'Birth Date', classNames: [], order: 4 },
	textInput: { label: 'Email', classNames: [], order: 1 },
	submitBtn: { label: 'Submit', classNames: ['button', 'ss'], order: 7 },
	passwordInput: { label: 'Password', classNames: [], order: 2 },
	numberInput: { label: 'Number', classNames: [], order: 3 },
	textarea: { label: 'About You', classNames: [], order: 6 },
	select: { label: 'City', classNames: [], order: 5 },
});

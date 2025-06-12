import './css/form.css';

type ElementsConfig = {
	label: string;
	classNames: string[];
	order: number;
};

type FormConfig = {
	textInput?: ElementsConfig;
	numberInput?: ElementsConfig;
	passwordInput?: ElementsConfig;
	dateInput?: ElementsConfig;
	textarea?: ElementsConfig;
	select?: ElementsConfig;
	submitBtn?: ElementsConfig;
};

export default class Form {
	form = document.createElement('form');
	config: FormConfig;

	constructor(config: FormConfig) {
		this.config = config;
		this.formHandler();

		this.config = Object.fromEntries(
			Object.entries(config).sort(([, a], [, b]) => a.order - b.order)
		) as FormConfig;

		console.log(this.config);

		Object.keys(this.config).forEach((key) => {
			if (typeof (this as any)[key] === 'function') {
				(this as any)[key]();
			}
		});
	}

	formHandler() {
		const title = document.createElement('h1');
		const contentWrapper = document.createElement('div');

		title.textContent = 'Form';
		contentWrapper.id = 'content-wrapper';

		this.form.appendChild(title);
		this.form.appendChild(contentWrapper);
		document.body.appendChild(this.form);
	}

	textInput() {
		const wrapper = document.createElement('div');
		const textInput = document.createElement('input');
		const contentWrapper = this.form.querySelector('#content-wrapper')!;

		wrapper.classList.add('wrapper');

		textInput.type = 'text';
		textInput.id = 'text-input';

		if (this.config.textInput?.label) {
			const label = document.createElement('label');
			label.htmlFor = textInput.id;
			label.textContent = this.config.textInput.label + ':';
			wrapper.appendChild(label);
		}

		wrapper.appendChild(textInput);
		contentWrapper.appendChild(wrapper);
	}

	numberInput() {
		const wrapper = document.createElement('div');
		const numberInput = document.createElement('input');
		const contentWrapper = this.form.querySelector('#content-wrapper')!;

		wrapper.classList.add('wrapper');

		numberInput.type = 'number';
		numberInput.id = 'number-input';

		if (this.config.numberInput?.label) {
			const label = document.createElement('label');
			label.htmlFor = numberInput.id;
			label.textContent = this.config.numberInput.label + ':';
			wrapper.appendChild(label);
		}

		wrapper.appendChild(numberInput);
		contentWrapper.appendChild(wrapper);
	}

	passwordInput() {
		const wrapper = document.createElement('div');
		const passwordInput = document.createElement('input');
		const contentWrapper = this.form.querySelector('#content-wrapper')!;

		wrapper.classList.add('wrapper');

		passwordInput.type = 'password';
		passwordInput.id = 'password-input';

		if (this.config.passwordInput?.label) {
			const label = document.createElement('label');
			label.htmlFor = passwordInput.id;
			label.textContent = this.config.passwordInput.label + ':';
			wrapper.appendChild(label);
		}

		wrapper.appendChild(passwordInput);
		contentWrapper.appendChild(wrapper);
	}

	dateInput() {
		const wrapper = document.createElement('div');
		const dateInput = document.createElement('input');
		const contentWrapper = this.form.querySelector('#content-wrapper')!;

		wrapper.classList.add('wrapper');

		dateInput.type = 'date';
		dateInput.id = 'date-input';

		if (this.config.dateInput?.label) {
			const label = document.createElement('label');
			label.htmlFor = dateInput.id;
			label.textContent = this.config.dateInput.label + ':';
			wrapper.appendChild(label);
		}

		wrapper.appendChild(dateInput);
		contentWrapper.appendChild(wrapper);
	}

	textarea() {
		const wrapper = document.createElement('div');
		const textarea = document.createElement('textarea');
		const contentWrapper = this.form.querySelector('#content-wrapper')!;

		wrapper.classList.add('wrapper');
		textarea.id = 'textarea';

		if (this.config.textarea?.label) {
			const label = document.createElement('label');
			label.htmlFor = textarea.id;
			label.textContent = this.config.textarea.label + ':';
			wrapper.appendChild(label);
		}

		wrapper.appendChild(textarea);
		contentWrapper.appendChild(wrapper);
	}

	select() {
		const wrapper = document.createElement('div');
		const select = document.createElement('select');
		const contentWrapper = this.form.querySelector('#content-wrapper')!;

		wrapper.classList.add('wrapper');
		select.id = 'select';

		if (this.config.select?.label) {
			const label = document.createElement('label');
			label.htmlFor = select.id;
			label.textContent = this.config.select.label + ':';
			wrapper.appendChild(label);
		}

		wrapper.appendChild(select);
		contentWrapper.appendChild(wrapper);
	}

	submitBtn() {
		const submitBtn = document.createElement('button');
		const contentWrapper = this.form.querySelector('#content-wrapper')!;

		submitBtn.type = 'submit';

		submitBtn.textContent = this.config.submitBtn?.label
			? this.config.submitBtn.label
			: 'Submit';

		contentWrapper.appendChild(submitBtn);
	}
}

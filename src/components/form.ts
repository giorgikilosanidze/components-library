import './css/form.css';

type LabelAndClassNames = {
	label: string;
	classNames: string[];
	order: number;
};

type FormConfig = {
	textInput?: LabelAndClassNames;
	numberInput?: LabelAndClassNames;
	passwordInput?: LabelAndClassNames;
	dateInput?: LabelAndClassNames;
	textarea?: LabelAndClassNames;
	select?: LabelAndClassNames;
	submitBtn?: LabelAndClassNames;
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

	dateInput() {
		const wrapper = document.createElement('div');
		const dateInput = document.createElement('input');
		const label = document.createElement('label');
		const contentWrapper = this.form.querySelector('#content-wrapper')!;

		wrapper.classList.add('wrapper');

		dateInput.type = 'date';
		dateInput.name = 'date-input';

		label.htmlFor = dateInput.name;

		if (this.config.dateInput?.label) {
			label.textContent = this.config.dateInput.label + ':';
		}

		wrapper.appendChild(label);
		wrapper.appendChild(dateInput);
		contentWrapper.appendChild(wrapper);
	}

	textInput() {
		const wrapper = document.createElement('div');
		const textInput = document.createElement('input');
		const label = document.createElement('label');
		const contentWrapper = this.form.querySelector('#content-wrapper')!;

		wrapper.classList.add('wrapper');

		textInput.type = 'text';
		textInput.name = 'text-input';

		label.htmlFor = textInput.name;

		if (this.config.textInput?.label) {
			label.textContent = this.config.textInput.label + ':';
		}

		wrapper.appendChild(label);
		wrapper.appendChild(textInput);
		contentWrapper.appendChild(wrapper);
	}
}

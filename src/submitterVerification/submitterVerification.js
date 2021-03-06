import config from '../config';

export default function SubmitterVerification(
	staff_name,
	submissionEmail,
	formError
) {
	fetch(`${config.API_ENDPOINT}/staffcheck/${staff_name}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
		},
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error();
			}
			return res.json();
		})
		.then((res) =>
			EmailVerification(res, submissionEmail, this.props.formError)
		)
		.catch((error) => formError('reporter'));
}

function EmailVerification(staff, submissionEmail, formError) {
	if (submissionEmail !== staff.email) {
		formError('email');
	}
}

import config from '../config';

export default function submitterVerification(staff_name, submissionEmail, formError) {
    fetch(`${config.API_ENDPOINT}/staffcheck/${staff_name}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok){
          formError('reporter');
        }
        return res.json()
      })
      //.then(emailVerification(submissionEmail, this.props.formError))
  }

  function emailVerification(staff, submissionEmail, formError) {
    if(submissionEmail !== staff.email){
      formError('email');
    }
  }

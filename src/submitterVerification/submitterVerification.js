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
          throw new error()
        }
        return res.json()
      })
      .then(res => emailVerification(res, submissionEmail, this.props.formError))
      .catch(error => formError('reporter'))
  }

  function emailVerification(staff, submissionEmail, formError) {
    if(submissionEmail !== staff.email){
      formError('email');
    }
  }

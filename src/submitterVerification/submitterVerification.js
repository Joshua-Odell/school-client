import config from '../config';

export default function submitterVerification(staff_name, submissionEmail) {
  console.log(staff_name, submissionEmail)
    fetch(`${config.API_ENDPOINT}/staffcheck/${staff_name}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok){
          alert('Staff Name Not recognized')
        }
        return res.json()
      })
      .then(emailVerification(submissionEmail))
  }

  function emailVerification(staff, submissionEmail) {
    if(submissionEmail !== staff.email){
      alert('This email does not match the one on record');
    }
  }

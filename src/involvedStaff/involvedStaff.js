import config from '../config';

export default function involvedStaff(staff_name, formError, addInvolvedPerson) {
  document.getElementById('involvedPeopleList').removeAttribute('hidden');
  fetch(`${config.API_ENDPOINT}/staffcheck/${staff_name}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(res => {
      if (!res.status === 200){          
        throw new Error()
      }
        return res.json()      
    })
    .then(() => { addInvolvedPerson() })
    .catch(error => formError('involvedPeople'));
}
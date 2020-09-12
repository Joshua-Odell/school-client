import config from '../config';

export default  function studentCheck(student_marss, student_Last_Name, formError){
    fetch(`${config.API_ENDPOINT}/studentcheck/${student_marss}/${student_Last_Name}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok){
          formError('marssNumber');
          formError('studentLastName');
        }
        return res.json()    
      })
      
  }

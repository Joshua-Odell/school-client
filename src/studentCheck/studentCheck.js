import config from '../config';

export default  function studentCheck(student_marss, student_Last_Name){
    fetch(`${config.API_ENDPOINT}/studentcheck/${student_marss}/${student_Last_Name}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok){
          alert('Student MARSS and/or Last Name Invalid') // This is needs to be a regular message displayed that interupts submission
        }
        return res.json()    
      })
      
  }

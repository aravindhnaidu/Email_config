


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzlFQHa_i44-lnl2hZJv_1MYQsNY5IK8UIgNav6k66VetHO_9cs_BnJuSrGPLaPKVio/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

function switchWrap(event){

  event.preventDefault()
  // alert('welcome')
  const emailInput = document.getElementById('email')
  const email = emailInput.value.trim().toLowerCase()

  if (email.includes('@company.com') ) {
    const formWrap = document.getElementById('form__plus__image-wrap')
    formWrap.style.display = 'none'
    const confirmWrap = document.getElementById('confirmation__div')
    confirmWrap.style.display = 'block'

    const companyEmail = document.getElementById('company-email')
    companyEmail.innerText = email
     
  }else{
    const labelError = document.getElementById('label')

    // a <span> element to hold the new text
    // add some styles to the spanElement so that it won't affect the existing label element
    const spanElement = document.createElement('span')
    spanElement.style.marginLeft = '8rem'
    spanElement.style.color = 'red'
    spanElement.style.fontSize = 'small'

    // a textnode to hold the additional error text
    const newText = document.createTextNode('valid email required')
    // appending to the spanElement
    spanElement.appendChild(newText)
    // appending the span to the labelError, existing label text
    labelError.appendChild(spanElement)

   

}

  
}


function submitForm(){
  const form = document.getElementById('formPage')
  form.submit()
}

  

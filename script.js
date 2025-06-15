function getFormvalue(event) {
  event.preventDefault(); // prevent form from submitting normally

  const form = event.target;              // the form element
  const firstName = form.fname.value.trim();  // get and trim first name
  const lastName = form.lname.value.trim();   // get and trim last name

  alert(firstName + " " + lastName);     // show full name in alert
}

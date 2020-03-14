function submitForm() {
  // Get the first form with the name
  // Usually the form name is not repeated
  // but duplicate names are possible in HTML
  // Therefore to work around the issue, enforce the correct index
  var frm = document.getElementsByTagName("FORM");
  
  frm.submit(); // Submit the form
  frm.reset(); // Reset all form data
 return false;
 
  
}

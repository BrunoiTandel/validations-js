// The #contact-email-id id is for the input field where the user enters their email id.
$('#contact-email-id').on('keyup blur', function() {
	check_contact_email_id();
});

// The callback function from where the validation function will be called to validate the input entered by the user.
function check_contact_email_id() {
	var variable_array = {};
	variable_array['input_id'] = '#contact-email-id';
	variable_array['error_msg_div_id'] = '#contact-email-id-error-msg-div';
	variable_array['empty_input_error_msg'] = 'Please enter your email id.';
	variable_array['not_an_email_input_error_msg'] = 'Please enter a valid email id.';
	return mandatory_email_id(variable_array);
}
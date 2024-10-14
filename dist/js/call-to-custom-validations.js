var only_alphabets_max_length = 15,
    only_number_max_length = 10,
    input_with_max_length = 20,
    input_with_min_length = 5;

// The #mandatory-only-alphabets-with-max-length id is for the input field where the user enters only alphabets for first / last name or any other input that requires only alphabets.
$('#mandatory-only-alphabets-with-max-length').on('keyup blur', function() {
	check_mandatory_only_alphabets_with_max_length();
});

// The #non-mandatory-only-alphabets-with-max-length id is for the input field where the user enters only alphabets for first / last name or any other input that requires only alphabets.
$('#non-mandatory-only-alphabets-with-max-length').on('keyup blur', function() {
	check_non_mandatory_only_alphabets_with_max_length();
});

// The #mandatory-email-id id is for the input field where the user enters their email id.
$('#mandatory-email-id').on('keyup blur', function() {
	check_mandatory_email_id();
});

// The #non-mandatory-email-id id is for the input field where the user enters their email id.
$('#non-mandatory-email-id').on('keyup blur', function() {
	check_non_mandatory_email_id();
});

// The #mandatory-only-number id is for the input field where the user enters their Phone number or pincode/zipcode.
$('#mandatory-only-number').on('keyup blur', function() {
	check_mandatory_only_number();
});

// The #non-mandatory-only-number id is for the input field where the user enters their Phone number or pincode/zipcode.
$('#non-mandatory-only-number').on('keyup blur', function() {
	check_non_mandatory_only_number();
});

// The #mandatory-only-number id is for the input field where the user enters any input.
$('#mandatory-any-input').on('keyup blur', function() {
	check_mandatory_any_input();
});

// The #mandatory-any-input-with-max-length-validation id is for the input field where the user enters any input with max length validation.
$('#mandatory-any-input-with-max-length-validation').on('keyup blur', function() {
	check_mandatory_any_input_with_max_length_validation();
});

// The #non-mandatory-any-input-with-max-length-validation id is for the input field where the user enters any input with max length validation and non mandatory input.
$('#non-mandatory-any-input-with-max-length-validation').on('keyup blur', function() {
	check_non_mandatory_any_input_with_max_length_validation();
});

// The #mandatory-any-input-with-min-length-validation id is for the input field where the user enters any input with min length validation and mandatory input.
$('#mandatory-any-input-with-min-length-validation').on('keyup blur', function() {
	check_mandatory_any_input_with_min_length_validation();
});

// The #mandatory-any-input-with-min-length-validation id is for the input field where the user enters any input with min length validation and mandatory input.
$('#non-mandatory-any-input-with-min-length-validation').on('keyup blur', function() {
	check_non_mandatory_any_input_with_min_length_validation();
});

// The #mandatory-any-input-with-min-and-max-length-validation id is for the input field where the user enters any input with min and max length validation and mandatory input.
$('#mandatory-any-input-with-min-and-max-length-validation').on('keyup blur', function() {
	check_mandatory_any_input_with_min_and_max_length_validation();
});

// The #non-mandatory-any-input-with-min-and-max-length-validation id is for the input field where the user enters any input with min and max length validation and non mandatory input.
$('#non-mandatory-any-input-with-min-and-max-length-validation').on('keyup blur', function() {
	check_non_mandatory_any_input_with_min_and_max_length_validation();
});

// The #mandatory-url id is for the input field where the user enters mandatory URL.
$('#mandatory-url').on('keyup blur', function() {
	check_mandatory_url();
});

// The #non-mandatory-url id is for the input field where the user enters non mandatory URL.
$('#non-mandatory-url').on('keyup blur', function() {
	check_non_mandatory_url();
});

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is mandatory
function check_mandatory_only_alphabets_with_max_length() {
	var variable_array = {};
	variable_array['input_id'] = '#mandatory-only-alphabets-with-max-length';
	variable_array['error_msg_div_id'] = '#mandatory-only-alphabets-with-max-length-error-msg-div';
	variable_array['empty_input_error_msg'] = 'Please enter your only alphabets';
	variable_array['not_an_alphabet_input_error_msg'] = 'Input should be only alphabets';
	variable_array['exceeding_max_length_input_error_msg'] = 'Input should be of max '+only_alphabets_max_length+' characters';
	variable_array['max_length'] = only_alphabets_max_length;
	return mandatory_only_alphabets_with_max_length_limitation(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is Non mandatory
function check_non_mandatory_only_alphabets_with_max_length() {
	var variable_array = {};
	variable_array['input_id'] = '#non-mandatory-only-alphabets-with-max-length';
	variable_array['error_msg_div_id'] = '#non-mandatory-only-alphabets-with-max-length-error-msg-div';
	variable_array['not_an_alphabet_input_error_msg'] = 'Input should be only alphabets';
	variable_array['exceeding_max_length_input_error_msg'] = 'Input should be of max '+only_alphabets_max_length+' characters';
	variable_array['max_length'] = only_alphabets_max_length;
	return non_mandatory_only_alphabets_with_max_length_limitation(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is mandatory
function check_mandatory_email_id() {
	var variable_array = {};
	variable_array['input_id'] = '#mandatory-email-id';
	variable_array['error_msg_div_id'] = '#mandatory-email-id-error-msg-div';
	variable_array['empty_input_error_msg'] = 'Please enter your email id.';
	variable_array['not_an_email_input_error_msg'] = 'Please enter a valid email id.';
	return mandatory_email_id(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is Non mandatory
function check_non_mandatory_email_id() {
	var variable_array = {};
	variable_array['input_id'] = '#non-mandatory-email-id';
	variable_array['error_msg_div_id'] = '#non-mandatory-email-id-error-msg-div';
	variable_array['not_an_email_input_error_msg'] = 'Please enter a valid email id.';
	return non_mandatory_email_id(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is mandatory
function check_mandatory_only_number() {
	var variable_array = {};
	variable_array['input_id'] = '#mandatory-only-number';
	variable_array['error_msg_div_id'] = '#mandatory-only-number-error-msg-div';
	variable_array['empty_input_error_msg'] = 'Please enter only number';
	variable_array['not_a_number_input_error_msg'] = 'Input should be only numbers.'
	variable_array['exceeding_max_length_input_error_msg'] = 'Number should be of '+only_number_max_length+' digits';
	variable_array['max_length'] = only_number_max_length;
	return mandatory_mobile_number_pin_code_with_max_length_limitation(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is Non mandatory
function check_non_mandatory_only_number() {
	var variable_array = {};
	variable_array['input_id'] = '#non-mandatory-only-number';
	variable_array['error_msg_div_id'] = '#non-mandatory-only-number-error-msg-div';
	variable_array['not_a_number_input_error_msg'] = 'Input should be only numbers.'
	variable_array['exceeding_max_length_input_error_msg'] = 'Number should be of '+only_number_max_length+' digits';
	variable_array['max_length'] = only_number_max_length;
	return non_mandatory_mobile_number_pin_code_with_max_length_limitation(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is mandatory
function check_mandatory_any_input() {
	var variable_array = {};
	variable_array['input_id'] = '#mandatory-any-input';
	variable_array['error_msg_div_id'] = '#mandatory-any-input-error-msg-div';
	variable_array['empty_input_error_msg'] = 'Please enter the your description';
	return mandatory_any_input_with_no_limitation(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is mandatory and with max input limit
function check_mandatory_any_input_with_max_length_validation() {
	var variable_array = {};
	variable_array['input_id'] = '#mandatory-any-input-with-max-length-validation';
	variable_array['error_msg_div_id'] = '#mandatory-any-input-with-max-length-validation-error-msg-div';
	variable_array['empty_input_error_msg'] = 'Please enter the your description';
    variable_array['exceeding_max_length_error_msg'] = 'Input should be of max '+input_with_max_length+' characters';
    variable_array['max_length'] = input_with_max_length;
	return mandatory_any_input_with_max_length_validation(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is mandatory and with max input limit
function check_non_mandatory_any_input_with_max_length_validation() {
	var variable_array = {};
	variable_array['input_id'] = '#non-mandatory-any-input-with-max-length-validation';
	variable_array['error_msg_div_id'] = '#non-mandatory-any-input-with-max-length-validation-error-msg-div';
    variable_array['exceeding_max_length_error_msg'] = 'Input should be of max '+input_with_max_length+' characters';
    variable_array['max_length'] = input_with_max_length;
	return non_mandatory_any_input_with_max_length_validation(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is mandatory and with max input limit
function check_mandatory_any_input_with_min_length_validation() {
	var variable_array = {};
	variable_array['input_id'] = '#mandatory-any-input-with-min-length-validation';
	variable_array['error_msg_div_id'] = '#mandatory-any-input-with-min-length-validation-error-msg-div';
	variable_array['empty_input_error_msg'] = 'Please enter the your description';
    variable_array['min_length_error_msg'] = 'Input should be of min '+input_with_min_length+' characters';
    variable_array['min_length'] = input_with_min_length;
	return mandatory_any_input_with_min_length_validation(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is non mandatory and with max input limit
function check_non_mandatory_any_input_with_min_length_validation() {
	var variable_array = {};
	variable_array['input_id'] = '#non-mandatory-any-input-with-min-length-validation';
	variable_array['error_msg_div_id'] = '#non-mandatory-any-input-with-min-length-validation-error-msg-div';
    variable_array['min_length_error_msg'] = 'Input should be of min '+input_with_min_length+' characters';
    variable_array['min_length'] = input_with_min_length;
	return non_mandatory_any_input_with_min_length_validation(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is mandatory and with min and max input limit
function check_mandatory_any_input_with_min_and_max_length_validation() {
    var variable_array = {};
	variable_array['input_id'] = '#mandatory-any-input-with-min-and-max-length-validation';
	variable_array['error_msg_div_id'] = '#mandatory-any-input-with-min-and-max-length-validation-error-msg-div';
	variable_array['empty_input_error_msg'] = 'Please enter the your description';
    variable_array['min_length_error_msg'] = 'Input should be of min '+input_with_min_length+' characters and max of '+input_with_max_length+' characters';
    variable_array['exceeding_max_length_error_msg'] = 'Input should be of max '+input_with_max_length+' characters';
    variable_array['max_length'] = input_with_max_length;
    variable_array['min_length'] = input_with_min_length;
	return mandatory_any_input_with_min_and_max_length_validation(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is non mandatory and with min and max input limit
function check_non_mandatory_any_input_with_min_and_max_length_validation() {
    var variable_array = {};
	variable_array['input_id'] = '#non-mandatory-any-input-with-min-and-max-length-validation';
	variable_array['error_msg_div_id'] = '#non-mandatory-any-input-with-min-and-max-length-validation-error-msg-div';
    variable_array['min_length_error_msg'] = 'Input should be of min '+input_with_min_length+' characters and max of '+input_with_max_length+' characters';
    variable_array['exceeding_max_length_error_msg'] = 'Input should be of max '+input_with_max_length+' characters';
    variable_array['max_length'] = input_with_max_length;
    variable_array['min_length'] = input_with_min_length;
	return non_mandatory_any_input_with_min_and_max_length_validation(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is mandatory URL
function check_mandatory_url() {
    var variable_array = {};
	variable_array['input_id'] = '#mandatory-url';
    variable_array['error_msg_div_id'] = '#mandatory-url-error-msg-div';
	return mandatory_url(variable_array);
}

// The callback function from where the validation function will be called to validate the input entered by the user. The input field is Non mandatory URL
function check_non_mandatory_url() {
    var variable_array = {};
	variable_array['input_id'] = '#non-mandatory-url';
    variable_array['error_msg_div_id'] = '#non-mandatory-url-error-msg-div';
	return non_mandatory_url(variable_array);
}
var only_alphabets_max_length = 15,
    only_number_max_length = 10,
    input_with_max_length = 20,
    input_with_min_length = 5,
    max_img_size = 10000000,
    max_video_size = 200000000,
    image_video_description_max_length = 20,
    mandatory_single_image_upload_array = [],
    mandatory_single_file_upload_array = [],
    non_mandatory_single_image_upload_array = [],
    mandatory_multiple_file_upload_array = [],
    mandatory_multiple_image_upload_array = [],
    non_mandatory_multiple_image_upload_array = [],
    mandatory_multiple_image_upload_with_input_for_images_array = [];

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

// The #mandatory-select-option id is for the input field where the user selects mandatory select option.
$('#mandatory-select-option').on('change', function() {
	check_mandatory_select_option();
});

// The #mandatory-single-file-upload id is for the input field where the user selects mandatory single File Upload Button.
$("#mandatory-single-file-upload").on("change", handle_file_select_mandatory_single_file_upload);

// The #mandatory-single-image-upload id is for the input field where the user selects mandatory single image Upload Button.
$("#mandatory-single-image-upload").on("change", handle_file_select_mandatory_single_image_upload);

// The #non-mandatory-single-image-upload id is for the input field where the user selects non mandatory single image Upload Button.
$("#non-mandatory-single-image-upload").on("change", handle_file_select_non_mandatory_single_image_upload);

// The #mandatory-multiple-file-upload id is for the input field where the user selects mandatory multiple File Upload Button.
$("#mandatory-multiple-file-upload").on("change", handle_file_select_mandatory_multiple_file_upload);

// The #mandatory-multiple-image-upload id is for the input field where the user selects mandatory multiple image Upload Button.
$("#mandatory-multiple-image-upload").on("change", handle_file_select_mandatory_multiple_image_upload);

// The #non-mandatory-multiple-image-upload id is for the input field where the user selects non mandatory multiple image Upload Button.
$("#non-mandatory-multiple-image-upload").on("change", handle_file_select_non_mandatory_multiple_image_upload);

// The #mandatory-multiple-image-upload-with-input-for-images id is for the input field where the user selects mandatory multiple image Upload Button.
$("#mandatory-multiple-image-upload-with-input-for-images").on("change", handle_file_select_non_mandatory_multiple_image_upload_with_input_for_images);

$('#btn-submit-check-all-validations').on('click', function() {
    check_submit_btn();
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

// The callback function from where the validation function will be called to validate the option selected by the user. The select option is mandatory
function check_mandatory_select_option() {
	var variable_array = {};
	variable_array['input_id'] = '#mandatory-select-option';
	variable_array['error_msg_div_id'] = '#mandatory-select-option-error-msg-div';
	variable_array['empty_input_error_msg'] = 'Please select an option.';
	return mandatory_select(variable_array);
}

// The callback function from where the validation function will be called to validate the multiple files selected by the user. The choose file is mandatory
function handle_file_select_mandatory_single_file_upload(e) {
	mandatory_single_file_upload_array = [];
	var variable_array = {};
    $('#selected-mandatory-multiple-file-upload-images-image-div').html("");
	variable_array['e'] = e;
	variable_array['file_id'] = '#mandatory-multiple-file-upload';
	variable_array['storedFiles_array'] = mandatory_multiple_file_upload_array;
	variable_array['col_type'] = 'col-md-12';
	variable_array['file_ui_id'] = 'mandatory-multiple-file-upload';
	variable_array['max_img_size'] = max_img_size;
	variable_array['empty_input_error_msg'] = '';
	variable_array['show_image_id'] = '#mandatory-multiple-file-upload-images-image-div';
	variable_array['max_size_exceeding_error_msg'] = 'File should be of max 1 Mb.';
	variable_array['remove_image_function_name'] = 'remove_selected_mandatory_multiple_file_upload';
	return mandatory_multiple_file_upload(variable_array);
}

// The callback function from where the validation function will be called to validate the image file selected by the user. The choose file is mandatory
function handle_file_select_mandatory_single_image_upload(e) {
	mandatory_single_image_upload_array = [];
	var variable_array = {};
    $('#selected-mandatory-single-image-upload-images-image-div').html("");
	variable_array['e'] = e;
	variable_array['file_id'] = '#mandatory-single-image-upload';
	variable_array['storedFiles_array'] = mandatory_single_image_upload_array;
	variable_array['col_type'] = 'col-md-12';
	variable_array['file_ui_id'] = 'mandatory-single-image-upload';
	variable_array['max_img_size'] = max_img_size;
	variable_array['empty_input_error_msg'] = '';
	variable_array['show_image_id'] = '#mandatory-single-image-upload-images-image-div';
	variable_array['max_size_exceeding_error_msg'] = 'Image should be of max 1 Mb.';
	variable_array['remove_image_function_name'] = 'remove_selected_mandatory_single_image_upload';
	return mandatory_multiple_image_upload(variable_array);
}

// The callback function from where the validation function will be called to validate the image file selected by the user. The choose file is non mandatory
function handle_file_select_non_mandatory_single_image_upload(e) {
	non_mandatory_single_image_upload_array = [];
	var variable_array = {};
    $('#selected-non-mandatory-single-image-upload-images-image-div').html("");
	variable_array['e'] = e;
	variable_array['file_id'] = '#non-mandatory-single-image-upload';
	variable_array['storedFiles_array'] = non_mandatory_single_image_upload_array;
	variable_array['col_type'] = 'col-md-12';
	variable_array['file_ui_id'] = 'non-mandatory-single-image-upload';
	variable_array['max_img_size'] = max_img_size;
	variable_array['empty_input_error_msg'] = '';
	variable_array['show_image_id'] = '#non-mandatory-single-image-upload-images-image-div';
	variable_array['max_size_exceeding_error_msg'] = 'Image should be of max 1 Mb.';
	variable_array['remove_image_function_name'] = 'remove_selected_non_mandatory_single_image_upload';
	return non_mandatory_multiple_image_upload(variable_array);
}

// The callback function from where the validation function will be called to validate the file selected by the user. The choose file is mandatory
function handle_file_select_mandatory_multiple_file_upload(e) {
	mandatory_multiple_file_upload_array = [];
	var variable_array = {};
    $('#selected-mandatory-multiple-file-upload-images-image-div').html("");
	variable_array['e'] = e;
	variable_array['file_id'] = '#mandatory-multiple-file-upload';
	variable_array['storedFiles_array'] = mandatory_multiple_file_upload_array;
	variable_array['col_type'] = 'col-md-12';
	variable_array['file_ui_id'] = 'mandatory-multiple-file-upload';
	variable_array['max_img_size'] = max_img_size;
	variable_array['empty_input_error_msg'] = '';
	variable_array['show_image_id'] = '#mandatory-multiple-file-upload-images-image-div';
	variable_array['max_size_exceeding_error_msg'] = 'File should be of max 1 Mb.';
	variable_array['remove_image_function_name'] = 'remove_selected_mandatory_multiple_file_upload';
	return mandatory_multiple_image_upload(variable_array);
}

// The callback function from where the validation function will be called to validate the multiple image file selected by the user. The choose file is mandatory
function handle_file_select_mandatory_multiple_image_upload(e) {
	mandatory_multiple_image_upload_array = [];
	var variable_array = {};
    $('#selected-mandatory-multiple-image-upload-images-image-div').html("");
	variable_array['e'] = e;
	variable_array['file_id'] = '#mandatory-multiple-image-upload';
	variable_array['storedFiles_array'] = mandatory_multiple_image_upload_array;
	variable_array['col_type'] = 'col-md-12';
	variable_array['file_ui_id'] = 'mandatory-multiple-image-upload';
	variable_array['max_img_size'] = max_img_size;
	variable_array['empty_input_error_msg'] = '';
	variable_array['show_image_id'] = '#mandatory-multiple-image-upload-images-image-div';
	variable_array['max_size_exceeding_error_msg'] = 'Image should be of max 1 Mb.';
	variable_array['remove_image_function_name'] = 'remove_selected_mandatory_multiple_image_upload';
	return mandatory_multiple_image_upload(variable_array);
}

// The callback function from where the validation function will be called to validate the multiple image file selected by the user. The choose file is non mandatory
function handle_file_select_non_mandatory_multiple_image_upload(e) {
	non_mandatory_multiple_image_upload_array = [];
	var variable_array = {};
    $('#selected-non-mandatory-multiple-image-upload-images-image-div').html("");
	variable_array['e'] = e;
	variable_array['file_id'] = '#non-mandatory-multiple-image-upload';
	variable_array['storedFiles_array'] = non_mandatory_multiple_image_upload_array;
	variable_array['col_type'] = 'col-md-12';
	variable_array['file_ui_id'] = 'non-mandatory-multiple-image-upload';
	variable_array['max_img_size'] = max_img_size;
	variable_array['empty_input_error_msg'] = '';
	variable_array['show_image_id'] = '#non-mandatory-multiple-image-upload-images-image-div';
	variable_array['max_size_exceeding_error_msg'] = 'Image should be of max 1 Mb.';
	variable_array['remove_image_function_name'] = 'remove_selected_non_mandatory_multiple_image_upload';
	return non_mandatory_multiple_image_upload(variable_array);
}

// The callback function from where the validation function will be called to validate the multiple image file selected by the user and with inputs for every selected image. The choose file is mandatory
function handle_file_select_non_mandatory_multiple_image_upload_with_input_for_images(e) {
	mandatory_multiple_image_upload_with_input_for_images_array = [];
	var variable_array = {};
	variable_array['e'] = e;
	variable_array['file_id'] = '#mandatory-multiple-image-upload-with-input-for-images';
	variable_array['storedFiles_array'] = mandatory_multiple_image_upload_with_input_for_images_array;
	variable_array['col_type'] = 'col-md-12';
	variable_array['file_ui_id'] = 'mandatory-multiple-image-upload-with-input-for-images-div';
	variable_array['max_img_size'] = max_img_size;
	variable_array['max_video_size'] = max_video_size;
	variable_array['empty_input_error_msg'] = 'Please select a video or image';
	variable_array['show_image_id'] = '#selected-mandatory-multiple-image-upload-images-image-with-input-for-images-div';
	variable_array['image_max_size_exceeding_error_msg'] = 'Image should be of max 1 Mb.';
	variable_array['video_max_size_exceeding_error_msg'] = 'Video should be of max 20 Mb.';
	variable_array['remove_image_function_name'] = 'remove_selected_mandatory_multiple_image_upload_images_image_with_input_for_images';
	variable_array['image_input_id'] = 'mandatory-multiple-image-upload-with-description-for-images';
	variable_array['image_input_error_msg_div_id'] = 'mandatory-multiple-image-upload-with-description-for-images-description-error-msg-div';
	variable_array['input_function_name'] = 'check_mandatory_multiple_image_upload_with_description_for_images_description';
	variable_array['input_plcaeholder'] = 'Enter image/video description';
	variable_array['input_hidden_class_name'] = 'mandatory-multiple-image-upload-with-description-for-images-input-i';
	variable_array['input_class_name'] = 'mandatory-multiple-image-upload-with-description-for-images-input';
	variable_array['sorting_id'] = 'mandatory_multiple_image_upload_with_description_for_images_sort';
	variable_array['sorting_class'] = 'mandatory-multiple-image-upload-with-description-for-images-sorting-ui';
	return multiple_file_upload_single_image_or_video_with_input(variable_array);
}

function check_mandatory_multiple_image_upload_with_description_for_images_description(i) {
	var variable_array = {};
	variable_array['input_id'] = '#mandatory-multiple-image-upload-with-description-for-images-'+i;
	variable_array['error_msg_div_id'] = '#mandatory-multiple-image-upload-with-description-for-images-description-error-msg-div-'+i;
	variable_array['empty_input_error_msg'] = 'Please enter the description';
	variable_array['exceeding_max_length_input_error_msg'] = 'Description should be of max '+image_video_description_max_length+' characters';
	variable_array['max_length'] = image_video_description_max_length;
	return mandatory_any_input_with_max_length_limitation(variable_array);
}

function check_submit_btn() {
    check_mandatory_only_alphabets_with_max_length();
    check_non_mandatory_only_alphabets_with_max_length();
    check_mandatory_email_id();
    check_non_mandatory_email_id();
    check_mandatory_only_number();
    check_non_mandatory_only_number();
    check_mandatory_any_input();
    check_mandatory_any_input_with_max_length_validation();
    check_non_mandatory_any_input_with_max_length_validation();
    check_mandatory_any_input_with_min_length_validation();
    check_non_mandatory_any_input_with_min_length_validation();
    check_mandatory_any_input_with_min_and_max_length_validation();
    check_non_mandatory_any_input_with_min_and_max_length_validation();
    check_mandatory_url();
    check_non_mandatory_url();
    check_mandatory_select_option();
    
    if(mandatory_single_file_upload_array == '' || mandatory_single_file_upload_array == undefined || mandatory_single_file_upload_array == 'undefined' || mandatory_single_file_upload_array.length == 0) {
        $('#selected-mandatory-single-file-upload-images-image-div').html("<div class='col-md-12'><span class='text-danger error-msg-small'>No file selected. Please select a file</span></div>");
    }

    if(mandatory_single_image_upload_array == '' || mandatory_single_image_upload_array == undefined || mandatory_single_image_upload_array == 'undefined' || mandatory_single_image_upload_array.length == 0) {
        $('#selected-mandatory-single-image-upload-images-image-div').html("<div class='col-md-12'><span class='text-danger error-msg-small'>No image selected. Please select an image</span></div>");
    }

    if(mandatory_multiple_file_upload_array == '' || mandatory_multiple_file_upload_array == undefined || mandatory_multiple_file_upload_array == 'undefined' || mandatory_multiple_file_upload_array.length == 0) {
        $('#mandatory-multiple-file-upload-images-image-div').html("<div class='col-md-12'><span class='text-danger error-msg-small'>No file selected. Please select at least 1 file.</span></div>")
    }

    // mandatory-multiple-file-upload-images-image-div

    if(mandatory_multiple_image_upload_array == '' || mandatory_multiple_image_upload_array == undefined || mandatory_multiple_image_upload_array == 'undefined' || mandatory_multiple_image_upload_array.length == 0) {
        $('#mandatory-multiple-image-upload-images-image-div').html("<div class='col-md-12'><span class='text-danger error-msg-small'>No image selected. Please select at least 1 image</span></div>");
    }
}
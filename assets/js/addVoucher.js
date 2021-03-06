/**
 * File : addUser.js
 * 
 * This file contain the validation of add user form
 * 
 * Using validation plugin : jquery.validate.js
 * 
 * @author Kishor Mali
 */

$(document).ready(function(){
	
	var addUserForm = $("#addVoucher");
	
	var validator = addVoucherForm.validate({
		
		rules:{
			code :{ required : true, digits : true },
			nominal : { required : true, digits : true },
			note : { required : true}
		},
		messages:{
			code :{ required : "This field is required", digits : "Please enter numbers only" },
			nominal : { required : "This field is required", digits : "Please enter numbers only" },
			note : { required : "This field is required"}			
		}
	});
});

// When the DOM is ready, run the function
$(function () {
  // Initialize validation on the form with id 'studentForm'
  $("#studentForm").validate({
    // Define validation rules for each form field
    rules: {
      name: {
        required: true, // Name must be filled out
        minlength: 4, // Minimum length of 4 characters
      },
      email: {
        required: true, // Email must be filled out
        email: true, // Must be a valid email format
      },
      contact: {
        required: true, // Contact number must be filled out
        digits: true, // Only digits allowed
        maxlength: 10, // Maximum length 10 digits
        minlength: 10, // Minimum length 10 digits
      },
      gender: {
        required: true, // Gender selection is required
      },
      course: {
        required: true, // Course must be filled out
      },
    },

    // Custom error messages to show for each rule violation
    messages: {
      name: {
        required: "Name is required!",
        minlength: "Please enter your full name!",
      },
      email: {
        required: "Email is required!",
        email: "Please enter a valid email format!",
      },
      contact: {
        required: "Contact number is required!",
        digits: "Please enter only digits!",
        maxlength: "Enter a valid 10-digit number!",
        minlength: "Enter a valid 10-digit number!",
      },
      gender: {
        required: "Gender is required!",
      },
      course: {
        required: "Course is required!",
      },
    },

    // Use <div> elements to display error messages
    errorElement: "div",

    // Customize where to place the error message in the DOM
    errorPlacement: function (error, element) {
      error.addClass("error"); // Add 'error' class to style the message
      error.insertAfter(element); // Insert error message after the input/select
    },
  });
});

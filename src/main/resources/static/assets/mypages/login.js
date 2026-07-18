function validateLogin() {

    let email = $('#login').val().trim();
    let password = $('#password').val().trim();

    if (email === '') {
        $.toast({
            heading: 'Validation',
            text: 'Email is required',
            position: 'top-right',
            icon: 'error'
        });
        return false;
    }

    if (password === '') {
        $.toast({
            heading: 'Validation',
            text: 'Password is required',
            position: 'top-right',
            icon: 'error'
        });
        return false;
    }

    return true;
}

function login() {

    if (!validateLogin()) {
        return;
    }

    let email = $('#login').val().trim();
    let password = $('#password').val().trim();

    let payload = {
        email: email,
        password: password
    };

    console.log(payload);

    $.ajax({

        url: "/auth/login",
        type: "POST",
        contentType: "application/json",
          xhrFields: {
                withCredentials: true
            },

        data: JSON.stringify(payload),

        success: function (response) {
            console.log("SUCCEESSS COMEBACK");
            console.log(response);
            $.toast({
                    heading: 'Success',
                    text: 'Login successful',
                    position: 'top-right',
                    icon: 'success'
    });



            setTimeout(function() {

                window.location.href = '/master_form';



            },1500);



        },

        error: function (xhr) {

            let message = "Something went wrong";

            if (xhr.status === 400) {
                message = "Please check your input.";
            }
            else if (xhr.status === 401) {
                message = "Invalid email or password.";
            }
            else if (xhr.status === 404) {
                message = "API not found.";
            }
            else if (xhr.status === 500) {
                message = "Internal Server Error.";
            }

            $.toast({
                heading: 'Error',
                text: message,
                position: 'top-right',
                icon: 'error'
            });

            console.log(xhr);
        }

    });

}
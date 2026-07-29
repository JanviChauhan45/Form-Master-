function validateLogin() {

    let email = $('#login').val().trim();
    let password = $('#password').val().trim();

    if (email === '') {
        showToast(
            "Validation",
            "Email is Required",
            "error"
        );

        return false;
    }

    if (password === '') {
    showToast(
        "Validation",
        "Password is required",
        "error"
    );
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

    callApi({

        url: "/auth/login",

        type: "POST",

        contentType: "application/json",

        data: JSON.stringify(payload),

        success: function (response) {

            showToast(
                "Success",
                "Login Successful",
                "success"
            );

            setTimeout(function () {

                if (response.role === "ADMIN") {
                    window.location.href = "/master_form";
                } else {
                    window.location.href = "/fill_forms";
                }

            }, 1500);

        }

    });

}
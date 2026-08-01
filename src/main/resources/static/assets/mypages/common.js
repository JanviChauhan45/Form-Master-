function showToast(heading,message,icon){

    $.toast({
        heading: heading,
        text: message,
        position: "top-right",
        icon: icon,
        hideAfter: 3000,
        stack: 1
    });
}

function handleAjaxError(xhr){
    let message = "Something went wrong";

    switch(xhr.status){
        case 400:
            message = xhr.responseJSON?.message || "Bad Request";
            break;

        case 401:
            message = "Session Expired.Please login";
            showToast("Unauthorized",message,"error");
            setTimeout(function (){
                window.location.href ="/index";

            },1500);
            return;

        case 403:
            message = "Access Denied. Please login again.";
            alert("403 detected");

            showToast(
                "Access Denied",
                message,
                "error"
            );

            setTimeout(function () {
                window.location.href = "/index";
            }, 1500);

            return;

        case 404:
            message = "Requested resource not found";
            break;

        case 500:
            message = "Internal Server Error";
            break;

        default:
            message="Unexpected Error";
    }
    showToast("Error",message,"error");
}

function callApi(options){
    $.ajax({
        xhrFields:{
            withCredentials: true
        },

        url: options.url,
        type: options.type || "GET",
        data: options.data || null,
        contentType: options.contentType,
        processData: options.processData,
        headers: options.headers || {},

        success: function (response){
            if(options.success){
                options.success(response);
            }

        },
        error: function(xhr){
            if(options.error){
                options.error(xhr);
            }else{
                handleAjaxError(xhr);

            }
        }
    });
}
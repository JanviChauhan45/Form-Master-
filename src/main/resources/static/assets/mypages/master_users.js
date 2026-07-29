
$(document).ready(function(){

    loadUsers();

});

$(".client_add_btn").click(function () {

    clearForm();

    $("#portfolio_details").hide();
    $("#portfolio_add_detail").show();

});

$("#profile_img").on("change", function () {

    let file = this.files[0];

    if (!file) {
        return;
    }

    let reader = new FileReader();

    reader.onload = function (e) {

        $("#profilePreview").attr("src", e.target.result);

    };

    reader.readAsDataURL(file);

});

function removeImage(){

    $("#profile_img").val("");

    $("#profilePreview").attr(
        "src",
        "assets/images/users/default_user.png"
    );

}


callApi({

    url:"http://localhost:8080/api/role",

    type:"GET",

    success:function(roles){

        $("#roleid").empty();
        $("#searchRole").empty();

        $("#roleid").append(
            '<option value="">Select Role</option>'
        );

        $("#searchRole").append(
            '<option value="">All Roles</option>'
        );

        roles.forEach(function(role){

            $("#roleid").append(
                `<option value="${role.id}">
                    ${role.role}
                </option>`
            );

            $("#searchRole").append(
                `<option value="${role.id}">
                    ${role.role}
                </option>`
            );

        });

        $("#roleid").selectpicker("refresh");
        $("#searchRole").selectpicker("refresh");

    }
});



function loadUsers(){
    if($.fn.DataTable.isDataTable('#users_datatable')){
        $('#users_datatable').DataTable().destroy();
    }

    callApi({

        url:"http://localhost:8080/api/users/getAll",

        type:"GET",

        success:function(response){

            console.log(response);
            $("#userTableBody").empty();

            response.forEach(user => {


                let imagePath;

                if(user.profile_img){
                    imagePath = "http://localhost:8080/uploads/" + user.profile_img;
                }else{
                    imagePath = "assets/images/users/default_user.png";
                }
                let row =`
                    <tr>
                         <td>
                                <h2 class="table-avatar">

                                    <a href="javascript:void(0)"
                                       data-toggle="popover"
                                       data-trigger="hover"
                                       data-html="true"
                                       data-placement="right"
                                       data-template="<div class=&quot;popover fade bs-popover-right&quot; role=&quot;tooltip&quot;>
                                           <div class=&quot;arrow&quot;></div>
                                           <h3 class=&quot;popover-header p-0 border_radius6&quot;></h3>
                                       </div>"
                                       data-title="<img src='${imagePath}'
                                            width='150'
                                            height='150'
                                            style='object-fit:cover;'
                                            class='border_radius6'>">

                                        <img
                                            src="${imagePath}"
                                            onerror="this.onerror=null; this.src='assets/images/users/default_user.png';"
                                            width="30"
                                            height="30"
                                            class="img-radius avatar"
                                            style="object-fit:cover; border-radius:50%;"
                                        >

                                        ${user.firstname} ${user.lastname}

                                    </a>
                                </h2>
                            </td>
                        <td>${user.email}</td>
                        <td>${user.contactno}</td>
                        <td>${user.valid_from}</td>
                        <td>${user.valid_to}</td>
                        <td>${user.gender}</td>
                        <td>${user.roleid}</td>
                        <td>${user.active}</td>
                        <td class="text-center">

                            <a href="javascript:void(0)"
                               onclick="editUser(${user.id})"
                               class="text-success fa-size"
                               data-toggle="tooltip"
                               data-original-title="Edit">

                                <i class="fa fa-pencil"></i>

                            </a>

                            &nbsp;

                            <a href="javascript:void(0)"
                               onclick="deleteUser(${user.id})"
                               class="text-danger fa-size"
                               data-toggle="tooltip"
                               data-original-title="Delete">

                                <i class="fa fa-trash"></i>

                            </a>

                        </td>

                    </tr>
                `;
                $("#userTableBody").append(row);

            });

             $('#users_datatable').DataTable({
                    destroy: true,
                    pageLength: 10
                });


        }



    })
}

function saveUser(){


       let imageFile = $('#profile_img')[0].files[0];
        let formData = new FormData();
        let validFrom = $('#valid_from').val().trim();
        let validTo = $('#valid_to').val().trim();


        formData.append("firstname",  $('#firstname').val().trim());
        formData.append("lastname" , $('#lastname').val().trim());
        formData.append("email" , $('#email').val().trim());
        formData.append("contactno" , $('#contactno').val().trim());
        if(validFrom !== ""){
            formData.append("valid_from",validFrom);
        }
        if(validTo !== "")
        {
            formData.append("valid_to",validTo);
        }
        if(imageFile){
        formData.append("image",imageFile);
        }
        formData.append("gender", $("#gender").val());
        formData.append("roleid", $("#roleid").val());
       console.log($("#gender").val());
       console.log($("#roleid").val());

        callApi({

            url: "http://localhost:8080/api/users",

            type: "POST",

            data: formData,

            contentType: false,

            processData: false,

            success: function(response){

                showToast(
                    "Success",
                    "The User is Created Successfully",
                    "success"
                );

                clearForm();

                loadUsers();

            }

        });



}

function updateUser(id){

    let imageFile = $("#profile_img")[0].files[0];

    let validFrom = $("#valid_from").val().trim();
    let validTo = $("#valid_to").val().trim();

    let formData = new FormData();

    formData.append("firstname", $("#firstname").val().trim());
    formData.append("lastname", $("#lastname").val().trim());
    formData.append("email", $("#email").val().trim());
    formData.append("contactno", $("#contactno").val().trim());

    if(validFrom !== ""){
        formData.append("valid_from", validFrom);
    }

    if(validTo !== ""){
        formData.append("valid_to", validTo);
    }

    if(imageFile){
        formData.append("image", imageFile);
    }

    formData.append("gender", $("#gender").val());
    formData.append("roleid", $("#roleid").val());

    callApi({

        url:"http://localhost:8080/api/users/"+id,

        type:"PUT",

        data:formData,

        processData:false,

        contentType:false,

        success:function(response){

            showToast(
                "Success",
                "User Updated Successfully",
                "success"
            );

            clearForm();

            loadUsers();

        }

    });

}

function deleteUser(id){

    $.confirm({

        title: 'Delete User',
        content: 'Are you sure you want to delete this user?',
        theme: 'material',
        icon: 'fa fa-warning',
        type: 'red',

        buttons: {

            delete: {

                text: 'Delete',
                btnClass: 'btn-red',

                action: function(){

                    callApi({

                        url:"http://localhost:8080/api/users/"+id,

                        type:"DELETE",

                        success:function(){

                            showToast(
                                "Success",
                                "User Deleted Successfully",
                                "success"
                            );

                            loadUsers();

                        }

                    });

                }

            },

            cancel: {

                text: 'Cancel',

                btnClass: 'btn-default'

            }

        }

    });

}

function editUser(id){

   callApi({

       url:"http://localhost:8080/api/users/"+id,

       type:"GET",

       success:function(user){

            console.log("Editing user:", user);

              clearForm();


            $("#portfolio_details").hide();
            $("#portfolio_add_detail").show();


            $("#portfolio_add_detail .card-header h5").text("Edit User");


            $("#firstname").val(user.firstname);
            $("#lastname").val(user.lastname);
            $("#email").val(user.email);
            $("#email").prop("readonly", true);
            $("#contactno").val(user.contactno);

            $("#valid_from").val(user.valid_from);
            $("#valid_to").val(user.valid_to);


            $("#gender").val(user.gender);
            $("#gender").selectpicker("refresh");


            $("#roleid").val(user.roleid);
            $("#roleid").selectpicker("refresh");


            if(user.profile_img){

                $("#profilePreview").attr(
                    "src",
                    "http://localhost:8080/uploads/" + user.profile_img
                );

            } else {

                $("#profilePreview").attr(
                    "src",
                    "assets/images/users/default_user.png"
                );

            }


            $("#saveBtn")
                .attr("onclick", "updateUser(" + id + ")");

            $("#saveBtnText").text("Update");



        },

        error:function(xhr){

            console.log("Edit API error:", xhr);

              showToast(
                "Validation",
                "Unable to load user details",
                 "error"
              );


        }

    });

}

function clearForm(){
    $('#firstname').val('');
    $('#lastname').val('');
    $('#contactno').val('');

    $("#email")
        .val("")
        .prop("readonly", false);

    $('#gender').selectpicker('refresh');
    $('#roleid').selectpicker('refresh');
    $('#valid_from').val('');
    $('#valid_to').val('');
    $("#profile_img").val("");
    $("#profilePreview").attr(
        "src",
        "assets/images/users/default_user.png"
    );
    $("#gender").val("");
    $("#gender").selectpicker("refresh");

    $("#roleid").val("");
    $("#roleid").selectpicker("refresh");

}

$("#searchbtn").click(function () {

    let table = $("#users_datatable").DataTable();

    let name = $("#searchName").val();

    table.search(name).draw();

});

function validateUser() {

    let firstname = $("#firstname").val().trim();
    let lastname = $("#lastname").val().trim();
    let email = $("#email").val().trim();
    let contact = $("#contactno").val().trim();
    let gender = $("#gender").val();
    let role = $("#roleid").val();
    let validFrom = $("#valid_from").val();
    let validTo = $("#valid_to").val();

    let nameRegex = /^[A-Za-z ]+$/;
    let emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@(gmail|yahoo|outlook|yopmail)\.com$/;
    let contactRegex = /^[6-9][0-9]{9}$/;


    if(firstname === ""){
          showToast(
            "Validation",
            "First Name is required",
            "error"
             );

        $("#firstname").focus();
        return false;
    }

    if(firstname.length < 2 || firstname.length > 30){
          showToast(
             "Validation",
             "First Name can contain min 2 and max 30 chars",
             "error"
           );

        $("#firstname").focus();
        return false;
    }

    if(!nameRegex.test(firstname)){
        showToast(
            "Validation",
            "First Name can contain only letters and spaces",
            "error"
        );

        $("#firstname").focus();
        return false;
    }


    if(lastname === ""){
        showToast(
            "Validation",
            "Last Name is required",
            "error"
        );

        $("#lastname").focus();
        return false;
    }

    if(lastname.length < 2 || lastname.length > 30){
        showToast(
            "Validation",
            "Last Name must be between 2 and 30 characters",
            "error"
        );

        $("#lastname").focus();
        return false;
    }

    if(!nameRegex.test(lastname)){
        showToast(
            "Validation",
            "Last Name can contain only letters and spaces",
            "error"
        );

        $("#lastname").focus();
        return false;
    }


    if(email === ""){
        showToast(
            "Validation",
            "Email is required",
            "error"
        );

        $("#email").focus();
        return false;
    }

    if(!emailRegex.test(email)){
        showToast(
            "Validation",
            "Enter a valid email address",
            "error"
        );

        $("#email").focus();
        return false;
    }


    if(contact === ""){
        showToast(
            "Validation",
            "Contact Number is required",
            "error"
        );

        $("#contactno").focus();
        return false;
    }

    if(!contactRegex.test(contact)){
        showToast(
            "Validation",
            "Enter a valid 10 digit mobile number",
            "error"
        );

        $("#contactno").focus();
        return false;
    }

    // Gender
    if(gender === ""){
        showToast(
            "Validation",
            "Please Select Gender",
            "error"
        );

        $("#gender").focus();
        return false;
    }


    if(role === ""){
        showToast(
            "Validation",
            "Please Select Role",
            "error"
        );

        $("#roleid").focus();
        return false;
    }

    // Valid From
    if(validFrom === ""){
        showToast(
            "Validation",
            "Valid From Date is required",
            "error"
        );

        $("#valid_from").focus();
        return false;
    }


    if(validTo === ""){
        showToast(
            "Validation",
            "Valid To Date is required",
            "error"
        );

        $("#valid_to").focus();
        return false;
    }

    let fromDate = new Date(validFrom);
    let toDate = new Date(validTo);

    if(toDate < fromDate){
        showToast(
            "Validation",
            "Valid To Date cannot be before Valid From Date",
            "error"
        );

        $("#valid_to").focus();
        return false;
    }

    return true;
}





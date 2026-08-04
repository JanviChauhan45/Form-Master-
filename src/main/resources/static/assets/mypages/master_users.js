
$(document).ready(function(){

    loadUsers();

});

$(".client_add_btn").click(function () {

    clearForm();

    $("#portfolio_details").hide();
    $("#portfolio_add_detail").show();

    $("#portfolio_add_detail .card-header h5").text("Add Users");

    $("#saveBtn")
        .attr("onclick", "saveUser()");

    $("#saveBtnText").text("Save");

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

                let genderText =
                    user.gender == 1 ? "Male" :
                    user.gender == 2 ? "Female" : "-";

                let roleText =
                    user.roleid == 1 ? "Admin" :
                    user.roleid == 2 ? "User" : "-";

                let activeText =
                    user.active == 1 ? "Yes" : "No" ;

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
                                        </a>

                                        ${user.firstname} ${user.lastname}


                                </h2>
                            </td>
                        <td>${user.email}</td>
                        <td>${user.contactno}</td>
                        <td>${user.valid_from}</td>
                        <td>${user.valid_to}</td>
                        <td>${genderText}</td>
                        <td>${roleText}</td>
                        <td>${activeText}</td>
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

         if (!validateUser()) {
                return;
         }


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
                 $("#portfolio_add_detail").hide();
                 $("#portfolio_details").show();

                loadUsers();

            }

        });



}

function updateUser(id){
        if (!validateUser()) {
                    return;
             }

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
              $("#portfolio_add_detail").hide();
              $("#portfolio_details").show();

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
    $("#saveBtn")
        .attr("onclick", "saveUser()");

    $("#saveBtnText").text("Save");

    $("#portfolio_add_detail .card-header h5").text("Add Users");

}

$("#searchbtn").click(function () {

    let table = $("#users_datatable").DataTable();

    let name = $("#searchName").val();
    let role = $("#searchRole option:selected").text().trim();

    table.column(0).search(name);

    if(role == "All Roles" || role == "Select"){
        table.column(6).search("");

    }else {
        table.column(6).search(role);

    }

    table.draw();



});

$("#resetbtn").click(function (){
    let table = $("#users_datatable").DataTable();
    $("#searchName").val("");

    $("#searchRole").val("");
    $("#searchRole").selectpicker("refresh");

    table.search("");
    table.column().search("");

    table.draw();

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
    let contactRegex = /^[0-9][0-9]{9}$/;


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

    function parseDate(dateString){

        let parts = dateString.split("/");

        return new Date(
            parts[2],
            parts[1]-1,
            parts[0]
        );

    }

    let fromDate = parseDate(validFrom);
    let toDate = parseDate(validTo);

    let today = new Date();
    today.setHours(0,0,0,0);


    if(fromDate > today){

        showToast(
            "Validation",
            "Valid From cannot be a future date",
            "error"
        );

        $("#valid_from").focus();

        return false;
    }


    if(toDate < fromDate){

        showToast(
            "Validation",
            "Valid To cannot be before Valid From",
            "error"
        );

        $("#valid_to").focus();

        return false;
    }


    let diffDays =
        Math.floor((toDate - fromDate) / (1000 * 60 * 60 * 24));

    if(diffDays < 10){

        showToast(
            "Validation",
            "Valid To must be at least 10 days after Valid From",
            "error"
        );

        $("#valid_to").focus();

        return false;
    }

    return true;
}





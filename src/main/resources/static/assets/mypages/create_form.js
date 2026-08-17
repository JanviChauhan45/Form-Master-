callApi({
    url:"http://localhost:8080/api/module/getAll",
    type:"GET",

    success: function(modules){

        $("#moduleId").empty();
        $("#searchModule").empty();
        $("#moduleId").append(
            '<option value="">Select Module</option>'
        );

        $("#searchModule").append(
            '<option value= ""> All Modules</option>'
        );




            modules.forEach(function(module){
                $("#moduleId").append(
                    `<option value = "${module.id}">
                    ${module.moduleName}
                    </option>`
                );

                $("#searchModule").append(
                    `<option value = "${module.id}">
                    ${module.moduleName}
                    </option>`
                );

            });

            $("#moduleId").selectpicker("refresh");
            $("#searchModule").selectpicker("refresh");


    }
});

$("#moduleId").change(function(){

    let moduleId = $(this).val();

    $("#characteristicsId").empty();

    if(moduleId == ""){
        $("#characteristicsId").append(
            '<option value="">Select Characteristic</option>'
        );

        $("#characteristicsId").selectpicker("refresh");
        return;
    }

    callApi({

        url: "http://localhost:8080/api/modulechar/module/" + moduleId,

        type: "GET",

        success:function(response){
         console.log(response);
            $("#characteristicsId").empty();

            $("#characteristicsId").append(
                '<option value="">Select Characteristic</option>'
            );

            response.forEach(function(item){

                $("#characteristicsId").append(
                    `<option value="${item.characteristicsId}">
                        ${item.characteristicsName}
                    </option>`
                );

            });

            $("#characteristicsId").selectpicker("refresh");

        }

    });

});

callApi({
    url: "http://localhost:8080/api/months/getAll",
    type: "GET",

    success: function(months) {

        console.log("Months response:", months);

        $("#monthId").empty();

        $("#monthId").append(
            '<option value="">Select Month</option>'
        );

        months.forEach(function(month) {

            $("#monthId").append(
                `<option value="${month.id}">
                    ${month.monthName}
                </option>`
            );

        });

        $("#monthId").selectpicker("refresh");
    },

    error: function(xhr) {
        showToast(
            "Error",
            "Month Error",
            "error"
        );
        console.log("Month API error:", xhr);
    }
});

callApi({
    url: "http://localhost:8080/api/recurrance/getAll",
    type: "GET",

    success: function (recurrances) {

        console.log("Recurrence API response:", recurrances);

        $("#recurranceId").empty();

        $("#recurranceId").append(
            '<option value="">Select Recurrence</option>'
        );

        recurrances.forEach(function (recurrance) {

            console.log("Recurrence object:", recurrance);
            console.log("ID:", recurrance.id);
            console.log("Name:", recurrance.recurranceName);

            $("#recurranceId").append(
                '<option value="' + recurrance.id + '">' +
                    recurrance.recurranceName +
                '</option>'
            );
        });

        $("#recurranceId").selectpicker("refresh");
    },

    error: function (xhr) {
        showToast(
            "Error",
            "Recurrance Error",
            "error"
        );
        console.log("Recurrence API Error:", xhr);
    }
});

$("#characteristicsId").change(function () {

    let charid = $(this).val();

    $("#subCharacteristicsId").empty();

    if (charid == "") {

        $("#subCharacteristicsId").append(
            '<option value="">Select Sub Characteristic</option>'
        );

        $("#subCharacteristicsId").selectpicker("refresh");

        return;
    }

    callApi({

        url: "http://localhost:8080/api/subcar/characteristics/" + charid,

        type: "GET",

        success: function (response) {

            console.log("Sub Characteristics Response:", response);

            $("#subCharacteristicsId").empty();

            $("#subCharacteristicsId").append(
                '<option value="">Select Sub Characteristic</option>'
            );

            response.forEach(function (item) {

                $("#subCharacteristicsId").append(
                    `<option value="${item.id}">
                        ${item.name}
                    </option>`
                );

            });

            $("#subCharacteristicsId").selectpicker("refresh");
        },

        error: function (xhr) {

            showToast(
                "Error",
                "Sub Characteristics Error" || xhr ,
                "error"
            );


        }
    });

});

$(".save_port_details").click(function () {

    console.log("SAVE BUTTON CLICKED");
     console.log("Recurrence element:", $("#recurranceId"));
        console.log("Recurrence value:", $("#recurranceId").val());
        console.log(
            "Recurrence selected:",
            $("#recurranceId option:selected").val()
        );
        console.log(
            "Recurrence selected text:",
            $("#recurranceId option:selected").text()
        );


    let formData = {

        title: $("#title").val(),
        alias: $("#alias").val(),

        description: $("#description").val(),

        moduleid: $("#moduleId").val(),

        characteristicsid: $("#characteristicsId").val(),

        subCharacteristicsid: $("#subCharacteristicsId").val(),

        recurranceid: $("#recurranceId").val(),

        month: $("#monthId").val(),

        effectiveDate: $("#date_from").val(),

        compliancePeriod: $("#compliancePeriod").val()
    };

    console.log("FORM DATA:", formData);

    callApi({

        url: "http://localhost:8080/api/form/add",

        type: "POST",

        data: JSON.stringify(formData),

        contentType: "application/json",

        success: function (response) {

            console.log("FORM CREATED:", response);

            showToast(
                "Success",
                "Form created successfully",
                "success"
            );
        },

        error: function (xhr) {


            console.log("Status:", xhr.status);
            console.log("Response:", xhr.responseText);
            console.log("Full error:", xhr);


            showToast(
                "Error",
                "Unable to create form" || xhr.responseText ,
                "error"
            );
        }
    });
});

function validateForm(){
    let title = $("#title").val().trim();
    let alias = $("#alias").val().trim();
    let description = $("#description").val().trim();
    let moduleId = $("#moduleId").val();
    let characteristicsId = $("#characteristicsId").val();
    let subCharacteristicsId = $("#subCharacteristicsId").val();
    let recurranceId = $("#recurranceId").val();
    let monthId = $("#monthId").val();
    let effectiveDate = $("#date_from").val();
    let compliancePeriod = $("#compliancePeriod").val();

    if(title === ""){
        showToast(
            "Validation",
            "Title is required",
            "error"
        );
        $("#title").focus();
        return false;
    }

    if(title.length < 3  || title.length > 50){
        showToast(
          "Validation",
          "Title can contain min 3 and max 50 characters"
          "error"
        );

        $("#title").focus();
        return false;
    }

    if(alias === ""){
        showToast(
            "Validation",
            "Alias is required",
            "error"
        );
        $("#alias").focus();
        return false;

    }
    if(alias.length < 2 || alias.length > 30){
        showToast(
        "Validation",
        "Alias name can contain min 2 and max 30 characters",
        "error"
        );

        $("#alias").focus();
        return false;
    }

    if(description === ""){
        showToast(
            "Validation",
            "Text is required",
            "error"
        );

        $("#description").focus();
        return false;
    }

    if(description.length < 10 || description > 255){
        showToast(
            "Validation",
            "Text must contain minimum 10 characters",
            "error"
        );

        $("#description").focus();
        return false;
    }

    if(moduleId === ""){
        showToast(
            "Validation",
            "Please select Module",
            "error"
        );

    }

    if(characteristicsId === ""){
        showToast(
        "Validation",
        "Please select Charateristics",
        "error"
        );
    }

    if(subCharacteristicsId === ""){
        showToast(
        "Validation",
        "Please select SubCharacteristics",
        "error"
        );
    }

    if(recurranceId === ""){
        showToast(
        "Validation",
        "Please select Recurrance",
        "error"
        );
    }

    if(monthId === ""){
        showToast(
            "Validation",
            "Please select Month",
            "error"
        );
    }

    if(effectiveDate === ""){
        showToast(
            "Validation",
            "Please select Effective Date",
            "error"
        );
    }


    if(compliancePeriod === ""){
        showToast(
            "Validation",
            "Please add Compliance Period",
            "error"
        );

       $("#compliancePeriod").focus();
       return false;
    }

}

function clearForm(){
     $('#title').val('');
      $('#alias').val('');
     $('#description').val('');
     $("#moduleId").val("");
     $('#moduleId').selectpicker('refresh');
     $("#characteristicsId").val("");
     $('#characteristicsId').selectpicker('refresh');
     $("#subCharacteristicsId").val("");
     $('#subCharacteristicsId').selectpicker('refresh');
     $("#recurranceId").val("");
     $('#recurranceId').selectpicker('refresh');
     $("#monthId").val("");
     $('#monthId').selectpicker('refresh');
     $('#date_from').val('');
     $('#compliancePeriod').val('');

}
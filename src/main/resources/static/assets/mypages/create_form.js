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
        console.log("Month API error:", xhr);
    }
});

callApi({
    url:"http://localhost:8080/api/recurrance/getAll",
    type:"GET",

    success: function(recurrances){
        console.log("Recurrance Response: ", recurrances);

        $("#recurranceId").empty();

        $("#recurranceId").append(
            '<option value="">Select Recurrance </option>'
        );

        recurrances.forEach(function(recurrance)
        {
            $("#recurranceId").append(
                `<option value="${recurrance.id}">
                ${recurrance.recurranceName}
                </option>`

            );
        });

        $("#recurranceId").selectpicker("refresh");
    },
    error:function(xhr){
        console.log("Recurrance ApI Error",xhr);
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

            console.log(
                "Sub Characteristics API Error:",
                xhr
            );
        }
    });

});
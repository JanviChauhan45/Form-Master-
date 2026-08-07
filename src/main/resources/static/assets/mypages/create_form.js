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
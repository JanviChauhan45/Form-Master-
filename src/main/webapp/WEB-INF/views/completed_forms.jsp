<!DOCTYPE html>
<html lang="en">

<head>

    <title>Completed Form</title>
    <meta charset='utf-8'/>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='Cache-Control' content='no-cache, no-store, must-revalidate'/>
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta http-equiv='Pragma' content='no-cache'>

    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.png">

    <!-- Common css -->
    <script src="assets/custom/plugins/theme/mytheme.js"></script>
    <link rel="stylesheet" type="text/css" href="assets/custom/css/import.css">
    <link rel="stylesheet" type="text/css" href="assets/custom/css/responsive.css">

    <script src="assets/js/modernizr.min.js"></script>

</head>

<body class="background-image-body background1 square scrollbar-dusty-grass square thin">
    <div class="preloader"></div>
    <!-- Navigation Bar-->
    <header id="topnav">
        <script src="assets/custom/js/header.js"></script>
        <!-- end topbar-main -->

        <script src="assets/custom/js/menu.js"></script>
    </header>
    <!-- End Navigation Bar-->

    <div class="wrapper wrapper-top">
        <div class="container-fluid">

            <div class="fixed-plugin">
                <div class="dropdown show-dropdown">
                    <a href="#" data-toggle="dropdown">
                        <i class="fa fa-cog fa-2x"> </i>
                    </a>

                    <ul class="dropdown-menu">
                        <li class="header-title"> theme settings</li>
                        <li class="adjustments-line">
                            <a href="javascript:void(0)" class="switch-trigger active-color">
                                <div class="badge-colors ml-auto mr-auto text-center" id="themeColorName">
                                    <span class="badge filter badge-azure purplelable" id="bluecolor"
                                        title="Blue"></span>
                                    <span class="badge filter badge-warning yellowlable" id="yellowcolor"
                                        title="Yellow"></span>
                                    <span class="badge filter badge-green dbluelable" id="greencolor"
                                        title="Green"></span>
                                    <span class="badge filter badge-danger bluelable" id="redcolor" title="Red"></span>
                                </div>
                                <div class="clearfix"></div>
                            </a>
                        </li>

                        <li class="header-title mb-0"> Background </li>
                        <li class="adjustments-line more-height">
                            <a href="javascript:void(0)" class="switch-trigger active-color">
                                <div class="badge-colors ml-auto mr-auto text-center" id="imagechanges">
                                    <span class="image-change-button1">
                                        <img src="assets/custom/images/theme-background/background1.jpg"
                                            class="imgactive" alt="BG1">
                                    </span>
                                    <span class="image-change-button2">
                                        <img src="assets/custom/images/theme-background/background2.jpg" alt="BG2">
                                    </span>
                                    <span class="image-change-button3">
                                        <img src="assets/custom/images/theme-background/background3.jpg" alt="BG3">
                                    </span>
                                    <span class="image-change-button4">
                                        <img src="assets/custom/images/theme-background/background4.jpg" alt="BG4">
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- <div class="row">
                <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                    <div id="accordion1" role="tablist" aria-multiselectable="true" class="mb-2">
                        <div class="card collapse-icon accordion-icon-rotate">
                            <div class="card-header" role="tab" id="headingOne1">
                                <h5 class="mb-0 mt-0">
                                    <a data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1"
                                        class="text-dark atag ml-4" aria-expanded="true" aria-controls="collapseOne1"
                                        id="searchcollapse">
                                        Search Criteria
                                    </a>
                                </h5>
                            </div>

                            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1">
                                <div class="card-body pl-3 pr-3">

                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-12 colmspadding">
                                            <div class="form-group mb-0">
                                                <label class="mb-1">Form Name</label>
                                                <select class="selectpicker" data-style="lineheight12 bg-transfer"
                                                    data-live-search="true">
                                                    <option value="" selected="selected">Select</option>
                                                    <option value="1">251 Attwell Drive - Operator Form - Monthly
                                                    </option>
                                                    <option value="2">251 Attwell Drive - Operator Form - Semi-Annually
                                                    </option>
                                                    <option value="3">1 Yonge Street - Contractor Form - Annual</option>
                                                    <option value="4">1 Yonge Street - Contractor Form - Semi-Annually
                                                    </option>
                                                    <option value="5">1 Yonge Street - Operator Form - Quarterly
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-xl-2 col-lg-3 col-sm-6 col-xs-12 mb-0 btntop colmspadding">
                                            <div class="form-group mb-0">
                                                <a class="save_form_details btn btn-success text-white btn-padding"
                                                    id="searchbtn"><i class="fa fa-search mr-2"></i>Search</a>

                                                <a
                                                    class="show-details-table btn btn-danger text-white btn-padding ml-1"><i
                                                        class="fa fa-refresh mr-2"></i>Reset</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

            <div class="row">
                <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0 font-bold mt-0">Completed Form</h5>
                        </div>

                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-sm-12">
                                    <table id="form_datatable" class="table nowrap table-custom-hover">
                                        <thead>
                                            <tr>
                                                <th>Completed Date</th>
                                                <th>Form #</th>
                                                <th>Form Name</th>
                                                <th>Created By</th>
                                                <th class="text-center">Preview</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>25-07-2020</td>
                                                <td>F0RM-01</td>
                                                <td>251 Attwell Drive - Operator Form - Monthly</td>
                                                <td>Eric Hartwig</td>
                                                <td class="text-center">
                                                    <span data-toggle="modal" data-target="#all_question_preview"><a
                                                            href="javascript:void(0)" data-toggle="tooltip"
                                                            data-placement="bottom" title=""
                                                            data-original-title="Preview"
                                                            class="text-info fa-size"><i
                                                                class="fa fa-eye"></i></a></span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>19-07-2020</td>
                                                <td>F0RM-02</td>
                                                <td>251 Attwell Drive - Operator Form - Semi-Annually</td>
                                                <td>Bill Rempel</td>
                                                <td class="text-center">
                                                    <span data-toggle="modal" data-target="#all_question_preview"><a
                                                            href="javascript:void(0)" data-toggle="tooltip"
                                                            data-placement="bottom" title=""
                                                            data-original-title="Preview"
                                                            class="text-info fa-size"><i
                                                                class="fa fa-eye"></i></a></span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>12-07-2020</td>
                                                <td>F0RM-03</td>
                                                <td>1 Yonge Street - Contractor Form - Annual</td>
                                                <td>Amit Amin</td>
                                                <td class="text-center">
                                                    <span data-toggle="modal" data-target="#all_question_preview"><a
                                                            href="javascript:void(0)" data-toggle="tooltip"
                                                            data-placement="bottom" title=""
                                                            data-original-title="Preview"
                                                            class="text-info fa-size"><i
                                                                class="fa fa-eye"></i></a></span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>08-07-2020</td>
                                                <td>F0RM-04</td>
                                                <td>1 Yonge Street - Contractor Form - Semi-Annually</td>
                                                <td>Eric Hartwig</td>
                                                <td class="text-center">
                                                    <span data-toggle="modal" data-target="#all_question_preview"><a
                                                            href="javascript:void(0)" data-toggle="tooltip"
                                                            data-placement="bottom" title=""
                                                            data-original-title="Preview"
                                                            class="text-info fa-size"><i
                                                                class="fa fa-eye"></i></a></span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>01-07-2020</td>
                                                <td>F0RM-05</td>
                                                <td>1 Yonge Street - Operator Form - Quarterly</td>
                                                <td>Bill Rempel</td>
                                                <td class="text-center">
                                                    <span data-toggle="modal" data-target="#all_question_preview"><a
                                                            href="javascript:void(0)" data-toggle="tooltip"
                                                            data-placement="bottom" title=""
                                                            data-original-title="Preview"
                                                            class="text-info fa-size"><i
                                                                class="fa fa-eye"></i></a></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal modal-right fade" id="all_question_preview" tabindex="-1">
        <div class="modal-dialog modal-right-width">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Question Preview</h4>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>x</span>
                    </button>
                </div>

                <div class="modal-body" style="background-color: #F3F3F3;">
                    <div class="card mb-2 queshadow">
                        <div class="card-body">
                            <div class="row pr-3 pl-3">
                                <div class="col-xl-4 col-lg-4 col-sm-4 colmspadding">
                                    <p class="compact mb-1"><span class="font-weight-700">Completed Date</span>
                                        <span class="displayblock font-medium-2">01-07-2020</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="detailsbg">
                        <div class="row pr-2 pl-2">
                            <div class="col-xl-12 col-lg-12 col-sm-12 col-xs-12 colmspadding">
                                <p class="mb-1 font-weight-600"><span class="font-weight-700">Form Title:</span>
                                    <span>251 Attwell Drive - Operator Form - Monthly</span></p>

                                <p class="mb-0 font-weight-600"><span class="font-weight-700">Description:</span>
                                    <span>Are all portable fire extinguishers visually inspected every month?At minimum,
                                        the following list of items should be inspected extinguisher in proper location
                                        and mounted.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-2 queshadow">
                        <div class="card-body">
                           <div class="row pl-2 pr-2">
                                 <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
                                    <span class="question">Q : 1</span>
                                 </div>
         
                                 <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
                                    <div class="form-group mb-0 text-justify">
                                       <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">*</span> Emergency Power Systems &amp; Lighting</p>
                                       <p class="mb-1">Are the self-contained battery powered emergency lights inspected and tested at least once a month?</p>
                                    </div>
         
                                    <div class="form-group mb-0">
                                       <div class="row pl-2 pr-2">
                                          <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                                             <p class="font-weight-700 mb-1 text-justify">Answer</p>
                                             <p class="mb-1 text-justify">Choice 1</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                           </div>
                        </div>
                    </div>

                    <div class="card mb-2 queshadow">
                        <div class="card-body">
                           <div class="row pl-2 pr-2">
                                 <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
                                    <span class="question">Q : 2</span>
                                 </div>
         
                                 <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
                                    <div class="form-group mb-0">
                                       <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">*</span> Fire Alarm &amp; Voice Communication</p>
                                       <p class="mb-1 text-justify">Is the status of the trouble signal indicators on the fire panel checked every day?</p>
                                    </div>
         
                                    <div class="form-group mb-0">
                                       <div class="row pl-2 pr-2">
                                          <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                                             <p class="font-weight-700 mb-1 text-justify">Answer</p>
                                             <p class="mb-1 text-justify">Choice 2</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                           </div>
                        </div>
                    </div>

                    <div class="card mb-2 queshadow">
                        <div class="card-body">
                           <div class="row pl-2 pr-2">
                                 <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
                                    <span class="question">Q : 3</span>
                                 </div>
         
                                 <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
                                    <div class="form-group mb-0">
                                       <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">*</span> Fire Department Access</p>
                                       <p class="mb-1 text-justify">Is all fire department access for the building(s) and fire protection equipment maintained and kept free of obstructions?  This includes, but is not limited to streets, yards, roadways, sprinkler or standpipe connections, caps and access panels.</p>
                                    </div>
         
                                    <div class="form-group mb-0">
                                       <div class="row pl-2 pr-2">
                                          <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                                             <p class="font-weight-700 mb-1 text-justify">Answer</p>
                                             <p class="mb-1 text-justify">This includes, but is not limited to streets, yards, roadways, sprinkler or standpipe connections, caps and access panels.</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                           </div>
                        </div>
                    </div>

                    <div class="card mb-2 queshadow">
                        <div class="card-body">
                           <div class="row pl-2 pr-2">
                                 <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
                                    <span class="question">Q : 4</span>
                                 </div>
         
                                 <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
                                    <div class="form-group mb-0">
                                       <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">*</span> Portable Extinguishers</p>
                                       <p class="mb-1 text-justify">Are all portable fire extinguishers visually inspected every month?At minimum, the following list of items should be inspected:- extinguisher in proper location and mounted.- no obstructions to access or visibility.- fullness by pressure gauge reading (in operable range) and/or by hefting.                                                                                                                                                           - physical damage.- operating instructions visible.- safety seals and pull-ring in place.The fire extinguisher's tags, checklist or fire log book/records must be initialed and dated after each inspection.</p>
                                    </div>
         
                                    <div class="form-group mb-0">
                                       <div class="row pl-2 pr-2">
                                          <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                                             <p class="font-weight-700 mb-1 text-justify">Answer</p>
                                             <p class="mb-1 text-justify">This includes, but is not limited to streets, yards, roadways, sprinkler or standpipe connections, caps and access panels.</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                           </div>
                        </div>
                    </div>

                    <div class="card mb-2 queshadow">
                        <div class="card-body">
                           <div class="row pl-2 pr-2">
                                 <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
                                    <span class="question">Q : 5</span>
                                 </div>
         
                                 <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
                                    <div class="form-group mb-0">
                                       <p class="font-weight-700 mb-1 text-justify">Water-Based Fire Protection Systems</p>
                                       <p class="mb-1 text-justify">Are all supervisory signal services tested every six months for the items below?- valve supervisory switches- tank water level devices- building and tank water temperature supervisory devices- any other sprinkler system supervisory devices.</p>
                                    </div>
         
                                    <div class="form-group mb-0">
                                       <div class="row pl-2 pr-2">
                                          <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                                             <p class="font-weight-700 mb-1 text-justify">Answer</p>
                                             <p class="mb-1 text-justify">Choice 1</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                           </div>
                        </div>
                    </div>

                    <div class="card mb-2 queshadow">
                        <div class="card-body">
                           <div class="row pl-2 pr-2">
                                 <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
                                    <span class="question">Q : 6</span>
                                 </div>
         
                                 <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
                                    <div class="form-group mb-0">
                                       <p class="font-weight-700 mb-1 text-justify">Safety to Life</p>
                                       <p class="mb-1 text-justify">Is the status of the trouble signal indicators on the fire panel checked every day?</p>
                                    </div>
         
                                    <div class="form-group mb-0">
                                       <div class="row pl-2 pr-2">
                                          <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                                             <p class="font-weight-700 mb-1 text-justify">Answer</p>
                                             <p class="mb-1 text-justify">Choice 1, Choice 2, Choice 3</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                           </div>
                        </div>
                    </div>

                    <div class="card mb-2 queshadow">
                        <div class="card-body">
                           <div class="row pl-2 pr-2">
                                 <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
                                    <span class="question">Q : 7</span>
                                 </div>
         
                                 <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
                                    <div class="form-group mb-0">
                                       <p class="font-weight-700 mb-1 text-justify">Fire Access</p>
                                       <p class="mb-1 text-justify">Is all fire department access for the building(s) and fire protection equipment maintained and kept free of obstructions?  This includes, but is not limited to streets, yards, roadways, sprinkler or standpipe connections, caps and access panels.</p>
                                    </div>
         
                                    <div class="form-group mb-0">
                                       <div class="row pl-2 pr-2">
                                          <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                                             <p class="font-weight-700 mb-1 text-justify">Answer</p>
                                             <p class="mb-1 text-justify">27-Sept-2019</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                           </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer bg-white">
                    <a class="btn btn-success float-right btn-padding" data-dismiss="modal"><i
                            class="fa fa-times mr-2"></i>Close</a>
                </div>
            </div>
        </div>
    </div>

    <script src="assets/custom/js/footer.js"></script>

    <!-- jQuery  -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/waves.js"></script>
    <script src="assets/js/jquery.slimscroll.js"></script>

    <!-- Required datatable js -->
    <script src="assets/custom/plugins/datatable/js/jquery.dataTables.min.js"></script>
    <script src="assets/custom/plugins/datatable/js/fixcolumn.js"></script>
    <script src="assets/custom/plugins/datatable/Responsive/js/dataTables.responsive.js"></script>

    <script src="assets/plugins/bootstrap-select/js/bootstrap-select.js"></script>

    <script src="assets/custom/plugins/typeahead/js/bootstrap-typeahead.js"></script>
    <script src="assets/plugins/moment/moment.js"></script>
    <script src="assets/plugins/bootstrap-daterangepicker/daterangepicker.js"></script>
    <script src="assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>

    <!-- App js -->
    <script src="assets/js/jquery.core.js"></script>
    <script src="assets/js/jquery.app.js"></script>

    <script src="assets/custom/js/custom.js"></script>
    <script src="assets/custom/plugins/image_change/image-change.js"></script>
    <script src="assets/custom/plugins/jquery_confirm_v3/jquery-confirm.min.js"></script>
    <script src="assets/custom/plugins/jquery_confirm_v3/jquery-confirm-custom.js"></script>

    <script src="assets/custom/plugins/jasny-bootstrap/dist/js/jasny-bootstrap.min.js"></script>

    <script src="assets/custom/js/commonmodal.js"></script>

    <script>
        $('#ans_date').closest('div').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: "dd/mm/yyyy",
            clearBtn: true
        });

        $('#allpreview_date').closest('div').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: "dd/mm/yyyy",
            clearBtn: true
        });

        $('#date_from').closest('div').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: "dd/mm/yyyy",
            clearBtn: true
        });

        var formtable = $('#form_datatable').DataTable({
            destroy: true,
            scrollX: true,
            "bAutoWidth": true,
            paging: true,
            "bLengthChange": false,
            "columnDefs": [{
                "targets": 2,
                "orderable": false
            }],
            "pageLength": 10,
            fixedColumns: {
                rightColumns: 1,
                leftColumns: 0
            },
            language: {
                paginate: {
                    next: '<i class="fa fa-angle-double-right">',
                    previous: '<i class="fa fa-angle-double-left">'
                }
            },
            "dom": '<"top"pif>rt<"clear">'
        });

        $("#searchbtn").click(function(){
            $("#searchcollapse").trigger('click');
        });
    </script>

</body>

</html>
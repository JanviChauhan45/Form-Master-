<!DOCTYPE html>
<html lang="en">
    
<head>

<title>Profile</title>
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
<link rel="stylesheet" type="text/css" href="assets/custom/plugins/switchery/css/switchery.min.css"/>
    
<script src="assets/js/modernizr.min.js"></script>

</head>

<body class="background-image-body background1 square scrollbar-dusty-grass square thin">
<div class="preloader"></div>      
<!-- Navigation Bar-->
<header id="topnav">
<script src="assets/custom/js/header.js"></script>
<!-- end topbar-main -->

<script src="assets/custom/js/menu.js"></script>
<!-- end navbar-custom -->
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
                        <span class="badge filter badge-azure purplelable"  id="bluecolor" title="Blue"></span>
                        <span class="badge filter badge-warning yellowlable" id="yellowcolor" title="Yellow"></span>
                        <span class="badge filter badge-green dbluelable" id="greencolor" title="Green"></span>
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
                                <img src="assets/custom/images/theme-background/background1.jpg" class="imgactive" alt="BG1">
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

        <div class="row mt-2">
            <div class="col-xl-3 col-lg-4 col-sm-4 colmspadding">
                <div class="card mb-2">
                    <div class="card-body p-0">
                        <div class="panel panel-default">
                            <div class="panel-wrapper">
                                <div class="panel-body">
                                    <div class="profile-box">
                                        <div class="profile-cover-pic">
                                            <div class="profile-image-overlay"></div>
                                        </div>
                                        <div class="profile-info text-center mb-2">
                                            <div class="profile-img-wrap">
                                                <img class="inline-block" src="assets/images/users/avatar-2.jpg" alt="user">
                                                <div class="fileuploadimages btn btn-default">
                                                    <span class="btn-text">Edit</span>
                                                    <input class="upload" type="file">
                                                </div>
                                            </div>	
                                            <h4 class="block weight-500 text-capitalize txt-dark mb-1 mt-1">John Doe</h4>
                                            <h5 class="block mt-1 text-capitalize">Manager of Corporate IT</h5>
                                        </div>

                                        <hr class="mb-2">

                                        <div class="pl-2 pr-2">
                                            <div class="form-group mb-0">
                                                <p class="font-weight-600 mb-0">Email: </p>
                                                <p class="mb-0">john.doe@gmail.com</p>
                                            </div>
                                            <hr class="mb-2">
                                        </div>

                                        <div class="pl-2 pr-2">
                                            <div class="form-group">
                                                <p class="font-weight-600 mb-0">Contact No: </p>
                                                <p class="mb-0">9898900011</p>
                                            </div>
                                            <hr class="mb-2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-9 col-lg-8 col-sm-8 colmspadding">
                <div class="card">
                    <div class="card-body pl-2 pr-2 pb-0 pt-0">
                        <ul class="nav nav-pills navtab-bg pull-in ">
                            <li class="nav-item">
                                <a href="#users" data-toggle="tab" aria-expanded="true" class="nav-link navlink active">
                                    <i class="fa fa-users mr-2"></i>User Details
                                </a>
                            </li>

                            <li class="nav-item">
                                <a href="#settings" data-toggle="tab" aria-expanded="false" class="nav-link navlink">
                                    <i class="fa fa-cog mr-2"></i> Settings
                                </a>
                            </li>
                        </ul>
                        
                        <div class="tab-content p-0">
                            <div class="tab-pane show active" id="users">
                                <div class="card-body p-0 pt-2">
                                    <div class="row pl-2 pr-2">
                                        <div class="col-xl-12 col-lg-12 col-sm-12 col-xs-12 colmspadding">
                                            <h5 class="mt-0 border-bottom font-weight-600 pb-1 mb-2 text-info">Basic Details</h5>
                                        </div>
                                    </div>

                                    <div class="row pl-2 pr-2">
                                        <div class="col-xl-4 col-lg-5 col-sm-6 col-xs-12 colmspadding">
                                            <div class="form-group mb-2">
                                                <p class="font-weight-600 mb-0">Email: </p>
                                                <p class="mb-0">john.doe@gmail.com</p>
                                            </div>
                                        </div>
                                        
                                        <div class="col-xl-2 col-lg-4 col-sm-6 col-xs-12 colmspadding">
                                            <div class="form-group mb-2">
                                                <p class="font-weight-600 mb-0">Contact No.: </p>
                                                <p class="mb-0">9898900011</p>
                                            </div>
                                        </div>

                                        <div class="col-xl-2 col-lg-4 col-sm-6 col-xs-12 colmspadding">
                                            <div class="form-group mb-2">
                                                <p class="font-weight-600 mb-0">Gender: </p>
                                                <p class="mb-0">Male</p>
                                            </div>
                                        </div>
                                        
                                        <div class="col-xl-2 col-lg-3 col-sm-6 col-xs-12 colmspadding">
                                            <div class="form-group mb-2">
                                                <p class="font-weight-600 mb-0">Valid From: </p>
                                                <p class="mb-0">01-Mar-2020</p>
                                            </div>
                                        </div>

                                        <div class="col-xl-2 col-lg-3 col-sm-6 col-xs-12 colmspadding">
                                            <div class="form-group mb-2">
                                                <p class="font-weight-600 mb-0">Valid To: </p>
                                                <p class="mb-0">30-Nov-2020</p>
                                            </div>
                                        </div>

                                        <div class="col-xl-4 col-lg-4 col-sm-6 col-xs-12 colmspadding">
                                            <div class="form-group mb-2">
                                                <p class="font-weight-600 mb-0">Role: </p>
                                                <p class="mb-0">Admin</p>
                                            </div>
                                        </div>
                                    
                                        <div class="col-xl-2 col-lg-4 col-sm-6 col-xs-12 colmspadding">
                                            <div class="form-group mb-2">
                                                <p class="font-weight-600 mb-0">Language: </p>
                                                <p class="mb-0">English</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane" id="settings">
                                <div class="card-body p-0 pt-2">
                                    <div class="row pl-2 pr-2">
                                        <div class="col-xl-12 col-lg-12 col-sm-12 col-xs-12 colmspadding">
                                            <h5 class="mt-0 border-bottom font-weight-600 pb-1 mb-2 text-info">Notifications Setting</h5>
                                            <div class="table-responsive">
                                                <table class="table table-striped mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Description</th>
                                                            <th width="10%"><i class="fa fa-bell-o mr-2 font-16" aria-hidden="true"></i>Push</th>
                                                            <th width="10%"><i class="fa fa-envelope-o mr-2 font-16" aria-hidden="true"></i>Email</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr>
                                                            <td class="pt-2 pb-2">
                                                                <span class="font-weight-700">Form</span>
                                                                <p class="mb-0">These are notifications for when admin generates Form or when a Form is completed.</p>
                                                            </td>
                                                            <td class="text-center">
                                                                <div class="switchery-demo">
                                                                    <input type="checkbox" checked data-plugin="switchery" data-color="#64b0f2" data-size="small"/>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <div class="switchery-demo">
                                                                    <input type="checkbox" checked data-plugin="switchery" data-color="#64b0f2" data-size="small"/>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="pt-2 pb-2">
                                                                <span class="font-weight-700">System Notification</span>
                                                                <p class="mb-0">These are notifications for when Other system level trasanction generates.</p>
                                                            </td>
                                                            <td class="text-center">
                                                                <div class="switchery-demo">
                                                                    <input type="checkbox" checked data-plugin="switchery" data-color="#64b0f2" data-size="small"/>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <div class="switchery-demo">
                                                                    <input type="checkbox" checked data-plugin="switchery" data-color="#64b0f2" data-size="small"/>
                                                                </div>
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
            </div>
        </div>                

    </div>
</div>
<!-- end wrapper -->
    
<script src="assets/custom/js/footer.js"></script>

<!-- jQuery  -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/waves.js"></script>
<script src="assets/js/jquery.slimscroll.js"></script>

<script src="assets/custom/plugins/switchery/js/switchery.min.js"></script>

<!-- Required datatable js -->
<script src="assets/custom/plugins/datatable/js/jquery.dataTables.min.js"></script>
<script src="assets/custom/plugins/datatable/js/fixcolumn.js"></script>
<script src="assets/custom/plugins/datatable/Responsive/js/dataTables.responsive.js"></script>

<script src="assets/plugins/bootstrap-select/js/bootstrap-select.js"></script>

<script src="assets/custom/plugins/jasny-bootstrap/dist/js/jasny-bootstrap.min.js"></script>
    
<!-- App js -->
<script src="assets/js/jquery.core.js"></script>
<script src="assets/js/jquery.app.js"></script>
<script src="assets/custom/js/custom.js"></script>
<script src="assets/custom/plugins/image_change/image-change.js"></script>
<script src="assets/custom/plugins/jquery_confirm_v3/jquery-confirm.min.js"></script>
<script src="assets/custom/plugins/jquery_confirm_v3/jquery-confirm-custom.js"></script>

<script src="assets/custom/js/commonmodal.js"></script>

</body>

</html>
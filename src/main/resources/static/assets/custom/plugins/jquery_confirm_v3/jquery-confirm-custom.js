$('.example1').on('click', function () {
    $.alert({
        title: 'Alert!',
        content: 'Simple alert!',
    });
});

$('.delete1').on('click', function () {
    $.confirm({
        title: 'Delete Contact Person!',
        content: 'please be sure before deleting Contact Person',
        theme: 'material',
        icon: 'fas fa-warning',
        type: 'red',
        buttons: {
            omg: {
                text: 'Delete',
                btnClass: 'btn-red',
            },
            close: function () {
            }
        }
    });
});


$('.example2').on('click', function () {
    $.confirm({
        title: 'Update Title..!',
        content: 'Are you sure want to Update Title ?',
        type: 'orange',
        buttons: {
            yes: {
                btnClass: 'btn-orange',
                action: function(){
                    $.alert('Title has been Updated!');
                }
            },
            cancel: {
                btnClass: 'btn-red',
                action: function(){}
            },
            
        }
    });
});


$('.example2-2').on('click', function () {
    $.confirm({
        title: 'Prompt!',
        content: '' +
        '<form action="" class="formName">' +
        '<div class="form-group">' +
        '<label>Enter something here</label>' +
        '<input type="text" placeholder="Your name" class="name form-control" required />' +
        '</div>' +
        '</form>',
        buttons: {
            formSubmit: {
                text: 'Submit',
                btnClass: 'btn-blue',
                action: function () {
                    var name = this.$content.find('.name').val();
                    if (!name) {
                        $.alert('provide a valid name');
                        return false;
                    }
                    $.alert('Your name is ' + name);
                }
            },
            cancel: function () {
                //close
            },
        },
        onContentReady: function () {
            // you can bind to the form
            var jc = this;
            this.$content.find('form').on('submit', function (e) { // if the user submits the form by pressing enter in the field.
                e.preventDefault();
                jc.$$formSubmit.trigger('click'); // reference the button and click it
            });
        }
    });
});

$('.example2-1').on('click', function () {
    $.dialog({
        title: 'Text content!',
        content: 'Simple modal!',
        buttons: {
            aRandomButton: function () {
                // this will be removed.
            }
        }
    });
});

$('.example2-1-1').confirm({
    content: "This will take you to my twitter <br> You can access the clicked element by <code>this.$target</code>",
});

$('.example-sh-1').click(function (e) {
    e.preventDefault();
    $.alert('Content here', 'Title here');
});
$('.example-sh-2').click(function (e) {
    e.preventDefault();
    $.confirm('A message', 'Title is optional');
});
$('.example-sh-3').click(function (e) {
    e.preventDefault();
    $.dialog('Just to let you know');
});

$('.example3').on('click', function () {
    $.confirm({
        buttons: {
            hey: function () {
                // here the button key 'hey' will be used as the text.
                $.alert('You clicked on "hey".');
            },
            heyThere: {
                text: 'hey there!', // With spaces and symbols
                action: function () {
                    $.alert('You clicked on "heyThere"');
                }
            }
        }
    })
});


$('.example3-1').on('click', function () {
    $.confirm({
        buttons: {
            default: {
                btnClass: 'btn-default',
            },
            info: {
                btnClass: 'btn-info',
            },
            success: {
                btnClass: 'btn-success custom-class',
            },
            danger: {
                btnClass: 'btn-danger custom-class',
            },
            warning: {
                btnClass: 'btn-warning',
            },
        }
    });
});
$('.example3-1-jc').on('click', function () {
    $.confirm({
        buttons: {
            default: {
                btnClass: 'btn-default',
            },
            blue: {
                btnClass: 'btn-blue',
            },
            green: {
                btnClass: 'btn-green',
            },
            red: {
                btnClass: 'btn-red',
            },
            orange: {
                btnClass: 'btn-orange',
            },
            purple: {
                btnClass: 'btn-purple',
            },
            dark: {
                btnClass: 'btn-dark',
            },
        }
    });
});


$('.example3-1-a').on('click', function () {
    $.confirm({
        title: 'Keyboard wins',
        content: 'Time to use your keyboard, press shift, alert, A or B',
        buttons: {
            specialKey: {
                text: 'On behalf of shift',
                keys: [
                    'shift',
                    'alt'
                ],
                action: function () {
                    $.alert('Shift or Alt was pressed');
                }
            },
            alphabet: {
                text: 'A, B',
                keys: [
                    'a',
                    'b'
                ],
                action: function () {
                    $.alert('A or B was pressed');
                }
            }
        }
    });
});

$('.example3-1-1').on('click', function () {
    $.confirm({
        title: false,
        content: 'Imagine a very critical action here! <br> ' +
        'Please press <strong style="font-size: 20px;">Y</strong> to proceed.',
        buttons: {
            yes: {
                isHidden: true,
                keys: ['y'],
                action: function () {
                    $.alert('Critical action <strong>was performed</strong>.');
                }
            },
            no: {
                keys: ['N'],
                action: function () {
                    $.alert('You clicked No.');
                }
            },
        }
    });
});


$('.example21-t-1').on('click', function () {
    $.confirm({
        title: 'Encountered an error!',
        content: 'Something went downhill, this may be serious',
        icon: 'fas fa-warning',
        type: 'red',
        buttons: {
            omg: {
                text: 'Try again',
                btnClass: 'btn-red',
            },
            close: function () {
            }
        }
    });
});
$('.example21-t-2').on('click', function () {
    $.confirm({
        title: 'Congratulations!',
        content: 'Consider something great happened, and you have to show a positive message.',
        type: 'green',
        buttons: {
            omg: {
                text: 'Thank you!',
                btnClass: 'btn-green',
            },
            close: function () {
            }
        }
    });
});
$('.example21-t-3').on('click', function () {
    $.confirm({
        title: 'Encountered an error!',
        content: 'Something went downhill, this may be serious',
        type: 'red',
        typeAnimated: false,
        buttons: {
            omg: {
                text: 'Try again',
                btnClass: 'btn-red',
            },
            close: function () {
            }
        }
    });
});
$('.example21-t-4').on('click', function () {
    $.confirm({
        title: 'Orange!',
        content: 'Some content here.',
        type: 'orange',
    });
});
$('.example21-t-5').on('click', function () {
    $.confirm({
        title: 'Blue!',
        content: 'Some content here.',
        type: 'blue',
    });
});
$('.example21-t-6').on('click', function () {
    $.confirm({
        title: 'Purple!',
        content: 'Some content here.',
        type: 'purple',
    });
});
$('.example21-t-7').on('click', function () {
    $.confirm({
        title: 'Dark!',
        content: 'Some content here.',
        type: 'dark',
    });
});


$('.example21-2').on('click', function () {
    $.confirm({
        icon: 'fas fa-exclamation-triangle', // glyphicon glyphicon-heart
        title: 'font-awesome'
    });
});
$('.example21-3').on('click', function () {
    $.alert({
        icon: 'fas fa-spinner fa-spin',
        title: 'Working!',
        content: 'Sit back, we are processing your request. <br>The animated icon is provided by Font-Awesome!'
    });
});


$('.example15-1-3-4').click(function () {
    $.alert({
        closeIcon: true,
    });
});
$('.example15-1-3-6').click(function () {
    $.alert({
        closeIcon: true,
        closeIconClass: 'fas fa-times'
    })
});
$('.example15-1-3-5-1').click(function () {
    $.confirm({
        content: "The close icon is now handled by 'aRandomButton', if the button returns a falsy value the modal will not close." +
        "<br>Click on the close icon to try it out",
        closeIcon: 'aRandomButton', // set a button handler
        buttons: {
            aRandomButton: function () {
                $.alert('A random button is called, and i prevent closing the modal');
                return false; // you shall not pass
            },
            close: function () {
            }
        }
    });
});



$('.grid-1').on('click', function () {
    $.confirm({
        columnClass: 'medium',
    }); // empty because its default.
});
$('.grid-2').on('click', function () {
    $.confirm({
        columnClass: 'small',
    });
});
$('.grid-5').on('click', function () {
    $.confirm({
        columnClass: 'xlarge'
    });
});
$('.grid-6').on('click', function () {
    $.confirm({
        columnClass: 'xlarge',
        containerFluid: true,
    });
});


$('.grid-wo-bootstrap-1').on('click', function () {
    $.confirm({
        boxWidth: '30%',
        useBootstrap: false,
    });
});
$('.grid-wo-bootstrap-2').on('click', function () {
    $.confirm({
        boxWidth: '500px',
        useBootstrap: false,
    });
});

$('.example-draggable').click(function () {
    $.alert({
        title: 'Hello there',
        content: 'click and hold on the title to drag',
        draggable: true,
    });
});


$('.example-draggable-border').click(function () {
    $.alert({
        title: 'Hello there',
        content: 'Drag this modal out of the window',
        draggable: true,
        dragWindowBorder: false,
    });
});


$('.example-draggable-gap-0').click(function () {
    $.alert({
        title: 'Hello there',
        content: 'try to drag this modal out of the window',
        draggable: true,
        dragWindowGap: 0,
    });
});
$('.example-draggable-gap-100').click(function () {
    $.alert({
        title: 'Hello there',
        content: 'try to drag this modal out of the window',
        draggable: true,
        dragWindowGap: 100,
    });
});


$('.example18-1').on('click', function () {
    $.confirm({
        title: 'Title',
        content: 'assets/custom_plugins/jquery_confirm_v3/:text.txt',
        onContentReady: function () {
            var self = this;
            this.setContentPrepend('<div>Prepended text</div>');
            setTimeout(function () {
                self.setContentAppend('<div>Appended text after 2 seconds</div>');
            }, 2000);
        },
        animation: 'scale',
        columnClass: 'medium',
        closeAnimation: 'scale',
    });
});


$('.example18-2').on('click', function () {
    $.confirm({
        content: function () {
            var self = this;
            self.setContent('This plugin\'s bower file');
            return $.ajax({
                url: 'assets/custom_plugins/jquery_confirm_v3/bower.json',
                dataType: 'json',
                method: 'get'
            }).done(function (response) {
                self.setContentAppend('<br>Description: ' + response.description);
                self.setContentAppend('<br>Version: ' + response.version);
                self.setTitle(response.name);
            }).fail(function () {
                self.setContent('Something went wrong.');
            }).always(function () {
            });
        },
    });
});


$('.example18-1-1').on('click', function () {
    $.confirm({
        content: 'url:text.txt',
        contentLoaded: function (data, status, xhr) {
            // data is already set in content
            this.setContentAppend('<br>Status: ' + status);
        }
    });
});
$('.example18-1-1-1').on('click', function () {
    $.confirm({
        content: function () {
            var self = this;
            self.setContent('Checking callback flow');
            return $.ajax({
                url: 'bower.json',
                dataType: 'json',
                method: 'get'
            }).done(function (response) {
                self.setContentAppend('<div>Done!</div>');
            }).fail(function () {
                self.setContentAppend('<div>Fail!</div>');
            }).always(function () {
                self.setContentAppend('<div>Always!</div>');
            });
        },
        contentLoaded: function (data, status, xhr) {
            this.setContentAppend('<div>Content loaded!</div>');
        },
        onContentReady: function () {
            this.setContentAppend('<div>Content ready!</div>');
        }
    });
});


$('.example20').on('click', function () {
    $.confirm({
        title: 'Delete user?',
        content: 'This dialog will automatically trigger \'cancel\' in 6 seconds if you don\'t respond.',
        autoClose: 'cancelAction|20000',
        buttons: {
            deleteUser: {
                text: 'delete user',
                action: function () {
                    $.alert('Deleted the user!');
                }
            },
            cancelAction: function () {
                $.alert('action is canceled');
            }
        }
    });
});
$('.example21').on('click', function () {
    $.confirm({
        title: 'Logout?',
        content: 'Your time is out, you will be automatically logged out in 10 seconds.',
        autoClose: 'logoutUser|10000',
        buttons: {
            logoutUser: {
                text: 'logout myself',
                action: function () {
                    $.alert('The user was logged out');
                }
            },
            cancel: function () {
                $.alert('canceled');
            }
        }
    });
});


$('.example22').on('click', function () {
    $.confirm({
        backgroundDismiss: 'buttonName',
        content: 'in here the backgroundDismiss action is handled by buttonName' +
        '<div class="checkbox"><label><input type="checkbox" id="enableCheckbox"> Enable backgroundDismiss</label></div>',
        buttons: {
            buttonName: function () {
                var $checkbox = this.$content.find('#enableCheckbox');
                return $checkbox.prop('checked');
            },
            close: function () {
            }
        }
    });
});


$('.example22-1-1-1').on('click', function () {
    $.confirm({
        backgroundDismiss: false,
        backgroundDismissAnimation: 'shake',
    });
});
$('.example22-1-1-2').on('click', function () {
    $.confirm({
        backgroundDismiss: false,
        backgroundDismissAnimation: 'glow',
    });
});


$('.example22-1').on('click', function () {
    $.confirm({
        escapeKey: true,
        backgroundDismiss: false,
    });
});
$('.example22-1-2').on('click', function () {
    $.confirm({
        escapeKey: 'buttonName',
        buttons: {
            buttonName: function () {
                $.alert('Button name was called');
            },
            close: function () {

            }
        }
    });
});


$('.example23-1-1').on('click', function () {
    $.alert({
        title: 'پیغام',
        content: 'این یک متن به زبان شیرین فارسی است',
        rtl: true,
        theme: 'light',
        closeIcon: true,
        buttons: {
            confirm: {
                text: 'تایید',
                btnClass: 'btn-blue',
                action: function () {
                    $.alert('تایید شد.');
                }
            },
            cancel: {
                text: 'انصراف',
                action: function () {

                }
            }
        }
    });
});
$('.example23-1-1-1').on('click', function () {
    $.alert({
        title: 'پیغام',
        icon: 'fa fa-rocket',
        content: 'این یک متن به زبان شیرین فارسی است',
        rtl: true,
        theme: 'light',
        closeIcon: true,
        buttons: {
            confirm: {
                text: 'تایید',
                btnClass: 'btn-blue',
                action: function () {
                    $.alert('تایید شد.');
                }
            },
            cancel: {
                text: 'انصراف',
                action: function () {

                }
            }
        }
    });
});


$('.example22-1-1').on('click', function () {
    $.confirm({
        title: false,
        content: 'url:callback.html',
        onContentReady: function () {
            alert('onContentReady');
            var self = this;
            this.buttons.ok.disable();
            this.$content.find('.btn').click(function () {
                self.$content.find('input').val('Chuck norris');
                self.buttons.ok.enable();
            });
        },
        contentLoaded: function (data, status, xhr) {
            alert('contentLoaded: ' + status);
        },
        onOpenBefore: function () {
            alert('onOpenBefore');
        },
        onOpen: function () {
            alert('onOpen');
        },
        onClose: function () {
            alert('onClose');
        },
        onDestroy: function () {
            alert('onDestroy');
        },
        onAction: function (btnName) {
            alert('onAction: ' + btnName);
        },
        buttons: {
            ok: function () {

            }
        }
    });
});


$('.example16-a-1').on('click', function () {
    $.confirm({
        animation: 'scale',
        closeAnimation: 'scale',
    });
});
$('.example17-a-2').on('click', function () {
    $.confirm({
        animation: 'rotateY',
        closeAnimation: 'rotateY',
    });
});
$('.example18-a-3').on('click', function () {
    $.confirm({
        animation: 'rotateYR',
        closeAnimation: 'rotateYR'
    });
});
$('.example19-a-4').on('click', function () {
    $.confirm({
        animation: 'rotateX',
        closeAnimation: 'rotateX'
    });
});
$('.example19-a-5').on('click', function () {
    $.confirm({
        animation: 'rotateXR',
        closeAnimation: 'rotateXR'
    });
});
$('.example16').on('click', function () {
    $.confirm({
        animation: 'right',
        closeAnimation: 'right',
        animateFromElement: false,
    });
});
$('.example17').on('click', function () {
    $.confirm({
        animation: 'left',
        closeAnimation: 'left',
        animateFromElement: false,
    });
});
$('.example18').on('click', function () {
    $.confirm({
        animation: 'bottom',
        closeAnimation: 'bottom',
        animateFromElement: false,
    });
});
$('.example19').on('click', function () {
    $.confirm({
        animation: 'top',
        closeAnimation: 'top',
        animateFromElement: false,
    });
});
$('.example11').on('click', function () {
    $.confirm({
        animation: 'Rotate',
        closeAnimation: 'Rotate',
        animateFromElement: false,
    });
});
$('.example12').on('click', function () {
    $.confirm({
        animation: 'none',
        animateFromElement: false,
    });
});
$('.example13').on('click', function () {
    $.confirm({
        animation: 'opacity',
        closeAnimation: 'opacity',
        animateFromElement: false,
    });
});
$('.example15').on('click', function () {
    $.confirm({
        animation: 'scale',
        closeAnimation: 'scale',
        animateFromElement: false,
    });
});
$('.example14').on('click', function () {
    $.confirm({
        animation: 'zoom',
        closeAnimation: 'zoom',
        animateFromElement: false,
    });
});
$('.example7').on('click', function () {
    $.confirm({
        animation: 'scaleY',
        closeAnimation: 'scaleY',
        animateFromElement: false,
    })
});
$('.example8').on('click', function () {
    $.confirm({
        animation: 'scaleX',
        closeAnimation: 'scaleX',
        animateFromElement: false,
    })
});
$('.example9').on('click', function () {
    $.confirm({
        animation: 'rotateY',
        closeAnimation: 'rotateY',
        animateFromElement: false,
    });
});
$('.example9-2').on('click', function () {
    $.confirm({
        animation: 'rotateYR',
        closeAnimation: 'rotateYR',
        animateFromElement: false,
    });
});
$('.example10').on('click', function () {
    $.confirm({
        animation: 'rotateX',
        closeAnimation: 'rotateX',
        animateFromElement: false,
    });
});
$('.example10-2').on('click', function () {
    $.confirm({
        animation: 'rotateXR',
        closeAnimation: 'rotateXR',
        animateFromElement: false,
    });
});
$('.example-bounce-1').on('click', function () {
    $.confirm({
        animationBounce: 1
    });
});
$('.example-bounce-2').on('click', function () {
    $.confirm({
        animationBounce: 1.5
    });
});
$('.example-bounce-3').on('click', function () {
    $.confirm({
        animationBounce: 2
    });
});
$('.example-bounce-4').on('click', function () {
    $.confirm({
        animationBounce: 2.5
    });
});
$('.example19-1').on('click', function () {
    $.confirm({
        animationSpeed: 2000
    });
});
$('.example19-2').on('click', function () {
    $.confirm({
        animationSpeed: 200
    });
});
$('.custom-anim-1').on('click', function () {
    $.confirm({
        animation: 'news',
        closeAnimation: 'news',
    });
});
$('.custom-bg-1').on('click', function () {
    $.confirm({
        backgroundDismissAnimation: 'random'
    });
});


$('.example4').on('click', function () {
    $.confirm({
        icon: 'fa fa-question',
        theme: 'white',
        closeIcon: true,
        animation: 'scale',
        type: 'orange',
    });
});
$('.example5').on('click', function () {
    $.confirm({
        icon: 'fa fa-question',
        theme: 'black',
        closeIcon: true,
        animation: 'scale',
        type: 'orange',
    });
});
$('.example5-3').on('click', function () {
    $.confirm({
        icon: 'fa fa-question',
        theme: 'supervan',
        closeIcon: true,
        animation: 'scale',
        type: 'orange',
    });
});
$('.example5-3-1').on('click', function () {
    $.confirm({
        icon: 'fa fa-question',
        theme: 'material',
        closeIcon: true,
        animation: 'scale',
        type: 'orange',
    });
});
$('.example5-3-2').on('click', function () {
    $.confirm({
        icon: 'fa fa-question',
        theme: 'bootstrap',
        closeIcon: true,
        animation: 'scale',
        type: 'orange',
    });
});
$('.example5-3-3').on('click', function () {
    $.confirm({
        icon: 'fa fa-question',
        theme: 'modern',
        closeIcon: true,
        animation: 'scale',
        type: 'orange',
    });
});
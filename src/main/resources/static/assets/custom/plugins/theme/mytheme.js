var color_code_light = localStorage.getItem('--color-code-light');
var color_code_hover = localStorage.getItem('--color-code-hover');
var color_code = localStorage.getItem('--color-code');

if (null == color_code) {
color_code = 'rgba(65, 105, 225,1)';
}
if (null == color_code_hover) {
color_code_hover = 'rgba(65, 105, 225,0.8)';
}

if (null == color_code_light) {
color_code_light = 'rgba(65, 105, 225,0.05)';
}
document.documentElement.style.setProperty('--color-code-light', color_code_light);
document.documentElement.style.setProperty('--color-code-hover', color_code_hover);
document.documentElement.style.setProperty('--color-code', color_code);


window.onload = function(){
    
    var themecolorNameDoc = document.getElementById("themeColorName");
    if(null!=themecolorNameDoc && undefined!=themecolorNameDoc){
    var x = themecolorNameDoc.querySelectorAll("span");
    for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('click', function(event,thiss) {
    var ID = event.currentTarget.id;
    for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
    }
    event.currentTarget.classList.add('active');        
    switch (ID) {
    case "bluecolor":
        changeThemeColorFn('rgba(65, 105, 225,0.05)','rgba(65, 105, 225,0.8)','rgba(65, 105, 225,1)');
    break;
    case "greencolor":
    changeThemeColorFn('rgba(21, 193, 165,0.05)','rgba(21, 193, 165,0.8)','rgba(21, 193, 165,1)');
    break;
    case "yellowcolor":
    changeThemeColorFn('rgba(241, 137, 3,0.05)','rgba(241, 137, 3,0.8)','rgba(241, 137, 3,1)');
    break;
    case "redcolor":
    changeThemeColorFn('rgba(146, 127, 191,0.05)','rgba(146, 127, 191,0.8)','rgba(146, 127, 191,1)');
    break;
    default:
        changeThemeColorFn('rgba(65, 105, 225,0.05)','rgba(65, 105, 225,0.8)','rgba(65, 105, 225,1)');
    }
    });
    }
    }
}
    
    	
function changeThemeColorFn(...args){
    if(null!=args && args.length>2){
        var color_code_light_local = args[0];
        var color_code_hover_local = args[1];
        var color_code_local = args[2];
        
        document.documentElement.style.setProperty('--color-code-light', color_code_light_local);
        document.documentElement.style.setProperty('--color-code-hover', color_code_hover_local);
        document.documentElement.style.setProperty('--color-code', color_code_local);


        localStorage.setItem('--color-code-light', color_code_light_local);
     localStorage.setItem('--color-code-hover', color_code_hover_local);
   localStorage.setItem('--color-code', color_code_local);	
    }
}
//$(document).ready(function () {
	var color_code_src = sessionStorage.getItem('--imageFile');
				
	
	if(null == color_code_src){
		color_code_src = '../../../custom/images/theme-background/download.jpg';
	}
	
	//$('.brand-logo').attr('src', color_code_src);
	
	/* document.documentElement.style.setProperty('--color-code-light', color_code_light);
	document.documentElement.style.setProperty('--color-code-hover', color_code_hover);
	document.documentElement.style.setProperty('--color-code', color_code);
	document.documentElement.style.setProperty('--color-code-card', color_code_card);
	document.documentElement.style.setProperty('--color-code-card-hover', color_code_card_hover);
	document.documentElement.style.setProperty('--color-code-font', color_code_font);
	 */
	/* document.addEventListener("DOMSubtreeModified", function () {
		// your code
		var list = document.querySelectorAll(".k-select,button.k-button.k-primary,.k-dropdown");
		for (var i = 0; i < list.length; ++i) {
			list[i].classList.add('themeColor');
		}
	}, false); */
//});
window.onload = function(){
	
		
	var themecolorNameDoc = document.getElementById("themeBackground");
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
					    case "image1":				
							changeThemeColorFn('../../../custom/images/theme-background/download.jpg');
							break;
						case "image2":
							changeThemeColorFn('../../../custom/images/theme-background/DSC00353-01.jpg');
							break;
						default:
							changeThemeColorFn('../../../custom/images/theme-background/IMG_20181108_072711-01.jpg');
				}
			});
		}
	}
};

/* function setSrcLogo(){
	var logo = document.getElementById("brand-logo");
	if(null!=logo)
		logo.src = color_code_src;
}
 */
		/* function resetFn() {

			changeThemeColorFn('rgba(250,201,0,0.05)','rgba(250,201,0,0.5)','rgba(250,201,0,1)',
				'rgba(255,255,255,1)','rgba(0,0,0,0.8)','rgba(0,0,0,0.5)','assets/images/efive/logo_yellow.png');
		} */

		/* function adjustDropDownWidth(e) {
			var listContainer = e.sender.list.closest(".k-list-container");
		  //   listContainer.width(listContainer.width() + kendo.support.scrollbar());
		  listContainer.width("auto");
		  }    */ 

		function changeThemeColorFn(...args){
			if(null!=args && args.length>0){
				/* var color_code_light = args[0];
				var color_code_hover = args[1];
				var color_code = args[2];
				var color_code_font = args[3];
				var color_code_card = args[4];
				var color_code_card_hover = args[5]; */
				var png_path = args[0];

				/* document.documentElement.style.setProperty('--color-code-light', color_code_light);
				document.documentElement.style.setProperty('--color-code-hover', color_code_hover);
				document.documentElement.style.setProperty('--color-code', color_code);
				document.documentElement.style.setProperty('--color-code-font', color_code_font);
				document.documentElement.style.setProperty('--color-code-card', color_code_card);
				document.documentElement.style.setProperty('--color-code-card-hover', color_code_card_hover);

				sessionStorage.setItem('--color-code-light', color_code_light);
				sessionStorage.setItem('--color-code-hover', color_code_hover);
				sessionStorage.setItem('--color-code', color_code);
				sessionStorage.setItem('--color-code-card', color_code_card);
				sessionStorage.setItem('--color-code-card-hover', color_code_card_hover);
				sessionStorage.setItem('--color-code-font', color_code_font); */
				sessionStorage.setItem('--imageFile', png_path);
				$('.brand-logo').attr('src', png_path);
			
			}
		}			
			

		//$('.brand-logo').attr('src', 'assets/images/efive/logo_yellow.png');
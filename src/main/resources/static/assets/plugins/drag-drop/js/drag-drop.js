/*=========================================================================================
    File Name: drag-drop.js
    Description: drag & drop elements using dragula js
    -------------------------------------------------------------------------------------- */
let dragula123 = null;
$(document).ready(function(){

	// Draggable Cards
    dragula123 = dragula([document.getElementById('card-drag-area')]);
    //console.log(dragula123);
    
//    dragula(isContainer: function (el) { return el.classList.contains('card-drag-area'); });
});

function extracted1() {
 if ( $(window).width() < 767 && dragula123) {
     dragula123.destroy();
 }
}
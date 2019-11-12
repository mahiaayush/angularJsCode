//function for open and close right side navigation Settings
function openNav() {
   document.getElementById("mySidenav").style.width = "350px";
   document.getElementById("sidemenuBackDrop").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("sidemenuBackDrop").style.display = "none";
}

 //right navigation slider for selecting theme
	$(document).ready(function(){
      $('.slider').bxSlider({
	      minSlides: 2,
          maxSlides: 2,
          slideWidth: 156,
          moveSlides: 1,
          pager:false,
          speed:1000,
	  });
    });
	
//===adding class for fix navigation=-==
	$(window).scroll(function () {
		var sc = $(window).scrollTop()
		if (sc > 100) {
			$("#nav").addClass("fix-header")
		} else {
			$("#nav").removeClass("fix-header")
		}
	});
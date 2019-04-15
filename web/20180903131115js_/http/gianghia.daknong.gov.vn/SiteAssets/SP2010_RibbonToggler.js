var ks = "abc";
function ShowRibbon() 
{
   $("#s4-ribbonrow").show();
   $(".ribbonbackground").show();

}

function HideRibbon() 
{
	  $("#s4-ribbonrow").hide();
      $(".ribbonbackground").hide();
}

$(document).ready(function()
{
	
   if (typeof _spUserId == "undefined") 
   {
      HideRibbon();
   }
   else 
   {
      ShowRibbon();
   }
});

$(document).keydown(function (e) 
{
	
   if (e.keyCode == 17) {if (ks == "b"){ ks = "a" + ks; }else{ ks = "a";} return false; }
   if (e.keyCode == 16) { if (ks == "a") { ks = ks + "b";}else{ ks = "b";} return false;  }
   if (e.keyCode == 82) 
   {
    	if (ks == "ab") 
    	{ 
	         if($("#s4-ribbonrow").css("display")=="none") 
	         {
	         	ShowRibbon();
	         } 
	         else 
	         {
				HideRibbon();
	         }	         
	         return false;
        } 
   }
	return true;
});


$(document).keyup(function (e) 
{
	 if (e.keyCode == 17 || e.keyCode == 16) { ks = "";}

});

  

/*
     FILE ARCHIVED ON 00:42:21 Jul 10, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:38:07 Apr 06, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 117.994 (3)
  esindex: 0.007
  captures_list: 154.886
  CDXLines.iter: 12.48 (3)
  PetaboxLoader3.datanode: 115.205 (4)
  exclusion.robots: 0.144
  exclusion.robots.policy: 0.134
  RedisCDXSource: 21.699
  PetaboxLoader3.resolve: 254.802
  load_resource: 302.196
*/
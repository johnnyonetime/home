document.title=gs("Change Password");if(document.getElementById("_docwrite_changemasterpw1"))document.getElementById("_docwrite_changemasterpw1").innerHTML=gs("Change Password");if(document.getElementById("_docwrite_changemasterpw2"))document.getElementById("_docwrite_changemasterpw2").innerHTML=gs("Email");if(document.getElementById("_docwrite_changemasterpw3"))document.getElementById("_docwrite_changemasterpw3").innerHTML=gs("Old Password");
if(document.getElementById("_docwrite_changemasterpw4"))document.getElementById("_docwrite_changemasterpw4").innerHTML=gs("New Master Password");if(document.getElementById("_docwrite_changemasterpw6"))document.getElementById("_docwrite_changemasterpw6").innerHTML=gs("Confirm Password");
document.addEventListener("DOMContentLoaded",function(){document.getElementById("lpform").onsubmit=function(){do_submit();return false};document.getElementById("email").addEventListener("keyup",function(){update_password_meter(document.getElementById("email").value,document.getElementById("masterpassword").value)});document.getElementById("origmasterpassword").addEventListener("keyup",function(){update_password_meter(g_username,document.getElementById("masterpassword").value)});document.getElementById("masterpassword").addEventListener("keyup",
function(){update_password_meter(g_username,document.getElementById("masterpassword").value)});document.getElementById("changeyourpassword").addEventListener("click",function(){do_submit()});document.getElementById("nothanks").addEventListener("click",function(){getBG().closecurrenttab("changemasterpw.html")})});
document.title=gs("My LastPass Vault");document.getElementById("_docwrite_homelocal21")&&(document.getElementById("_docwrite_homelocal21").innerHTML=gs("Logoff"));document.getElementById("_docwrite_homelocal22")&&(document.getElementById("_docwrite_homelocal22").innerHTML=gs("Open Favorites"));document.getElementById("_docwrite_homelocal23")&&(document.getElementById("_docwrite_homelocal23").innerHTML=gs("Bookmarklets"));
document.getElementById("_docwrite_homelocal24")&&(document.getElementById("_docwrite_homelocal24").innerHTML=gs("History"));document.getElementById("_docwrite_homelocal25")&&(document.getElementById("_docwrite_homelocal25").innerHTML=gs("Import"));document.getElementById("_docwrite_homelocal26")&&(document.getElementById("_docwrite_homelocal26").innerHTML=gs("Export"));document.getElementById("_docwrite_homelocal27")&&(document.getElementById("_docwrite_homelocal27").innerHTML=gs("One Time Passwords"));
document.getElementById("_docwrite_homelocal28")&&(document.getElementById("_docwrite_homelocal28").innerHTML=gs("Show Deleted Sites"));document.getElementById("_docwrite_homelocal29")&&(document.getElementById("_docwrite_homelocal29").innerHTML=gs("Actions"));document.getElementById("_docwrite_homelocal210")&&(document.getElementById("_docwrite_homelocal210").innerHTML=gs("Enterprise Console"));
document.getElementById("_docwrite_homelocal211")&&(document.getElementById("_docwrite_homelocal211").innerHTML=gs("Manage Shared Folders"));document.getElementById("_docwrite_homelocal212")&&(document.getElementById("_docwrite_homelocal212").innerHTML=gs("Settings"));document.getElementById("_docwrite_homelocal213")&&(document.getElementById("_docwrite_homelocal213").innerHTML=gs("Add Site"));
document.getElementById("_docwrite_homelocal214")&&(document.getElementById("_docwrite_homelocal214").innerHTML=gs("Add Secure Note"));document.getElementById("_docwrite_homelocal215")&&(document.getElementById("_docwrite_homelocal215").innerHTML=gs("Create Group"));document.getElementById("_docwrite_homelocal216")&&(document.getElementById("_docwrite_homelocal216").innerHTML=gs("User Manual"));
document.getElementById("_docwrite_homelocal217")&&(document.getElementById("_docwrite_homelocal217").innerHTML=gs("Security Check"));document.getElementById("_docwrite_homelocal218")&&(document.getElementById("_docwrite_homelocal218").innerHTML=gs("Vault"));document.getElementById("_docwrite_homelocal219")&&(document.getElementById("_docwrite_homelocal219").innerHTML=gs("Form Fill Profiles"));
document.getElementById("_docwrite_homelocal220")&&(document.getElementById("_docwrite_homelocal220").innerHTML=gs("Identities"));document.getElementById("_docwrite_homelocal221")&&(document.getElementById("_docwrite_homelocal221").innerHTML=gs("Shares"));document.getElementById("_docwrite_homelocal222")&&(document.getElementById("_docwrite_homelocal222").innerHTML=gs("Credit Monitoring"));
document.getElementById("_docwrite_homelocal223")&&(document.getElementById("_docwrite_homelocal223").innerHTML=gs("Enterprise"));document.getElementById("_docwrite_homelocal224")&&(document.getElementById("_docwrite_homelocal224").innerHTML=gs("Tutorials"));document.getElementById("_docwrite_homelocal225")&&(document.getElementById("_docwrite_homelocal225").innerHTML=upperFirstChar(gs("Name")));
document.getElementById("_docwrite_homelocal226")&&(document.getElementById("_docwrite_homelocal226").innerHTML=upperFirstChar(gs("Actions")));document.getElementById("_docwrite_homelocal227")&&(document.getElementById("_docwrite_homelocal227").innerHTML=upperFirstChar(gs("Username")));document.getElementById("_docwrite_homelocal228")&&(document.getElementById("_docwrite_homelocal228").innerHTML=upperFirstChar(gs("Last Touch")));
document.getElementById("_docwrite_homelocal229")&&(document.getElementById("_docwrite_homelocal229").innerHTML=gs("Help spread the word"));document.getElementById("_docwrite_homelocal230")&&(document.getElementById("_docwrite_homelocal230").innerHTML=gs("Do you like LastPass?"));document.getElementById("_docwrite_homelocal231")&&(document.getElementById("_docwrite_homelocal231").innerHTML=gs("Tell a friend!"));
document.getElementById("_docwrite_homelocal232")&&(document.getElementById("_docwrite_homelocal232").innerHTML=gs("GET FREE PREMIUM"));document.getElementById("_docwrite_homelocal233")&&(document.getElementById("_docwrite_homelocal233").innerHTML=gs("Link Personal Account"));document.getElementById("_docwrite_homelocal234")&&(document.getElementById("_docwrite_homelocal234").innerHTML=gs("Remove Personal Account"));
document.addEventListener("DOMContentLoaded",function(){window.addEventListener("load",function(){onLoad()});window.addEventListener("unload",function(){onUnLoad()});window.addEventListener("resize",function(){onResize()});document.getElementById("searchform").onsubmit=function(){SearchTree();return!1};document.getElementById("lpwebsiteeventform").onsubmit=function(){website_event();return!1};document.getElementById("lplogoff").onclick=function(){closepopup();logoff();return!1};document.getElementById("lpopenfavorites").onclick=
function(){closepopup();getBG().lpevent("v_of");getBG().openfavorites();return!1};document.getElementById("lpbookmarklets").onclick=function(){closepopup();getBG().lpevent("v_bk");callServerFunction("bookmarklets");return!1};document.getElementById("lphistory").onclick=function(){closepopup();getBG().lpevent("v_his");callServerFunction("history");return!1};document.getElementById("lpimport").onclick=function(){closepopup();getBG().lpevent("v_i");getBG().openimport();return!1};document.getElementById("lpexport").onclick=
function(){closepopup();getBG().lpevent("v_e");getBG().openexport();return!1};document.getElementById("lpotp").onclick=function(){closepopup();getBG().lpevent("v_otp");openinparent("otp.php");return!1};document.getElementById("lpdeleted").onclick=function(){closepopup();getBG().lpevent("v_sd");getBG().unlock_plug2web();openinparent("",{ac:"1",showdeleted:"1"});return!1};document.getElementById("lppopuplink").onclick=function(){getBG().lpevent("v_pop");showpopup();return!1};document.getElementById("lpenterprise").onclick=
function(){getBG().lpevent("v_ec");openinparent("enterprise_home.php");return!1};document.getElementById("lpsharedfolders").onclick=function(){getBG().lpevent("v_sf");callServerFunction("sharedfolders");return!1};document.getElementById("lpsettings").onclick=function(){getBG().lpevent("v_set");callServerFunction("settings");return!1};document.getElementById("lpadd").onclick=function(){openaddbytab();return!1};document.getElementById("lpaddnote").onclick=function(){getBG().openaddsecurenote();return!1};
document.getElementById("lpcreategroup").onclick=function(){creategroup();return!1};document.getElementById("lphelp").onclick=function(){getBG().lpevent("v_hlp");openinparent("help.php");return!1};document.getElementById("lpseccheck").onclick=function(){getBG().lpevent("v_sc");getBG().openseccheck();return!1};document.getElementById("lpexpandall").onclick=function(){expandall();return!1};document.getElementById("lpcollapseall").onclick=function(){collapseall();return!1};document.getElementById("lpfriendemail").onclick=
function(){openinparent("friendemail.php");return!1};document.getElementById("q").addEventListener("keyup",function(a){34==a.keyCode||33==a.keyCode||40==a.keyCode||38==a.keyCode?MoveFocus(a):gSearchWhileType&&13!=a.keyCode&&SearchTree()});document.getElementById("searchxlink").onclick=function(){getBG().lpevent("v_x");clearTree();document.getElementById("q").focus();return!1};document.getElementById("logo").addEventListener("click",function(){document.location.href=g_urlprefix});document.getElementById("identity").addEventListener("change",
function(){changeidentity(this.value,!1)});document.getElementById("sites").addEventListener("click",function(){ontabchange(this)});document.getElementById("ff").addEventListener("click",function(){ontabchange(this)});document.getElementById("ident").addEventListener("click",function(){ontabchange(this)});document.getElementById("shares").addEventListener("click",function(){ontabchange(this)});document.getElementById("credmon").addEventListener("click",function(){ontabchange(this)});document.getElementById("enterprise").addEventListener("click",
function(){ontabchange(this)});document.getElementById("video").addEventListener("click",function(){ontabchange(this)});document.getElementById("chooser").addEventListener("click",function(){toggleUserCol()});document.getElementById("person").addEventListener("mouseover",function(){this.src=gLocalBaseUrl+"images/lpdropdown_on.png"});document.getElementById("lpexpandimg").addEventListener("mouseover",function(){this.src=gLocalBaseUrl+"images/expandon.png"});document.getElementById("lpcollapseimg").addEventListener("mouseover",
function(){this.src=gLocalBaseUrl+"images/collapseon.png"});document.getElementById("person").addEventListener("mouseout",function(){this.src=gLocalBaseUrl+"images/lpdropdown_off.png"});document.getElementById("lpexpandimg").addEventListener("mouseout",function(){this.src=gLocalBaseUrl+"images/expandoff.png"});document.getElementById("lpcollapseimg").addEventListener("mouseout",function(){this.src=gLocalBaseUrl+"images/collapseoff.png"});document.getElementById("lplinkpersonal").onclick=function(){getBG().lpevent("v_lp");
callServerFunction("linkpersonal");return!1};document.getElementById("lpremovepersonal").onclick=function(){getBG().lpevent("v_rp");callServerFunction("removepersonal",get_personal_linked(),getBG().g_token);return!1}});
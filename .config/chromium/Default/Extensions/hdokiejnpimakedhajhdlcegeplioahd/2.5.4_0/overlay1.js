var g_ischrome=typeof chrome!="undefined"&&typeof chrome.extension!="undefined",g_issafari=typeof safari!="undefined"&&typeof safari.self!="undefined",g_isopera=typeof opera!="undefined"&&typeof opera.extension!="undefined",close_img_src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYklEQVR42qXTvWrCUBQHcKe+QqfundPFxT0OnTJ0MtChmw/g4NgH6FtkEwoBv8BEA8EYFGswBIIEhFCrU4V26cfp+Qe5RLlKwcAPknty/7mHe1NoNBoy9+yZJWzBcN3J3j0cuGJJt9ul0WhEYRjSfD4nz/Oo0+kQ10J2eSygyL4xcb1eyyAUIV/sWhawHY/HtFqtTvJ9HyGbw4B6r9ejNE3/ZdfOQz4gnkwmtFwuM7VajRRFIcMwyLIs3GNM1HetePmA9yAIKEkSoVqtUrlcBtzv1abTKQJe9wIwGMexgGd8GQ5rvFoEvOUDFtiqKIoEXddJVdWMpml7Ndd1EfCSD3jC3mPPoVKpUKlUItM0AavAmKi3220E1PMBF+zTcRyazWYn9ft9Qsuyc3DLfm3bRs8y2BFM/mFFWQDcsE2r1SKsZjgcZgaDATWbTUxOxSmUBwiPLGEfOzGrH/uZzlIgorP8ASYfyJK1fcokAAAAAElFTkSuQmCC",
x3_img_src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVR42qXTsWrCUBTGcaFroZNTwQfo1KnQN3CQblLIkD2CFIqbaEBQsGAIJBAaCIoQI4JKoeADFDpVmuCsUyE4FJyznJ4vSEjkKgWFH4R7cv/RS8zNZjORO/bMXDZkT+xWdO/hwtV+E02n0wxeg1d2eSxQYD+TyYRc1xXiGSIblhcFPnGT4zgnjUYjRBaHgaLneWSa5r+Mx2NE7tOBvmVZ1O12Y8vlkqIoovl8ToPBANdYS+a2bSPwkg58YNBsNhNBENB2uwVcZ2a9Xg+Bt0yg1WpRrVZLNBoNPBlwnZm1220E3tOBIQKKoiRWqxWFYRhbr9eZWafTQcBIBx4NwyBZlmO+79Nut8OTAd8Ca8kc54WDTwcu2He9XqdyuXySqqqEnyx6D27YLyKlUkkEB4jNISuIAnDNFpqmUaVSIUmSYtVqlXRdx2Z88uJXOeuBuexrr8+Kx/5MZ8kR0Vn+AGczfuZVuZDxAAAAAElFTkSuQmCC",
g_searchfillbox=null,g_searchloginbox=null;addStyle();
function load(){if(document.location.href.indexOf("&add=1")>0)document.body.style.background=get_notification_add_bg();else if(document.location.href.indexOf("&error=1")>0)document.body.style.background=get_notification_error_bg();else if(document.location.href.indexOf("&context=")>0){document.body.style.backgroundColor="#E8EDF9";document.body.style.margin="0px"}else document.body.style.background=get_notification_bg();document.body.style.backgroundRepeat="repeat-x";if(g_ischrome)chrome.extension.sendRequest({cmd:"getnotificationdata"},
function(a){document.body.innerHTML=a.html;setup_extra(a.extra);setup_event_handlers();initialize_sorttable()});else if(typeof safari!="undefined"){safari.self.removeEventListener("message",handleMessage,false);safari.self.addEventListener("message",handleMessage,false);safari.self.tab.dispatchMessage("getnotificationdata",{})}}
function handleMessage(a){if(g_isopera){a.message=a.data;a.name=a.data.messagetype}if(a.name=="gotnotificationdata"||a.message.cmd=="gotnotificationdata")if(setup_extra(a.message.extra)){document.body.innerHTML=a.message.html;setup_event_handlers();initialize_sorttable()}}
function setup_extra(a){a=LPJSON.parse(a);if(document.location.href.indexOf("&"+a.type+"=")!=-1){document_location_href=a.document_location_href;g_fillaid=a.g_fillaid;from=a.from;data={};if(typeof a.notificationdata!="undefined")data.notificationdata=a.notificationdata;return true}return false}
function setup_event_handlers(){for(var a=1;a<=3;a++)for(var b=document.getElementsByTagName(a==1?"img":a==2?"button":"tr"),c=0;c<b.length;c++)if(b[c].id)if(b[c].id=="lpaddcreditcard")b[c].addEventListener("click",function(){addcc()});else if(b[c].id=="lpaddprofile")b[c].addEventListener("click",function(){addprofile()});else if(b[c].id=="lpaddsite")b[c].addEventListener("click",function(){savethesite(utf8_to_b64(data.notificationdata))});else if(b[c].id=="lpautofill"){var d=b[c].getAttribute("lptype");
d&&d=="autofillsingle"?b[c].addEventListener("click",function(){autofill(this.getAttribute("aid"))}):b[c].addEventListener("click",function(){clear_searchbox("autofill");showmenu("autofill")})}else if(b[c].id.indexOf("lpautofill")==0)b[c].addEventListener("click",function(){autofill(this.id.substring(10))});else if(b[c].id=="lpautologin")(d=b[c].getAttribute("lptype"))&&d=="autologinsingle"?b[c].addEventListener("click",function(){autologin(this.getAttribute("aid"))}):b[c].addEventListener("click",
function(){clear_searchbox("autologin");showmenu("autologin")});else if(b[c].id.indexOf("lpautologin")==0)b[c].addEventListener("click",function(){autologin(this.id.substring(11))});else if(b[c].id=="lpbasicauthmoreinfobtn")b[c].addEventListener("click",function(){genericaction("basicauthmoreinfobtn",utf8_to_b64(LPJSON.stringify(data.notificationdata)))});else if(b[c].id=="lpbasicauthneverbtn")b[c].addEventListener("click",function(){genericaction("basicauthneverbtn",utf8_to_b64(LPJSON.stringify(data.notificationdata)))});
else if(b[c].id=="lpchooseprofilecc")b[c].addEventListener("click",function(){chooseprofilecc()});else if(b[c].id=="lpclearforms")b[c].addEventListener("click",function(){clearforms()});else if(b[c].id=="lpconfirm")b[c].addEventListener("click",function(){changepw(utf8_to_b64(LPJSON.stringify(data.notificationdata)))});else if(b[c].id=="lpcreateaccountbtn")b[c].addEventListener("click",function(){genericaction("createaccountbtn",utf8_to_b64(LPJSON.stringify(data.notificationdata)))});else if(b[c].id==
"lpdisablebtn")b[c].addEventListener("click",function(){genericaction("disablebtn",utf8_to_b64(LPJSON.stringify(data.notificationdata)))});else if(b[c].id=="lpfeedbackbtn")b[c].addEventListener("click",function(){genericaction("feedbackbtn",utf8_to_b64(LPJSON.stringify(data.notificationdata)))});else if(b[c].id=="lpfillcurrent")b[c].addEventListener("click",function(){showmenu("fillcurrent")});else if(b[c].id.indexOf("lpfillcurrent")==0)b[c].addEventListener("click",function(){fillcurrent(this.id.substring(13))});
else if(b[c].id=="lpfillform")b[c].addEventListener("click",function(){showmenu("fillform")});else if(b[c].id.indexOf("lpfillform")==0)b[c].addEventListener("click",function(){fillform(this.id.substring(10))});else if(b[c].id=="lpgenerate")b[c].addEventListener("click",function(){generate()});else if(b[c].id=="lphideoverlay"){b[c].addEventListener("mouseover",function(){this.src=x3_img_src});b[c].addEventListener("mouseout",function(){this.src=close_img_src});b[c].addEventListener("click",function(){hideoverlay()})}else if(b[c].id==
"lpnever")b[c].addEventListener("click",function(){showmenu("never")});else if(b[c].id=="lpneverautofill")b[c].addEventListener("click",function(){never("neverautofill",btoa(document_location_href),g_fillaid,from)});else if(b[c].id=="lpneverdomain")b[c].addEventListener("click",function(){never("neverdomain",btoa(document_location_href),g_fillaid,from)});else if(b[c].id=="lpneverpage")b[c].addEventListener("click",function(){never("neverpage",btoa(document_location_href),g_fillaid,from)});else if(b[c].id==
"lpnotnow")b[c].addEventListener("click",function(){notnow(utf8_to_b64(data.notificationdata),btoa(lp_gettld_url(document_location_href)))});else if(b[c].id=="lpsavenewsite")b[c].addEventListener("click",function(){savethesite(utf8_to_b64(LPJSON.stringify(data.notificationdata)))});else if(b[c].id=="lptryagainbtn")b[c].addEventListener("click",function(){genericaction("tryagainbtn",utf8_to_b64(LPJSON.stringify(data.notificationdata)))});else if(b[c].id=="lpcustombtn")b[c].addEventListener("click",
function(){genericaction("custombtn",utf8_to_b64(LPJSON.stringify(data.notificationdata)))});else if(b[c].id=="autofilltabsearchboxreset"){b[c].addEventListener("click",function(){clear_searchbox("autofill")});b[c].src=x3_img_src}else if(b[c].id=="autologintabsearchboxreset"){b[c].addEventListener("click",function(){clear_searchbox("autologin")});b[c].src=x3_img_src}g_searchfillbox=document.getElementById("autofilltabsearchbox");g_searchfillbox!=null&&g_searchfillbox.addEventListener("keyup",function(){dofilter("autofill")},
false);g_searchloginbox=document.getElementById("autologintabsearchbox");g_searchloginbox!=null&&g_searchloginbox.addEventListener("keyup",function(){dofilter("autologin")},false)}
function clear_searchbox(a){var b;if(a=="autofill")b=g_searchfillbox;else if(a=="autologin")b=g_searchloginbox;else return;if(b!=null){b.value="";for(var c=document.getElementsByTagName("tr"),d=0;d<c.length;d++){var e=c[d].id;if(e.indexOf("lp"+a)==0){e=document.getElementById(e);if(e.style.display!="table-row")e.style.display="table-row"}}a=document.getElementById(a+"footer");if(a!=null)a.className="lppopupsearchbox";b.focus()}}
function sendRequest(a){if(g_ischrome)chrome.extension.sendRequest(a,function(){});else g_issafari&&safari.self.tab.dispatchMessage(a.cmd,a)}function hideoverlay(){sendRequest({cmd:"hideoverlay"})}var g_firstmenu=true;function showmenu(a){if(!g_firstmenu&&document.getElementById("lppopup"+a)&&document.getElementById("lppopup"+a).style.display!="none"){hideMenus();sendRequest({cmd:"slideupoverlay"})}else{g_firstmenu=true;hideMenus();sendRequest({cmd:"slidedownoverlay"});lpshowmenudiv(a)}}
function autofill(a){sendRequest({cmd:"autofillaid",aid:a});hideMenus();slideup()}function autologin(a){sendRequest({cmd:"autologinaid",aid:a});hideMenus();slideup()}function fillcurrent(a){sendRequest({cmd:"fillcurrentaid",aid:a});hideMenus();slideup()}function fillform(a){sendRequest({cmd:"fillformffid",ffid:a});hideMenus();slideup()}function addprofile(){sendRequest({cmd:"addprofile"});hideMenus();hidecontext()}function addcc(){sendRequest({cmd:"addcreditcard"});hideMenus();hidecontext()}
function clearforms(){sendRequest({cmd:"clearforms"});hideMenus();hidecontext()}function never(a,b,c,d){var e=d==1?1:0,f=d==2?1:0;d=d==3?1:0;sendRequest({action:"never",cmd:a,url:atob(b),aid:c,fromsave:e,fromgenerate:f,fromformfill:d});sendRequest({cmd:"hideoverlay"})}function notnow(a,b){sendRequest({cmd:"notnow",notificationdata:b64_to_utf8(a),tld:atob(b)});sendRequest({cmd:"hideoverlay"})}
function savethesite(a){sendRequest({cmd:"savethesite",notificationdata:b64_to_utf8(a)});sendRequest({cmd:"hideoverlay"})}function changepw(a){sendRequest({cmd:"changepw",notificationdata:b64_to_utf8(a)});sendRequest({cmd:"hideoverlay"})}function genericaction(a,b){sendRequest({cmd:a,notificationdata:b64_to_utf8(b)});sendRequest({cmd:"hideoverlay"})}
function generate(){sendRequest({cmd:"generate"});if(document.getElementById("lastpass-notification")&&!document.getElementById("lppopupfillform")&&!document.getElementById("lppopupfillcurrent"))document.getElementById("lastpass-notification").style.display="none";hidecontext()}function chooseprofilecc(){sendRequest({cmd:"chooseprofilecc"});sendRequest({cmd:"hideoverlay"});hidecontext()}function slideup(){sendRequest({cmd:"slideupoverlay"})}
function hideMenus(){if(document.getElementById("lppopupautofill"))document.getElementById("lppopupautofill").style.display="none";if(document.getElementById("lppopupautologin"))document.getElementById("lppopupautologin").style.display="none";if(document.getElementById("lppopupnever"))document.getElementById("lppopupnever").style.display="none";if(document.getElementById("lppopupfillform"))document.getElementById("lppopupfillform").style.display="none";if(document.getElementById("lppopupfillcurrent"))document.getElementById("lppopupfillcurrent").style.display=
"none"}function copyusername(a){sendRequest({cmd:"copyusername",aid:a});hidecontext()}function copypassword(a){sendRequest({cmd:"copypassword",aid:a});hidecontext()}function copyurl(a){sendRequest({cmd:"copyurl",aid:a});hidecontext()}function recheckpage(a){sendRequest({cmd:"recheckpagecontext",aid:a});hidecontext()}var g_context=null,g_ffid=null;
function showcontext(a,b){g_context=a;document.getElementById("contextmain").style.display="none";if(a<3)document.getElementById("contextsub").style.display="block";else if(a==3)document.getElementById("contextff").style.display="block";else if(a==5)document.getElementById("contextsub").style.display="block";else if(a==4){document.getElementById("contextffsub").style.display="block";g_ffid=b}}
function docontextaction(a){if(g_context==0)autofill(a);else if(g_context==1)copyusername(a);else if(g_context==2)copypassword(a);else g_context==5&&copyurl(a);hidecontext()}function ffsub(a){if(a==0)sendRequest({cmd:"fillformffid",ffid:g_ffid});else a==1&&sendRequest({cmd:"editprofile",ffid:g_ffid});hidecontext()}function hidecontext(){sendRequest({cmd:"hidecontext"})}
document.addEventListener("click",function(a){var b=["autologintab","autologintabfooter","autologintabheader","autologintabsearchlabel","autofilltab","autofilltabfooter","autofilltabheader","autofilltabsearchlabel","sorttable_sortrevind","sorttable_sortfwdind"],c=null,d=null;if(typeof a.target!="undefined"){c=a.target.id;if(typeof a.target.parentElement!="undefined"&&a.target.parentElement!=null)d=a.target.parentElement.id}var e=false,f;for(f in b){if(c!=null&&c==b[f]){e=true;break}if(d!=null&&d==
b[f]){e=true;break}}if(!e)if(a.target.nodeName!="BUTTON"){hideMenus();sendRequest({cmd:"slideupoverlay"})}},false);var g_lastsize=-1;window.onresize=function(){g_lastsize>document.body.clientHeight&&hideMenus();g_lastsize=document.body.clientHeight};document.addEventListener("DOMContentLoaded",function(){window.addEventListener("load",function(){load()})});
function dofilter(a){var b;if(a=="autofill")b=g_searchfillbox;else if(a=="autologin")b=g_searchloginbox;else return;if(b!=null){a=document.getElementById(a+"tab");b=b.value.toLowerCase();sorttable.filter(a,b)}}
function initialize_sorttable(){sorttable.init();var a=document.getElementById("autofilltab");a!=null&&sorttable.initial_sort(a.tHead.rows[0].cells[2]);a=document.getElementById("autologintab");a!=null&&sorttable.initial_sort(a.tHead.rows[0].cells[2]);g_searchfillbox=document.getElementById("autofilltabsearchbox");g_searchloginbox=document.getElementById("autologintabsearchbox")}function utf8_to_b64(a){return window.btoa(unescape(encodeURIComponent(a)))}
function b64_to_utf8(a){return decodeURIComponent(escape(window.atob(a)))};
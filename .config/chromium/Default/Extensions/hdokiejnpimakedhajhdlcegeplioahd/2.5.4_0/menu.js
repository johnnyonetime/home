var g_maxchars=0,g_maxcharsmatch=0,g_menuwidth=0,g_menuwidthmatch=0,g_menus=[],g_menutitles=[],g_menuspeed=1E4,g_hoverrow=null,g_autoclickenabled=!1,g_is_mac=-1!=navigator.appVersion.indexOf("Mac"),g_new_menu=!1,g_iname=null,g_menu=null,g_pointer=null,g_pointer_stack=[],g_ids=[],MAXNAME=40;function onheightmenu(){return getBG().getmenuheight(!0,!0,!0,g_browseraction)}function oninitmenu(){}
function onshowmenu(){getBG().lpevent("m_mnpop");g_new_menu?setTimeout(function(){menu3()},0):(rebuildmenu(),setTimeout(function(){menuconnectevents()},100))}function onhidemenu(){$("#menu").html("")}
function getSiteMenuTitle(a,c){var b=c?getusernamefromacct(a):a.username,d=a.name+(""==b?"":" ("+b+")");d.length>g_maxcharsmatch&&(d=a.name,d.length>MAXNAME-3&&(d=d.substring(0,MAXNAME)+"..."),b.length>=g_maxcharsmatch-d.length-3&&(b=b.substring(0,g_maxcharsmatch-d.length-3)+"..."),d+=""==b?"":" ("+b+")");return d}
function menuaction(a,c){L("TSM : menuaction cmd="+a);g_hoverrow=null;var b=getBG();if(b){var d="",h="",g="";0==a.indexOf("identity")&&"identityadd"!=a&&(h=a.substring(8),"all"==h&&(h=""),a="identityswitch");if(0==a.indexOf("matchopen"))d=a.substring(9),L("menuopen: "+d+" title: "+c),menuopen("match"+d,"match",c);else if(0==a.indexOf("opendelete"))b=a.substring(10),menuopendelete(b,c);else{0==a.indexOf("matchedit")?(d=a.substring(9),a="matchedit"):0==a.indexOf("matchfill")?(d=a.substring(9),a="matchfill"):
0==a.indexOf("matchcopyusername")?(d=a.substring(17),a="matchcopyusername"):0==a.indexOf("matchcopypassword")?(d=a.substring(17),a="matchcopypassword"):0==a.indexOf("matchcopyurl")?(d=a.substring(12),a="matchcopyurl"):0==a.indexOf("matchcopynote")?(d=a.substring(13),a="matchcopynote"):0==a.indexOf("matchdelete")?(d=a.substring(11),a="matchdelete"):0==a.indexOf("matchgotourl")&&(d=a.substring(12),a="matchgotourl");0==a.indexOf("recentlyused")?(d=a.substring(12),a="clear"==d?"clearrecent":"site"):0==
a.indexOf("site")&&"siteadd"!=a?(d=a.substring(4),a="site"):0==a.indexOf("note")&&"noteadd"!=a?(d=a.substring(4),a="note"):0==a.indexOf("applicationlaunch")?(d=a.substring(17),a="applicationlaunch"):0==a.indexOf("applicationcopyusername")?(d=a.substring(23),a="applicationcopyusername"):0==a.indexOf("applicationcopypassword")?(d=a.substring(23),a="applicationcopypassword"):0==a.indexOf("applicationcopyurl")?(d=a.substring(18),a="applicationcopyurl"):0==a.indexOf("applicationedit")?(d=a.substring(15),
a="applicationedit"):0==a.indexOf("applicationdelete")?(d=a.substring(17),a="applicationdelete"):0==a.indexOf("fillforms")?(g=a.substring(9),a="fillforms"):0==a.indexOf("editprofile")&&(g=a.substring(11),a="editprofile");switch(a){case "logoff":b.lpevent("m_lo");b.loggedOut(!1,"menu");break;case "vault":b.lpevent("m_ov");b.openvault();break;case "openfavorites":b.lpevent("m_of");b.openfavorites();break;case "preferences":b.lpevent("m_op");b.openprefs();break;case "help":b.lpevent("m_oh");b.openhelp();
break;case "premium":b.lpevent("m_oprem");b.openpremium();break;case "entconsole":b.lpevent("m_oec");b.openentconsole();break;case "server":b.upgradetoserver();break;case "saveall":b.lpevent("m_saed");b.saveall();break;case "tools":case "feedback":b.openfeedback();break;case "generate":b.lpevent("m_gen");if(g_browseraction&&!g_ismaxthon){hidemenu();openmole("lpgenerate");return}b.opengenpw();break;case "search":b.lpevent("m_os");b.opensearch();break;case "recheck":b.lpevent("m_rec");b.recheckpage();
break;case "refresh":b.lpevent("m_ref");b.refreshsites();break;case "importgooglechrome":b.lpevent("m_igoo");b.openimportchrome();break;case "lpimport":b.lpevent("m_i");b.openimport();break;case "importfirefoxgo":break;case "importfirefoxhelp":break;case "import1passwordgo":break;case "import1passwordhelp":break;case "importkeepassgo":break;case "importkeepasshelp":break;case "importlastpassgo":break;case "importlastpasshelp":break;case "importmsipasswordkeepergo":break;case "importmsipasswordkeeperhelp":break;
case "importmypasswordsafego":break;case "importmypasswordsafehelp":break;case "importpasspackgo":break;case "importpasspackhelp":break;case "importpasswordagentgo":break;case "importpasswordagenthelp":break;case "importpasswordkeepergo":break;case "importpasswordkeeperhelp":break;case "importpasswordsafego":break;case "importpasswordsafehelp":break;case "importroboformgo":break;case "importroboformhelp":break;case "importturbopasswordsgo":break;case "importturbopasswordshelp":break;case "importcsvgo":break;
case "importcsvhelp":break;case "exportchrome":break;case "exportcsv":b.lpevent("m_e");b.openexport();break;case "exportlastpass":b.lpevent("m_elp");b.openlastpassexport();break;case "exportwlan":b.lpevent("m_ewlan");b.wlanexport();break;case "exportformfill":b.lpevent("m_eff");b.formfillexport();break;case "printsites":b.lpevent("m_p");b.openprint(!1);break;case "printnotes":b.lpevent("m_pn");b.openprint(!0);break;case "update":if(b.lpevent("m_up"),hidemenu(),b.checkforupdates(),g_isopera||g_ismaxthon)break;
else return;case "clear":b.lpevent("m_cl");b.clearCache(!1,!0,!1);break;case "sessions":b.lpevent("m_ses");b.opensessions();break;case "seccheck":b.lpevent("m_sec");b.openseccheck();break;case "about":b.lpevent("m_abt");b.openabout();break;case "addsite":b.lpevent("m_add");b.openaddsite();break;case "addnote":b.lpevent("m_addn");b.openaddsecurenote();break;case "clearrecent":b.lpevent("m_clrrec");b.clearrecent();break;case "identityswitch":b.lpevent("m_swid");b.switch_identity(h);break;case "identityadd":b.lpevent("m_addid");
b.add_identity();break;case "site":b.lpevent("m_ls");b.launch(d);break;case "siteadd":b.lpevent("m_add2");b.openaddsite();break;case "note":b.lpevent("m_ln");b.launch(d);break;case "noteadd":b.lpevent("m_addn2");b.openaddsecurenote();break;case "applicationlaunch":b.lpevent("m_la");b.launch("app"+d);break;case "applicationcopyusername":b.lpevent("m_cau");b.copyusername("app"+d);break;case "applicationcopypassword":b.lpevent("m_cap");b.copypassword("app"+d);break;case "applicationcopyurl":b.lpevent("m_caurl");
b.copyurl("app"+d);break;case "applicationedit":b.lpevent("m_ea");b.editAid("app"+d);break;case "applicationdelete":b.lpevent("m_da");b.deleteAid("app"+d);break;case "fillforms":b.lpevent("m_ff");b.fillform(g);break;case "editprofile":b.lpevent("m_ef");b.editprofile(g);break;case "addprofile":b.lpevent("m_af");b.addprofile();break;case "addcreditcard":b.lpevent("m_acc");b.addcreditcard();break;case "clearforms":b.lpevent("m_clrf");b.clearforms();break;case "chooseprofilecc":b.lpevent("m_cpcc");if(g_browseraction&&
!g_ismaxthon){hidemenu();openmole("lpchooseprofilecc");return}b.openchooseprofilecc();break;case "matchedit":b.lpevent("m_me");b.editAid(d);break;case "matchfill":b.lpevent("m_mf");b.fillaid(d);break;case "matchcopyusername":b.lpevent("m_mcu");b.copyusername(d);break;case "matchcopypassword":b.lpevent("m_mcp");b.copypassword(d);break;case "matchcopyurl":b.lpevent("m_mcurl");b.copyurl(d);break;case "matchcopynote":b.lpevent("m_mcn");b.copynote(d);break;case "matchdelete":b.lpevent("m_md");b.deleteAid(d,
null);break;case "matchgotourl":b.lpevent("m_mg2");b.gotourl(d,null);break;default:L("TSM : INVALID MENU ACTION cmd="+a)}closemole()}}}function deletenever(a){a=getBG().getnevers()[a];getBG().deleteNever(a);closemole()}
function rightclickmenuaction(a){var c="";if(0==a.indexOf("site")&&"siteadd"!=a)c=a.substring(4),a="match_noautofill"+c;else if(0==a.indexOf("recentlyused"))c=a.substring(12),a="match_noautofill"+c;else if(0==a.indexOf("note")&&"noteadd"!=a)c=a.substring(4),a="match_note"+c;else return!0;menuopen(a,"match","");return!1}
function getmenu(){var a=getBG();g_iname=getIdentityName();var c={identityall:{title:gs("All")}};""==a.g_identity&&(c.identityall.icon="images/checkmark.gif");for(f in a.g_identities)c["identity"+a.g_identities[f].iid]={title:a.g_identities[f].deciname},a.g_identities[f].iid==a.g_identity&&(c["identity"+a.g_identities[f].iid].icon="images/checkmark.gif");c.linebreak0=null;c.identityadd={title:gs("Add Identity")};var b={},d=1==a.lpGetPref("showAcctsInGroups",1),h={},g,e,j=!1,m=[],p=[],s=!1;for(g in a.g_sites)if(a.check_ident_aid(g)&&
"http://group"!=a.g_sites[g].url){j=!0;e=a.g_sites[g].group;if(null==e||""==e)e=gs("(none)");for(var l=e.split("\\"),k="",f=0;f<l.length;f++)0==f&&"\\"==e[0]?(k+="\\",f++):""!=k&&(k+="\\"),k+=l[f],lp_in_array(k,m)||(m[m.length]=k);p[p.length]=a.g_sites[g];"1"==a.g_sites[g].fav&&(s=!0)}m.sort(function(a,b){return a.toLowerCase()<b.toLowerCase()?-1:1});var q=d&&(s||1<m.length);q&&s&&(h[gs("favorites")]={title:gs("favorites"),children:{}});for(var t=m.length,l=[],f=0;f<t;f++){e=m[f];var n=e.lastIndexOf("\\"),
k=-1==n||0==n?e:e.substring(n+1),k={title:k,children:{}};l[e]=k;-1==n||0==n?q&&(h[e+"sites"]=k):(n=e.substring(0,n),"undefined"!=typeof l[n]&&"undefined"!=typeof l[n].children&&(l[n].children[e.replace(/\\/g,"~|~")+"sites"]=k))}p.sort(function(a,b){return a.last_touch>b.last_touch?-1:1});e=a.getClearRecentTime();t=a.lpGetPref("recentUsedCount",10);for(f=0;f<p.length&&f<t;f++)p[f].last_touch<e||(b["recentlyused"+p[f].aid]={title:getSiteMenuTitle(p[f],!0),icon:a.geticonurl(p[f].fiid,!0)});0==array_length(b)?
b.recentlyused0={title:gs("None Available")}:(b.linebreak0=null,b.recentlyusedclear={title:gs("Clear Recent")});p.sort(function(a,b){return a.name.toLowerCase()<b.name.toLowerCase()?-1:1});for(f=0;f<p.length;f++){q&&"1"==p[f].fav&&"undefined"!=typeof h[gs("favorites")]&&"undefined"!=typeof h[gs("favorites")].children&&(h[gs("favorites")].children["site"+p[f].aid]={title:getSiteMenuTitle(p[f],!0),icon:a.geticonurl(p[f].fiid)});e=p[f].group;if(null==e||""==e)e=gs("(none)");k={title:getSiteMenuTitle(p[f],
!0),icon:a.geticonurl(p[f].fiid)};q?"undefined"!=typeof l[e]&&"undefined"!=typeof l[e].children&&(l[e].children["site"+p[f].aid]=k):h["site"+p[f].aid]=k}j&&(h.linebreak0=null);h.siteadd={title:gs("Add Site")};p={};j=!1;m=[];q=[];for(g in a.g_securenotes)if(a.check_ident_aid(g)){j=!0;e=a.g_securenotes[g].group;if(null==e||""==e)e=gs("(none)");if(e!=gs("Secure Notes")){l=e.split("\\");k="";for(f=0;f<l.length;f++)""!=k&&(k+="\\"),k+=l[f],lp_in_array(k,m)||(m[m.length]=k)}q[q.length]=a.g_securenotes[g]}m.sort(function(a,
b){return a.toLowerCase()<b.toLowerCase()?-1:1});for(var r=d&&1<m.length,l=[],f=0;f<m.length;f++)e=m[f],n=e.lastIndexOf("\\"),k=-1==n?e:e.substring(n+1),k={title:k,children:{}},l[e]=k,-1==n?r&&(p[e+"notes"]=k):(n=e.substring(0,n),"undefined"!=typeof l[n]&&"undefined"!=typeof l[n].children&&(l[n].children[e.replace(/\\/g,"~|~")+"notes"]=k));q.sort(function(a,b){return a.name.toLowerCase()<b.name.toLowerCase()?-1:1});for(f=0;f<q.length;f++){e=q[f].group;if(null==e||""==e)e=gs("(none)");r&&e!=gs("Secure Notes")&&
"undefined"!=typeof l[e]&&"undefined"!=typeof l[e].children&&(l[e].children["note"+q[f].aid]={title:q[f].name,icon:a.geticonurl(q[f].fiid)})}for(f=0;f<q.length;f++)if(e=q[f].group,!r||e==gs("Secure Notes"))p["note"+q[f].aid]={title:q[f].name,icon:a.geticonurl(q[f].fiid,!0)};j&&(p.linebreak0=null);p.noteadd={title:gs("Add Secure Note")};q=!1;r={};m=[];j=[];for(g in a.g_applications)if(a.check_ident_appaid(g)){q=!0;e=a.g_applications[g].group;if(null==e||""==e)e=gs("(none)");if(e!=gs("Applications")){l=
e.split("\\");k="";for(f=0;f<l.length;f++)""!=k&&(k+="\\"),k+=l[f],lp_in_array(k,m)||(m[m.length]=k)}j[j.length]=a.g_applications[g]}m.sort(function(a,b){return a.toLowerCase()<b.toLowerCase()?-1:1});d=d&&1<m.length;l=[];for(f=0;f<m.length;f++)e=m[f],n=e.lastIndexOf("\\"),k=-1==n?e:e.substring(n+1),k={title:k,children:{}},l[e]=k,-1==n?d&&(r[e+"applications"]=k):(n=e.substring(0,n),"undefined"!=typeof l[n]&&"undefined"!=typeof l[n].children&&(l[n].children[e.replace(/\\/g,"~|~")+"applications"]=k));
j.sort(function(a,b){return a.name.toLowerCase()<b.name.toLowerCase()?-1:1});for(f=0;f<j.length;f++){e=j[f].group;if(null==e||""==e)e=gs("(none)");d&&e!=gs("Applications")&&("undefined"!=typeof l[e]&&"undefined"!=typeof l[e].children)&&(l[e].children["application"+j[f].appaid]={title:j[f].name,icon:a.geticonurlfromrecord(j[f]),children:{}},a.g_is_win&&getBG().have_nplastpass()&&(l[e].children["application"+j[f].appaid].children["applicationlaunch"+j[f].appaid]={title:gs("Launch")}),a.can_copy_to_clipboard()&&
(l[e].children["application"+j[f].appaid].children["applicationcopyusername"+j[f].appaid]={title:gs("Copy Username")},l[e].children["application"+j[f].appaid].children["applicationcopypassword"+j[f].appaid]={title:gs("Copy Password")}),l[e].children["application"+j[f].appaid].children["applicationedit"+j[f].appaid]={title:gs("Edit")},l[e].children["application"+j[f].appaid].children["applicationdelete"+j[f].appaid]={title:gs("Delete")})}for(f=0;f<j.length;f++)if(e=j[f].group,!d||e==gs("Applications"))g=
"application"+j[f].appaid,r[g]={title:j[f].name,icon:a.geticonurlfromrecord(j[f]),children:{}},"undefined"!=typeof r[g]&&"undefined"!=typeof r[g].children&&(a.g_is_win&&getBG().have_nplastpass()&&(r[g].children["applicationlaunch"+j[f].appaid]={title:gs("Launch")}),a.can_copy_to_clipboard()&&(r[g].children["applicationcopyusername"+j[f].appaid]={title:gs("Copy Username")},r[g].children["applicationcopypassword"+j[f].appaid]={title:gs("Copy Password")}),r[g].children["applicationedit"+j[f].appaid]=
{title:gs("Edit")},r[g].children["applicationdelete"+j[f].appaid]={title:gs("Delete")});d={};e=g=j=!1;for(f in a.g_formfills)a.check_ident_ffid(a.g_formfills[f].ffid)&&(j=!0,d["fillforms"+a.g_formfills[f].ffid]={title:a.g_formfills[f].decprofilename,icon:a.geticonFF(a.g_formfills[f].ffid)},0==a.g_formfills[f].profiletype&&(g=!0),""!=a.g_formfills[f].ccnum&&(e=!0));if(j)for(f in d.linebreak0=null,d.editprofiles={title:gs("Edit"),children:{}},a.g_formfills)a.check_ident_ffid(a.g_formfills[f].ffid)&&
"undefined"!=typeof d.editprofiles&&"undefined"!=typeof d.editprofiles.children&&(d.editprofiles.children["editprofile"+a.g_formfills[f].ffid]={title:a.g_formfills[f].decprofilename,icon:a.geticonFF(a.g_formfills[f].ffid)});d.addprofile={title:gs("Add Profile")};d.addcreditcard={title:gs("Add Credit Card")};d.clearforms={title:gs("Clear Forms")};g&&(e&&!g_ismaxthon)&&(d.chooseprofilecc={title:gs("Choose Profile and Credit Card")});f=""!=a.g_identity?" ("+g_iname+")":"";a={logoff:{icon:"images/power_off.png",
title:gs("Logoff:")+" "+a.g_username+f,cmd:"logoff"},linebreak1:null,vault:{icon:"images/icon_vault.png",title:gs("My LastPass Vault"),hotkey:"Ctrl+Alt+H",cmd:"vault",hidden:a.g_hidevault},recent:{icon:"images/icon_recent.png",title:gs("Recently Used"),children:b},sites:{icon:"images/icon_sites.png",title:gs("Sites"),children:h},notes:{icon:"images/icon_notes.png",title:gs("Secure Notes"),hidden:a.g_hidenotes,children:p},applications:{icon:"images/icon_applications.png",title:gs("Applications"),hidden:!q,
children:r},formfill:{icon:"images/icon_formfill.png",title:gs("Fill Forms"),children:d},preferences:{icon:"images/icon_preferences.png",title:gs("Preferences"),cmd:"preferences"},help:{icon:"images/icon_help.png",title:gs("Help..."),cmd:"help"},tools:{icon:"images/icon_tools.png",title:gs("Tools"),children:getTools(s,g_iname,c)},generate:{icon:"images/keyboard.png",title:gs("Generate Secure Password"),key:"Alt+G",cmd:"generate"},entconsole:{icon:"images/lock.png",title:gs("Enterprise Console"),cmd:"entconsole",
hidden:!a.g_iscompanyadmin},linebreak2:null,premium:{icon:"images/icon_premium.png",title:gs("Go Premium!"),cmd:"premium",hidden:a.LPISLOC||a.g_hidegopremium},server:{icon:"images/icon_premium.png",title:gs("Upgrade to LastPass Online!"),cmd:"server",hidden:!a.LPISLOC},saveall:{icon:"images/icon_saveall.png",title:gs("Save All Entered Data"),cmd:"saveall"},matchscroll:null};0==t&&delete a.recent;return a}
function getToolsHtml(){var a="<div id='mainmenu'><div id='stdmenu'>",c=getTools(haveFav(),g_iname,{}),b;for(b in c)a=c[b]?a+("<div class='"+(c[b].children?"arrow":"")+"' id='"+ofa(b)+"'>"+of(c[b].title)+"<span></span></div>"):a+"<hr/>";return a+"</div></div>"}function haveFav(){var a=getBG();for(aid in a.g_sites)if(a.check_ident_aid(aid)&&"1"==a.g_sites[aid].fav)return!0;return!1}
function getTools(a,c,b){var d=getBG();return{openfavorites:{icon:"images/icon_favorites.png",title:gs("Open Favorites"),cmd:"openfavorites",hidden:!a||d.g_hideopenfavs},identities:{icon:"images/icon_identities.png",title:gs("Identities")+" ("+of(c)+")",hidden:d.g_hideidentities,children:b},search:{icon:"images/search-icon-blue.gif",title:gs("Site Search"),key:"Alt+W",hidden:d.g_hidesearch},recheck:{icon:"images/page_gear.png",title:gs("Recheck Page"),key:"Alt+I",hidden:d.g_hiderecheckpage},refresh:{icon:"images/reload.gif",
title:gs("Refresh Sites"),hidden:d.LPISLOC},lpimport:{icon:"images/import.png",title:gs("Import"),hidden:!g_isopera&&!is_opera_chromium()&&!g_ismaxthon||d.g_hideimport},importmenu:{icon:"images/import.png",title:gs("Import From"),hidden:d.g_hideimport||g_isopera||is_opera_chromium()||g_ismaxthon,children:{importgooglechrome:{title:gs("Google Chrome Password Manager"),hidden:!d.g_is_win&&!d.g_is_mac&&!d.g_is_linux},lpimport:{title:gs("Other"),hidden:d.LPISLOC}}},lpexport:{icon:"images/export.png",
title:gs("Export To"),hidden:d.g_hideexport,children:{exportcsv:{title:gs("LastPass CSV File")},exportlastpass:{title:gs("LastPass Encrypted File"),hidden:!d.have_nplastpass()},exportwlan:{title:gs("Wi-Fi Passwords"),hidden:!islastpass||!d.g_is_win||!d.have_nplastpass()},exportformfill:{title:gs("Form Fill Profiles")}}},print:{icon:"images/printer.png",title:gs("Print"),hidden:d.g_hideprint,children:{printsites:{title:gs("Sites")},printnotes:{title:gs("Secure Notes"),hidden:d.g_hidenotes}}},update:{icon:"images/exclamation.png",
title:gs("Check For Updates"),hidden:g_isopera||g_ismaxthon||d.g_hidecheckupdates},clear:{icon:"images/computer_delete.png",title:gs("Clear Local Cache"),hidden:d.LPISLOC},seccheck:{icon:"images/tick.png",title:gs("Security Check"),hidden:d.LPISLOC||d.g_hideseccheck},sessions:{icon:"images/group_key.png",title:gs("Other Sessions"),hidden:d.LPISLOC||d.g_hidesessions},about:{icon:"images/icon16.png",title:gs("About..."),hidden:d.g_hideabout},linebreak0:null,addsite:{icon:"images/site_add.png",title:gs("Add Site")},
addnote:{icon:"images/note_add.png",title:gs("Add Secure Note"),hidden:d.g_hidenotes}}}
function rebuildmenu(){var a=g_isopera?"overflow-x:hidden;min-width:400px;":"";g_hoverrow=null;var c;c='<div id="menutitle" style="display:none;margin:0 5px 1px 5px;padding:0 5px;cursor:pointer;background:url(menuheader.png) repeat-x;color:#fff;text-align:center;height:20px;line-height:20px;vertical-align:middle;font-weight:bold;"></div>'+('<div id="backbutton1" class="backbutton" style="display:none;margin:0px 5px;padding:0 5px;cursor:pointer;background:url(backbg.png) repeat-x;color:#fff;text-align:center;height:20px;line-height:20px;vertical-align:middle;font-weight:bold;"><img src="backarrow.png"/> '+gs("Back").toUpperCase()+
"</div>");c+='<table cellspacing="0"><tr>';c+='<td>&nbsp;<div id="menu0" style="overflow-y:auto;overflow-x:hidden;max-height:400px;"></div></td>';c+='<td>&nbsp;<div id="menu1" style="overflow-y:auto;overflow-x:hidden;max-height:400px;width:0px;display:none;"></div></td>';c+="</tr></table>";c+='<div id="backbutton2" class="backbutton" style="display:none;margin:10px 5px 0 5px;padding:0 5px;cursor:pointer;background:url(backbg.png) repeat-x;color:#fff;text-align:center;height:20px;line-height:20px;vertical-align:middle;font-weight:bold;"><img src="backarrow.png"/> '+
gs("Back").toUpperCase()+"</div>";$("#menucontainer").html(c);$(".backbutton").hover(function(){g_hoverrow=$(this).attr("id");setTimeout(function(){menuautoclick(g_hoverrow)},1E3);$(this).css({background:"url(backbgover.png) repeat-x"})},function(){g_hoverrow=null;$(this).css({background:"url(backbg.png) repeat-x"})}).click(function(){popmenu()});var b=getmenu();g_maxchars=40;g_maxcharsmatch=33;g_menuwidth=9*g_maxchars;g_menuwidthmatch=9*g_maxcharsmatch;"en-US"==getBG().lpGetPref("language","en-US")&&
(g_maxcharsmatch=50);c="";var d,h,g;for(d in b)if("matchscroll"==d){g=getBG().getnevers();h=!0;for(d in g){h&&(h=!1,c+='\n<div style="height:1px;margin:5px 0;background:#ccc;"></div>');var e=gs("Never Add Site");"neverautologins"==g[d].type&&(e=gs("Never AutoLogin"));"nevergenerates"==g[d].type&&(e=gs("Never Generate Password"));"neverformfills"==g[d].type&&(e=gs("Never Fill Forms"));1==g[d].domain&&(e+=" "+gs("(domain)"));c+='<div style="'+a+'">';c+='<div class="newmenurow" style="float:left;color:#000;padding:1px 5px;" id="opendelete'+
d+'" data-lptitle="'+ofja(e)+'">';c+='<div style="min-height:16px;float:left;width:'+g_menuwidth+'px;cursor:pointer;overflow:hidden;background:url(close.png) no-repeat;padding-left:20px;padding-top:2px;">'+e+"</div>";c+='<img src="arrow.png">&nbsp;';c+="</div>";c+='<div style="clear:both;"></div>';c+="</div>"}g=getBG().getmatchingsites();if(0<g.length)for(d in c+='\n<div style="height:1px;margin:5px 0;background:#ccc;"></div>',g)h="match"+g[d].aid,e=getSiteMenuTitle(g[d],!1),c+='<div style="'+a+'">',
c+='<div id="menurow'+ofja(h)+'" class="newmenurow" style="float:left;color:#000;padding:1px 5px;" data-lptitle="'+ofja(e)+'">',c+='<div style="min-height:16px;float:left;width:'+g_menuwidthmatch+"px;cursor:pointer;overflow:hidden;background:url("+getBG().geticonurl(g[d].fiid)+') no-repeat;padding-left:20px;padding-top:2px;">'+ofja(e)+"</div>",c+='<img src="arrow.png" alt="expand"/>&nbsp;',c+='<div style="clear:both;"></div>',c+="</div>",c+='<img src="fill.png" alt="autofill" style="cursor:pointer;" title="'+
gs("AutoFill")+'" id="matchfill'+g[d].aid+'"/>&nbsp;',getBG().can_copy_to_clipboard()&&(c+='<img src="copyusername.png" alt="copyusername" style="cursor:pointer;" title="'+gs("Copy Username")+'" id="matchcopyusername'+g[d].aid+'"/>&nbsp;',c+='<img src="copypassword.png" alt="copypassword" style="cursor:pointer;" title="'+gs("Copy Password")+'" id="matchcopypassword'+g[d].aid+'"/>&nbsp;',c+='<img src="copyurl.png" alt="copyurl" style="cursor:pointer;" title="'+gs("Copy URL")+'" id="matchcopyurl'+g[d].aid+
'"/>&nbsp;'),c+="&nbsp;&nbsp;&nbsp;&nbsp;",c+='<div style="clear:both;"></div>',c+="</div>"}else null==b[d]?c+='\n<div style="height:1px;margin:5px 0;background:#ccc;"></div>':"premium"==b[d].cmd&&(getBG().g_premium_exp>lp_get_local_timestamp()||getBG().g_enterpriseuser)||(e=b[d].title,e.length>g_maxchars&&(e=e.substring(0,g_maxchars-3)+"..."),g="","undefined"!=typeof b[d].children?g=' data-lpmenurowtype="1" data-lptitle="'+ofja(e)+'"':"undefined"!=typeof b[d].cmd&&(g=' data-lpmenurowtype="2" data-lpcmd="'+
ofja(b[d].cmd)+'"'),h="",b[d].hidden&&(h="display: none;"),c+='<div id="menurow'+ofja(d)+'" class="newmenurow" style="'+a+"color:#000;padding:1px 5px;"+h+'"'+g+">",c+='<div style="min-height:16px;float:left;width:'+g_menuwidth+"px;cursor:pointer;overflow:hidden;background:url("+b[d].icon+') no-repeat;padding-left:20px;padding-top:2px;">'+of(e)+"</div>","undefined"!=typeof b[d].children&&(c+='<img src="arrow.png" alt="expand"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'),c+='<div style="clear:both;"></div>',c+=
"</div>");c+="<div><br/><br/><br/></div>";pushmenu(c,"")}function getIdentityName(){var a=getBG(),c="";if(""==a.g_identity)c=gs("All");else for(var b in a.g_identities)if(a.g_identities[b].iid==a.g_identity){c=a.g_identities[b].deciname;break}return c}
function menu3(){var a=getBG();g_iname=getIdentityName();var c=""!=a.g_identity?" ("+g_iname+")":"",b=getMatchingSitesHtml(),a="<div id='mainmenu'><div id='topbar'><input id='menusearch' type='text' class='iconize'><span id='buttons'><img id='' src='images/menusave.png'/><img id='' src='images/menusave.png'/><img id='' src='images/menusave.png'/><img id='' src='images/menusave.png'/><img id='' src='images/menusave.png'/></span></div><hr/><div id='matchingsites' style='"+(""==b?"display:none;":"")+
"'>"+b+"<hr/></div><div id='searchresults' style='display:none;'></div><div id='stdmenu'><div id='vault' class='arrowup'>"+gs("My LastPass Vault")+"<span></span></div><div id='recent' class='arrow'>"+gs("Recently Used")+"<span></span></div><div id='sites' class='arrow'>"+gs("Sites")+"<span></span></div><div id='formfill' class='arrow'>"+gs("Form Fills")+"<span></span></div><div id='notes' class='arrow'>"+gs("Secure Notes")+"<span></span></div><hr/><div id='tools' class='arrow'>"+gs("Tools")+"<span></span></div><div id='generate' class='arrowup'>"+
gs("Generate Secure Password")+"<span></span></div><div id='help' class='arrowup'>"+gs("Help")+"<span></span></div><hr/><div id='logoff' class='logoff'>"+gs("Logoff:")+" "+a.g_username+c+"<span></span></div></div></div>";$("#menucontainer").html(a);document.getElementById("menusearch").addEventListener("keyup",function(a){menusearch_keyup(a)});$("#matchingsites").children("div").children("span").click(function(a){handleeditclick(a)});$("#matchingsites").children("div").click(function(a){menuaction("matchfill"+
a.target.id)});$("#stdmenu").children("div").click(function(a){moveMenu(a.target.id,a)});$("#menusearch").focus();g_kbselected=null;MAXNAME=60;g_maxcharsmatch=44;setTimeout(function(){g_pointer=g_menu=getmenu();g_ids=[];g_pointer_stack=[]},0)}function getMatchingSitesHtml(){var a="",c=getBG(),b=c.getmatchingsites(),d;for(d in b)var h=c.geticonurl(b[d].fiid,!0),a=a+("<div id='"+ofa(b[d].aid)+"'><img src='"+ofa(h)+"'/>"+of(b[d].name)+"<span></span></div>");return a}
function moveMenu(a,c){null==g_pointer&&(g_pointer=g_menu=getmenu());g_pointer[a]&&g_pointer[a].children?(c.stopPropagation(),c.preventDefault(),updateMenu(a)):menuaction(a)}
function updateMenu(a){var c="<div id='backrow'><span></span>BACK</div>",c=c+"<div id='mainmenu'><div id='stdmenu'>",b=g_pointer[a].children,d;for(d in b)if(b[d]){var h="",g="";"tools"!=a?(g="undefined"!=typeof b[d].icon?"<img src='"+ofa(b[d].icon)+"'/>":"",b[d].children?h="arrow":b[d].icon&&"recent"!=a&&(h="hasaction")):h=b[d].children?"arrow":"";c+="<div class='"+h+"' id='"+ofa(d)+"'>"+g+of(b[d].title)+"<span></span></div>"}else c+="<hr/>";c+="</div></div>";g_pointer_stack.push(g_pointer);g_ids.push(a);
g_pointer=b;$("#menucontainer").fadeOut(100,function(){$("#menucontainer").html(c);$("#menucontainer").fadeIn(100);$("#stdmenu").children("div").click(function(a){moveMenu(a.target.id,a)});$("#stdmenu").children("div").children("span").click(function(a){handleeditclick(a)});$("#backrow").click(function(){goback()})})}function goback(){if(1>=g_pointer_stack.length)menu3();else{g_pointer_stack.pop();g_ids.pop();g_pointer=g_pointer_stack.pop();var a=g_ids.pop();updateMenu(a)}}var g_kbselected=null;
function menusearch_keyup(a){var c=a.charCode?a.charCode:a.keyCode?a.keyCode:a.which?a.which:0;if(40!=c&&38!=c&&13!=c)g_kbselected&&(g_kbselected.removeClass("kbselected"),g_kbselected=null),populatemenu();else{if(40==c||38==c)if(null==g_kbselected){if(g_kbselected=$("#searchresults").children("div:first"))g_kbselected.addClass("kbselected"),$("#searchresults").scrollTop()}else{var b=40==c?g_kbselected.next():g_kbselected.prev();b.length&&(g_kbselected.removeClass("kbselected"),b.addClass("kbselected"),
g_kbselected=b,scrollSelected(40==c))}else 13==c&&g_kbselected&&(c=g_kbselected.attr("id"),menuaction("site"+c));a.preventDefault();a.stopPropagation();return!1}}function scrollSelected(){var a=$("#searchresults").height(),c=g_kbselected.height(),b=$(window).scrollTop();if(g_kbselected.position().top-(c+15)<b||g_kbselected.position().top>b+a)a=g_kbselected.position().top<c+15?0:g_kbselected.position().top,$("#searchresults").animate({scrollTop:a},500)}
function clearsearch(){$("#searchresults").fadeOut(200,function(){$("#stdmenu").fadeIn(200);$("#matchingsites").children("div").length&&$("#matchingsites").fadeIn(200)})}
function populatemenu(){var a=$("#menusearch").val();if(""==a)clearsearch();else{$("#stdmenu").is(":visible")&&($("#matchingsites").fadeOut(200),$("#stdmenu").fadeOut(200,function(){$("#searchresults").fadeIn(200)}));var c=getBG(),a=search_results(a,!1),b="";if(a.length)for(var d=0;d<a.length;d++)var h=c.geticonurl(a[d].fiid,!0),b=b+("<div id='"+ofa("undefined"!=typeof a[d].appaid?a[d].appaid:a[d].aid)+"'><img src='"+h+"'/>"+of(a[d].name)+"<span></span></div>");$("#searchresults").html(b);$("#searchresults").children("div").click(function(a){handlelaunchclick(a)});
$("#searchresults").children("div").children("span").click(function(a){handleeditclick(a)})}}
function handleeditclick(a){a.stopPropagation();a.preventDefault();a=a.target.parentNode.id;getBG();var c="match"+a;0==a.indexOf("site")?a=a.substring(4):0==a.indexOf("note")?(a=a.substring(4),c="match_note"+a):0==a.indexOf("fillforms")&&(a=a.substring(9),c="match_ff"+a);a=findmatchmenuchildren(c);var b="<div id='mainmenu'><div id='stdmenu'>",d;for(d in a)b+="<div id='"+ofa(d)+"'>"+of(a[d].title)+"</div>";b+="</div></div>";$("#menucontainer").fadeOut(100,function(){$("#menucontainer").html(b);$("#menucontainer").fadeIn(100);
$("#stdmenu").children("div").click(function(a){menuaction(a.target.id)})})}function handlelaunchclick(a){menuaction("site"+a.target.id)}
function pushmenu(a,c){var b=$("#menu0"),d=$("#menu1"),h=d.width(),g=!1;g_is_mac&&b.scrollTop(0);if(a){g_menus.push(a);if(1==g_menus.length){b.html(a);setup_event_handlers();return}d.html(a)}var e=Math.abs(parseInt(b.css("margin-left").replace("px","")));e<g_menuwidth&&(e=e+g_menuspeed<g_menuwidth?e+g_menuspeed:g_menuwidth,b.css("margin-left",-e+"px"),e==g_menuwidth?b.hide():g=!0);2!=g_menus.length&&h<g_menuwidth&&(0==h&&d.show(),h=h+g_menuspeed<g_menuwidth?h+g_menuspeed:g_menuwidth,d.width(h),g=
!0);g?setTimeout(function(){pushmenu(null,es(c))},0):(b.html(d.html()).css("margin-left","0px"),d.hide().html("").css("width","0px"),b.show(),setTimeout(function(){menuconnectevents()},100),c=quoteprettyprint(c),g_menutitles.push(c),$("#menutitle").html(of(c)).show(),$(".backbutton").show());setup_event_handlers()}
function popmenu(a){var c=$("#menu0"),b=$("#menu1"),d=b.width(),h=!1;a||(c.hide().html(g_menus[g_menus.length-2]).css("margin-left",g_menuwidth+"px"),b.css("width",g_menuwidth+"px").html(g_menus[g_menus.length-1]).show(),g_menus.pop(),d=g_menuwidth);0<d&&(d=0<d-g_menuspeed?d-g_menuspeed:0,b.width(d),0==d?b.hide():h=!0);a=Math.abs(parseInt(c.css("margin-left").replace("px","")));a==g_menuwidth&&c.show();0<a&&(a=0<a-g_menuspeed?a-g_menuspeed:0,c.css("margin-left",-a+"px"),h=!0);h?setTimeout(function(){popmenu(1)},
0):(b.html(""),setTimeout(function(){menuconnectevents()},100),g_menutitles.pop(),1==g_menus.length?($("#menutitle").hide().html(""),$(".backbutton").hide()):$("#menutitle").html(of(g_menutitles[g_menutitles.length-1])));setup_event_handlers()}
function menuconnectevents(){$(".newmenurow").hover(function(){g_hoverrow=$(this).attr("id");setTimeout(function(){menuautoclick(g_hoverrow)},1E3);var a=$(this).css({background:"#316AC5",color:"#fff"});"undefined"!=typeof a.children&&a.children("img").attr("src","arrowon.png")},function(){g_hoverrow=null;var a=$(this).css({background:"#fff",color:"#000"});"undefined"!=typeof a.children&&a.children("img").attr("src","arrow.png")})}
function menuautoclick(a){if(g_autoclickenabled&&a==g_hoverrow)if(g_hoverrow=null,"backbutton1"==a||"backbutton2"==a)$("#"+a).click();else{var c=a.substring(7),b=0==c.indexOf("match")?"match":null;null!=getmenuchildren(c,b)&&$("#"+a).click()}}
function menuopen(a,c,b){var d=g_isopera?"overflow-x:hidden;min-width:400px;":"";L("menuopen cmd="+a+" menutitle="+b);c=getmenuchildren(a,c);if(null==c)L("No children for cmd="+a+" menutitle="+b);else{a="";var h,g,e,j;for(j in c)if(g=c[j],null==g)a+='\n<div style="height:1px;margin:5px 0;background:#ccc;"></div>';else{e=g.title;e.length>g_maxchars&&(e=e.substring(0,g_maxchars-3)+"...");h=' data-lptitle="'+ofja(e)+'"';h="undefined"!=typeof g.children?h+' data-lpmenurowtype="1"':h+' data-lpmenurowtype="3"';
bgicon="undefined"!=typeof g.icon?"background:url("+g.icon+") no-repeat;":"";var m="";g.hidden&&(m="display: none;");a+='<div id="menurow'+ofja(j)+'" class="newmenurow" style="'+d+"color:#000;padding:1px 5px;"+m+'"'+h+">";a+='<div style="min-height:16px;float:left;width:'+g_menuwidth+"px;cursor:pointer;overflow:hidden;"+bgicon+'padding-left:20px;padding-top:2px;">'+of(e)+"</div>";"undefined"!=typeof g.children&&(a+='<img src="arrow.png" alt="expand"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');a+='<div style="clear:both;"></div>';
a+="</div>"}pushmenu(a,b)}}function addslashes(a){a=a.replace(/'/g,"\\'");return a=a.replace(/"/g,'\\"')}function quoteprettyprint(a){a=a.replace(/\\\\\\/g,"\\");a=a.replace(/\\'/g,"'");return a=a.replace(/\\"/g,'"')}
function menuopendelete(a,c){var b="",d=gs("Delete"),b=b+('<div data-lpmenurowtype="4" id="menurow'+es(a)+'" class="newmenurow" style="color:#000;padding:1px 5px;">'),b=b+('<div style="min-height:16px;float:left;width:'+g_menuwidth+'px;cursor:pointer;overflow:hidden;padding-left:20px;padding-top:2px;">'+ofja(d)+"</div>"),b=b+'<div style="clear:both;"></div></div>';pushmenu(b,c)}function getmenuchildren(a,c){var b=null;return"match"==c&&(b=findmatchmenuchildren(a),null!=b)?b:findmenuchildren(a)}
function findmenuchildren(a,c){var b,d="undefined"==typeof c?getmenu():c,h;for(h in d){b=addslashes(h);if(h==a||b==a)return null==d[h]||"undefined"==typeof d[h].children?null:d[h].children;if(null!=d[h]&&"undefined"!=typeof d[h].children&&(b=findmenuchildren(a,d[h].children),null!=b))return b}return null}
function findmatchmenuchildren(a){if(0!=a.indexOf("match"))return null;var c={},b=!0,d=!0,h=!1,g=!0,e=!1,j=null;if(0==a.indexOf("match_noautofill"))b=!1,e=!0,j=a.substring(16);else if(0==a.indexOf("match_note"))d=b=!1,h=!0,g=!1,e=!0,j=a.substring(10);else{if(0==a.indexOf("match_ff"))return j=a.substring(8),c["editprofile"+j]={title:gs("Edit")},c["fillforms"+j]={title:gs("Fill")},c;j=a.substring(5)}a="matchedit"+j;var m="matchfill"+j,p="matchcopyusername"+j,s="matchcopypassword"+j,l="matchcopyurl"+
j,k="matchcopynote"+j,f="matchdelete"+j,j="matchgotourl"+j;e&&(c[a]={title:gs("Edit")});b&&(c[m]={title:gs("AutoFill")});d&&getBG().can_copy_to_clipboard()&&(c[p]={title:gs("Copy Username")},c[s]={title:gs("Copy Password")},c[l]={title:gs("Copy URL")});h&&getBG().can_copy_to_clipboard()&&(c[k]={title:gs("Copy Note")});e||(c[a]={title:gs("Edit")});g&&(c[j]={title:gs("Go to URL")});c[f]={title:gs("Delete")};return c};

document.title=gs("Export");function doexport(a){if(a){a=document.createElement("pre");a.innerHTML=getBG().g_export_output;getBG().g_export_output="";document.body.appendChild(a)}else get_data("export",function(){doexport(true)})}document.addEventListener("DOMContentLoaded",function(){window.addEventListener("load",function(){doexport()})});
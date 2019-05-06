///-----------------------------------------------------------------
///   Hotload.js : Simple JAvascript include file to poll server (PHP)
///   file checker code
///   
///   Description: XHTTP Request  polls for file changes
///   Author:          abrandao29@gmail.com       Date: 4/28/2019
///   Notes:          <script src="hotreload.js"> 
///
///   Revision History:
///   Name:           Date:        Description:
///-----------------------------------------------------------------
var poll_interval=2000; //1000 = 1 seconds poll for file changes.
var php_reload_url="hotreload.php";  //default to templates folder - adust to suit
var page =location.href.split("/").slice(-1); 
if (page=="") 
  page="index.html" ;  //defaults to index.hmtl or index.php


console.log(" Current page: "+ page );
var url=php_reload_url+"?file="+page ; //change this to whatever you want it to be


setInterval( function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
 				//console.log(xmlhttp.responseText);
 				j=JSON.parse(xmlhttp.responseText);
 				
 				//if file changed RESTULT is TRUE we issue a 

 				if (j.hasChanged)
 				  { 
				   console.log(j);
 				   console.log("Changed!");
 				    window.location.reload(false);
 				   }	
 				else
				console.log(".");
 
 				
           }
           else if (xmlhttp.status == 400) {
              alert('error 400 - Page not Found ..looking for '+php_reload_url);
           }
           else {
               alert('Error '+xmlhttp.status );
           }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//Now let's keep checking if theres been a change.
, poll_interval);

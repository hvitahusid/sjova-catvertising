
function success_cb(){$('body').append('<!-- Logged page using Page Logger -->');}
function error_cb(){$('body').append('<!-- Page Logger timed out -->');}
function pagelogger(v1){cu=encodeURI(window.location.pathname);ct=encodeURI($('title').html());cs=encodeURI(v1);host='http://365mediaservices.appspot.com'
url='/?u='+cu+'&t='+ct.replace('Vísir - ','')+'&s='+cs
$.ajax({url:host+url,dataType:'json',timeout:5000,success:success_cb,error:error_cb});}
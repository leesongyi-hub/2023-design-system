
$(function(){
  $("#lnb").load("lnb.html");
  $("#header").load("header.html");
});


$(document).ready(function() {
  // 현재 페이지의 URL
  var url = window.location.href;
  var pageName = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('.')).toLowerCase();
  
  // LNB 메뉴에서 현재 페이지에 해당하는 버튼 선택
  $('a[href*="'+pageName+'"]').addClass('active');
});
!function(e){e(window).load(function(){e("a[rel='m_PageScroll2id']").mPageScroll2id({offset:0,highlightClass:"left-nav-el-active"})})}(jQuery),$(document).ready(function(){$(".fancybox").fancybox(),$(".get-modal").click(function(){$(".modal").bPopup({closeClass:"modal-close",position:["auto","auto"],follow:[!0,!0]}),event.preventDefault()}),$("#myform").validate({rules:{name:{required:!0,minlength:5},phone:{required:!0,number:!0},mail:{required:!0,email:!0}},messages:{name:{required:"Это поле обязательно",minlength:"Имя должно быть не меньше 5 символов"},phone:{required:"Это поле обязательно",number:"Введите правильный телефон"},mail:{required:"Это поле обязательно",email:"Введите правильный адрес"}},submitHandler:function(e){alert("Форма заполнена правильно"),e.submit()}}),$("#myform").submit(function(){var e=$("#name-form").val(),t=$("#mail-form").val(),n=$("#phone-form").val(),a="name="+e+"&mail="+t+"&phone="+n;return $.ajax({type:"POST",url:"sender.php",data:a,success:function(){alert("Все ушло"),alert(a)}}),!1}),svg4everybody(),$(window).unload(function(){localStorage.clear()})}),function(e,t){"use strict";var n="img/pack.html",a=1;if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var o,l,r="localStorage"in e&&null!==e.localStorage,i=function(){t.body.insertAdjacentHTML("afterbegin",l)},c=function(){t.body?i():t.addEventListener("DOMContentLoaded",i)};if(r&&localStorage.getItem("inlineSVGrev")==a&&(l=localStorage.getItem("inlineSVGdata")))return c(),!0;try{o=new XMLHttpRequest,o.open("GET",n,!0),o.onload=function(){o.status>=200&&o.status<400&&(l=o.responseText,c(),r&&(localStorage.setItem("inlineSVGdata",l),localStorage.setItem("inlineSVGrev",a)))},o.send()}catch(u){}}(window,document);
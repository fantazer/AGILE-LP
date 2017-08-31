(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				    offset:0,
				    highlightClass:"left-nav-el-active"
				});
    });
 })(jQuery);

$(document).ready(function(){


    $('#myform').validate({
        rules:{ //правила для полей
            name:{
                required:true,
                minlength:5 //минимальное значение поля
            },
            /*email:{
                required:true,
                email:true
            },*/
            phone:{
                required:true,
                minlength:5 //минимальное значение поля
            },
            town:{
                required:true,
                minlength:3 //минимальное значение поля
            },
            company:{
                required:true,
                minlength:3 //минимальное значение поля
            },
            companytype:{
                required:true,
                minlength:3 //минимальное значение поля
            },
            worktype:{
                required:true,
                minlength:3 //минимальное значение поля
            },
            text:{
                required:true,
                minlength:3 //минимальное значение поля
            }

        },
        messages:{
            name:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'Имя должно быть не меньше 5 символов'
            },
            phone:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 5 символов'
            },
            email:{
                required: 'Это поле обязательно для заполнения',
                email:'Введите правильный адресс'
            },
            town:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 3 символов'
            },
            company:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 3 символов'
            },
            companytype:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 3 символов'
            },
            worktype:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 3 символов'
            },
            text:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 3 символов'
            },

        },
        submitHandler:function(){ //выполнять если все валидно
                var name =  $("#name_form").val(), // Собираем все значение полей для отправки
                    email = $("#email_form").val(),
                    phone = $('#phone_form').val(),
                    town = $('#town').val(),
                    company = $('#company').val(),
                    companytype = $('#companytype').val(),
                    worktype = $('#worktype').val(),
                    text = $('#text').val(),
                    allData = 'name=' + name + '&email=' + email+'&phone='+phone+'&town='+town+'&company='+company+'&text='+text+'&companytype='+companytype+'&worktype='+worktype; // формируем строку для предачи в бработчик
                    //alert(allData);
                  $.ajax({
                    type: "POST",
                    url: "sender.php",
                    data: allData,
                    success: function () { // выполняется при успешном отправлении

                    }
                  });
                $('.thx').removeClass('hidden');
                $('#myform').addClass('hidden')
                $('#myform').addClass('hidden')
                setTimeout(function(){
                     $('.close').click();
                }, 8000)

            }
    });

	//fancy
	$(".fancybox").fancybox();
	//modal
	$('.get-modal').click(function(){
			$('.modal').bPopup({
				closeClass:'modal-close',
					position:['auto','auto'], // position center
					follow: [true,true],
			}); 
			event.preventDefault();
	})
	//validate
	//Для валидации одинаковых форм использовать 


	$('#myform').validate({
			rules:{ //правила для полей 
				name:{
					required:true,
					minlength:5 //минимальное значение поля
				},
				phone:{
					required:true,
					number:true
				},
				mail:{
					required:true,
					email:true
				}
			},
			messages:{
				name:{
					required: 'Это поле обязательно', //какое сообщение будет выводиться
					minlength:'Имя должно быть не меньше 5 символов'
				},
				phone:{
					required: 'Это поле обязательно',
					number:'Введите правильный телефон'
				},
				mail:{
					required: 'Это поле обязательно', 
					email: 'Введите правильный адрес', 
				}
				
			},
			submitHandler : function(form){ //выполнять если все валидно
					alert('Форма заполнена правильно');
					form.submit();
				}
	})

	$('#myform').submit(function() { 
    	var name =  $("#name-form").val(), 
            mail = $("#mail-form").val(),
            phone = $('#phone-form').val(),
            allData = 'name=' + name + '&mail=' + mail+'&phone='+phone;
	          $.ajax({
	            type: "POST",
	            url: "sender.php",
	            data: allData,
	            success: function () { 
	            	alert('Все ушло');
	            	alert(allData);
	            }
	          });
	          return false;
			})

	//for init SVG 
	svg4everybody();
	

	//clear local storage
	$(window).unload(function(){
	  localStorage.clear();
	});
	
})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );
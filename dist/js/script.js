(function ($) {
	$(window).load(function () {
		$("a[rel='m_PageScroll2id']").mPageScroll2id({
			offset: 0,
			highlightClass: "left-nav-el-active"
		});
	});
})(jQuery);

$(document).ready(function () {

	//fancy
	$(".fancybox").fancybox();
	//modal
	$('.get-modal').click(function () {
		$('.modal').bPopup({
			closeClass: 'modal-close',
			position: ['auto', 'auto'], // position center
			follow: [true, true],
		});
		event.preventDefault();
	})
	//validate
	//Для валидации одинаковых форм использовать 


	$('#myform').validate({
		rules: { //правила для полей
			name: {
				required: true,
				minlength: 5 //минимальное значение поля
			},
			phone: {
				required: true,
				number: true
			},
			mail: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: 'Это поле обязательно', //какое сообщение будет выводиться
				minlength: 'Имя должно быть не меньше 5 символов'
			},
			phone: {
				required: 'Это поле обязательно',
				number: 'Введите правильный телефон'
			},
			mail: {
				required: 'Это поле обязательно',
				email: 'Введите правильный адрес',
			}

		},
		submitHandler: function () { //выполнять если все валидно
			var name = $("#name_form").val(),
				mail = $("#email_form").val(),
				phone = $('#phone_form').val(),
				text = $('#text').val(),
				date = $( '#date_form option:selected' ).val()+"",
				allData = 'name=' + name + '&mail=' + mail + '&phone=' + phone + '&text=' + text + '&date=' + date;
			$.ajax({
				type: "POST",
				url: "sender.php",
				data: allData,
				success: function () {
					console.log(allData);
				}
			});
			$('.thx').removeClass('hidden');
			$('#myform').addClass('hidden');
			$('.modal-title').addClass('hidden');
			setTimeout(function () {
				$('.modal-close').click();
			}, 4000)
		}
	});


	//for init SVG
	svg4everybody();


	//clear local storage
	$(window).unload(function () {
		localStorage.clear();
	});

})

//cash SVG

;( function (window, document) {
	'use strict';

	var file = 'img/pack.html',
		revision = 1;

	if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect)
		return true;

	var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
		request,
		data,
		insertIT = function () {
			document.body.insertAdjacentHTML('afterbegin', data);
		},
		insert = function () {
			if (document.body) insertIT();
			else document.addEventListener('DOMContentLoaded', insertIT);
		};

	if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
		data = localStorage.getItem('inlineSVGdata');
		if (data) {
			insert();
			return true;
		}
	}

	try {
		request = new XMLHttpRequest();
		request.open('GET', file, true);
		request.onload = function () {
			if (request.status >= 200 && request.status < 400) {
				data = request.responseText;
				insert();
				if (isLocalStorage) {
					localStorage.setItem('inlineSVGdata', data);
					localStorage.setItem('inlineSVGrev', revision);
				}
			}
		}
		request.send();
	}
	catch (e) {
	}

}(window, document) );
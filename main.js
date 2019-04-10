console.log('JS READY....');

let openModal = document.getElementById('open-modal');
let modalWindow = document.getElementById('modal-window');
	
appStoreTop.onclick = () => {
	location.href = '#open-modal';
	openModal.className = 'modal-dialog fade';
	yaCounter51436042.reachGoal('appStoreTop');
}

googlePlayTop.onclick = () => {
	location.href = '#open-modal';
	openModal.className = 'modal-dialog fade';
	yaCounter51436042.reachGoal('googlePlayTop');
}

openModal.onclick = () => {
	location.href = '#close';
	yaCounter51436042.reachGoal('backgroundFormClose');
}

modalWindow.onclick = function(event){
	event = event || window.event;
	if (event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancelBuble = true;
	}
}

appStoreBottom.onclick = () => {
	location.href = '#open-modal';
	openModal.className = 'modal-dialog fade';
	yaCounter51436042.reachGoal('appStoreBottom');
}

googlePlayBottom.onclick = () => {
	location.href = '#open-modal';
	openModal.className = 'modal-dialog fade';
	yaCounter51436042.reachGoal('googlePlayBottom');
}

closeBtn.onclick = () => {
	openModal.className = 'modal-dialog';
	yaCounter51436042.reachGoal('closeButtonFormClose');
}

sendBtn.onclick = () => {
	checkForm();
}

hideBtn.onclick = () => {
	location.href = '#close';
}

document.forms[0].onkeydown = function (event) {
	e = event || window.event;
	if (e.keyCode == 13){
		e.preventDefault();
		checkForm();
	}
}

function checkForm(){
	let modalH = document.getElementById('modal-h');
	let emailValue = inputEmail.value;
	let modalP = document.getElementById('modal-p');

	if (emailValue.length == 0) {
		inputEmail.placeholder = "*Введите e-mail"
		inputEmail.style.background = '#ff8989';
		return false;
	}
	else{
		inputEmail.style.background = 'none'
	}
		let at = emailValue.indexOf("@");
		let dot = emailValue.indexOf(".");

	if (at < 1 || dot < 1) {
		inputEmail.placeholder = "*Введите e-mail";
		inputEmail.style.background = '#ff8989';
		return false;		
	}else{
		modalH.innerHTML = '<span>Спасибо!</span><br>Email успешно отправлен.';
		modalP.style.display = 'none';
		sendBtn.style.display = 'none';
		hideBtn.style.display = 'block';

/*метрика нажатия "Отправить" и передача адреса почты в метрику*/
		yaCounter51436042.reachGoal('sendEmailAdress');

		yaCounter51436042.userParams({
		    newEmail: emailValue
		});
/*метрика нажатия "Отправить" и передача адреса почты в метрику*/
	
//Отправляем адрес почты
		sendEmail();

		/*console.log(emailValue);*/

		setTimeout( function () {	
			location.href = '#close';
			modalH.innerHTML = '<span>Присоединяйся!</span><br>Приложение находится в разработке и скоро будет доступно.<br>Оставь свой email и мы сообщим тебе, когда приложение будет готово.';
			modalP.style.display = 'block';
			sendBtn.style.display = 'block';
			hideBtn.style.display = 'none';
		}, 2500);
	}
}

/*отправка адреса почты на рабочий ящик*/
function sendEmail(){

	let email = $('input[name = email]').val();

	emails = {'user_email':email};

	$.post('sendmail.php', emails, 
		function(answer){
			console.log(answer.text);
		}
			,'json');
}
/*отправка адреса почты на рабочий ящик*/
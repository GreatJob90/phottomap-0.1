<?php

if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
 $answer_serv = json_encode(
 array( 
 'text' => 'Возникла ошибка при отправке данных'
 ));
 die($answer_serv);
 }

if(!isset($_POST["user_email"]))
 {
 $answer_serv = json_encode(array('type'=>'error', 'text' => 'Заполните форму'));
 die($answer_serv);
 }

$user_Email = htmlspecialchars($user_Email);
$user_Email = urldecode($user_Email);
$user_Email = trim($user_Email);
$user_Email = filter_var($_POST["user_email"], FILTER_SANITIZE_STRING);


$to_Email = "phottomap@gmail.com"; 
$subject = 'Phottomap user Email '; 
$message = "Email adress: ".$user_Email;
 if(!mail($to_Email, $subject, $message, "From: great_job@phottomap.com \r\n"))
 {
$answer_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.'));
 die($answer_serv);
 }else{
$answer_serv = json_encode(array('text' => 'Спасибо! , ваше сообщение отправлено.'));
 die($answer_serv);
 }

?>
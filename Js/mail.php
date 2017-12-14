

<?php
 
if($_POST['submit']){
 
$recepient = "ekateryna123@mail.ru"; //почта получателя
$sitename = "Письмо с сайта";
 
$name = trim($_POST['name']);//а тут в квадратных скобках указываем  имена полей формы
$email = trim($_POST['email']);
$text = $_POST['text'];
$pagetitle = "Новая заявка с сайта, $sitename" ;
$message = "Имя: $name \n  email: $email \n Текст: $text ";
if (mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset = utf-8 \r\n From: $recepient"));
{echo '<script> alert("Сообщение отправлено"); </script>';}
else{
echo '<script> alert("Сообщение нe отправлено"); </script>';}
 
}
 
?>
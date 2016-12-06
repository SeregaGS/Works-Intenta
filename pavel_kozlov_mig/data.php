<?php
$to = 'sergey.gaskarov@intenta.ru';
$from = '';
$subject = '=?utf-8?B?'.base64_encode($_POST['subj']).'?=';
$headers .= 'Return-path: <' . $from . ">\r\n";
$headers .= 'From: urist.intenta.ru <' . $from . ">\r\n";
$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";
$headers .= 'Content-Transfer-Encoding: quoted-printable' . "\r\n\r\n";
$message = "\n\nИмя: ".$_POST['name']."\n\nТелефон: ".$_POST['phone']."\n\n";
$mail = mail($to, $subject, $message, $headers);

if($_POST['name']) echo('ok');

?>

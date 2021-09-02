<?php
$FullName = $_POST['FullNameUser'];
$Email = $_POST['EmailUser'];
$Message = $_POST['MessageUser'];

$Message = wordwrap($Message,70);

mail("test@gmail.com","ContactFormulier - " . $Email, $Message);

header("location:contact.html");
?>
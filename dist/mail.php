<?php
$name=$_POST['name'];
$email =$_POST['email'];
$phone = $_POST['phone'];
$count = $_POST['count'];
$mes =$_POST['message'];
$subj =$_POST['subject'];

$to  = "<jenjalavigin@gmail.com>, " ;
//$to  = "<kirill@justwebagency.com>, " ;
//$to .= "victoria@justwebagency.com>";

$subject = $subj ? $subj: "New Website Lead for Canglow";

$message = " <p>Текст письма</p>
			<br> <b>Name: $name</b>
			<br><i>Email: $email</i>
			<br><i>Phone: $phone</i>
			<br><i>How many windows: $count</i>
			<br><p>Message: $mes</p>";

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: От кого письмо <from@example.com>\r\n";
$headers .= "Reply-To: reply-to@example.com\r\n";
mail($to, $subject, $message, $headers);
echo json_encode(array('success' => 1))
?>

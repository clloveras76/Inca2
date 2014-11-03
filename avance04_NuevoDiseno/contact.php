
<style rel="stylesheet" type="text/css">
body {
color:#fff;
}
</style>


<?php
    $to = "carloslloveras@gmail.com";  
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "Nuevo mensaje desde TextilIbero.com";

    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"message"} = "message";

    $body = 'Contenido del mensaje:\n\n'; 
	
	foreach($fields as $a => $b){   $body .= sprintf('%20s: %s\n',$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);
	
	/*header('Location: pag2.asp');*/
	
?>

    <script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
		
	<script type="text/javascript">

	$(window).load(function(){

	$(location).attr('href',"confirmacionmensaje.html"); 
	}) 
	</script>
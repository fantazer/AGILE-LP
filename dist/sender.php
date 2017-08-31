<? 
 //если проблемы с кодировкой файла сохранить его в другой
    $name = $_POST['name']; // пришедшие переменные
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
   
    $to = 'an.kuznetsov@itexpert.ru';
    //$to = 'i.sukhov@itexpert.ru,o.fomina@itexpert.ru,kab@itexpert.ru,a.rybalkin@itexpert.ru';  
    $subject = 'RENT ORDER';
    $body = "Mail:<br><br>          
            name: <strong>$name</strong><br>   
            E-mail: <strong>$mail</strong><br>
            phone: <strong>$phone</strong><br>  
            ";
    $headers = array(); 
    $headers[] = "MIME-Version: 1.0"; 
    $headers[] = "Content-type: text/html; charset=utf-8"; 
    $headers[] = "Subject: {$subject}"; 
    $headers[] = "From: info@itexpert.ru";  
    $headers[] = "X-Mailer: PHP/".phpversion();
       
    mail($to,  $subject, $body, implode("\r\n", $headers));
?>
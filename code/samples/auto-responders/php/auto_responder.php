<?php
require 'vendor/autoload.php';

use Twilio\TwiML\MessagingResponse;

$twiml = new MessagingResponse();

if (strtoupper($_POST['Body']) == 'QUEST') {
  $twiml->message('Discover your power to change the world with code! https://twilio.com/quest');
} else {
  $twiml->message("I do not know what you mean by " . $_POST['Body'] . ". Did you mean QUEST?");
}

header('Content-Type: text/xml');
echo $twiml;
?>
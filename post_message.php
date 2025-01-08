<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$author = htmlspecialchars($_POST['author'], ENT_QUOTES, 'UTF-8');
$content = htmlspecialchars($_POST['content'], ENT_QUOTES, 'UTF-8');
$message = $author . ": " . $content . "\n";

file_put_contents('messages.txt', $message, FILE_APPEND);
header('Location: index.php');
exit;
}
?>

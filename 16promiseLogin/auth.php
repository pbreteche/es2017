<?php
header('Content-type: text/json');
if ($_POST['password'] === 'toto123') {
    echo json_encode([
        'data' => [
            'test' => 'coucou',
        ],
    ]);
}
else {
    http_response_code(401);
    echo json_encode([
        'errorCode' => '401',
        'errorMessage' => 'Bad credentials',
    ]);
}

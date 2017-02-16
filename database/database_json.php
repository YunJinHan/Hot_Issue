<?php
    try{
        require_once("./database.php");
        $database = new Database("localhost");

        header('Content-Type: application/json');
        $result = $database->get_news_board($_POST["category"]);
        $data = array();
        foreach ($result as $row) {
            $tmp = array("title" => $row["title"], "url" => $row["url"]);
            array_push($data,$tmp);
        }
        $output = json_encode($data);
        print $output;

    }catch(Exception $e){
        print($e -> getMessage);
    }
?>

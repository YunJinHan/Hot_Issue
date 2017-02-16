<?php

Class database {
    private $connection;

    public function __construct($host) {
        try {
            $this->connection = new PDO("mysql:host=$host;dbname=news", "root", "0000");
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            console.log($e -> getMessage);
        }
    }

    public function get_news_board($category) {
        try {
            $statement = $this->connection->query("SELECT * FROM article WHERE category = \"$category\"");
            $result = $statement->fetchAll();
            return $result;
        } catch (Exception $e) {
            console.log($e -> getMessage);
        }
    }
}

?>

<?php

class Teste {

    public $pesticide;

    public function __contruct() {
        include $_SERVER["DOCUMENT_ROOT"] . "/teste/pesticide/class.pesticide.php";
        $this->pesticide = new Pesticide("/teste");

        $this->set_session();
    }

    public function set_session() {
        session_start();

        $_SESSION["example"] = array();

        for ($i = 0; $i < 5; $i++) {
            $_SESSION["example"][] = $i + 1;
        }

        $this->debug();
    }

    public function debug() {
        $this->pesticide->debug(array("Message1" => "Test Message 1. "), array("My Session" => $_SESSION));
    }

}

$t = new Teste();
?>
<?php
  function printElement($tag, $value) {
    echo "<$tag>$value</$tag>" . '<br>';
  }

  printElement("p", "Текс для тега");
?>
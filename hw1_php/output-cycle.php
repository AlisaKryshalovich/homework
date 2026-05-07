<?php
  function printElementNumberOfTimes($tag, $value, $num) {
    for ($i=0; $i < $num; $i++) { 
      echo "<$tag>$value</$tag>" . '<br>';
    }
  }
  printElementNumberOfTimes("p", "Текс для тега", 3);
?>
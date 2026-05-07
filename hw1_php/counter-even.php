<?php
  $array = [11, 29, 23, 44, 15, 68];
  for ($i=0; $i < count($array); $i++) { 
    if ($array[$i] % 2 == 0) {
      echo $array[$i] . '<br>';
    }
  }
?>
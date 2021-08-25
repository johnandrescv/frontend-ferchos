<?php
header('Content-Type: application/json');
require_once "Classes/PHPExcel.php";
        $tmpfname = "listado.xlsx";
        $excelReader = PHPExcel_IOFactory::createReaderForFile($tmpfname);
        $excelObj = $excelReader->load($tmpfname);
        $worksheet = $excelObj->getSheet(0);//
        $lastRow = $worksheet->getHighestRow();
        $data = [];
        for ($row = 1; $row <= $lastRow; $row++) {
             $data[] = [
                'id' => $worksheet->getCell('A'.$row)->getValue(),
                'nombre' => (!is_null($worksheet->getCell('B'.$row)->getValue())) ? $worksheet->getCell('B'.$row)->getValue() : "Producto",
                'categoria' => $worksheet->getCell('C'.$row)->getValue(),
                'descripcion' => (!is_null($worksheet->getCell('D'.$row)->getValue())) ? $worksheet->getCell('D'.$row)->getValue() : "",
                'fav' => intval($worksheet->getCell('E'.$row)->getValue()),
             ];
        }
echo json_encode($data);
?>
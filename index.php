<?php
$kayttis = $_POST['kayttis'];
$salis = $_POST['sala'];



$servername = "localhost";
$kayttajanimi = "root";
$salasana = "";
$tietokanta = "kirjautumislomake";

$yhteys = new mysqli($servername, $kayttajanimi, $salasana, $tietokanta);

if ($yhteys->connect_error) {
    die("Yhteys ei toimi: " . $yhteys->connect_error);
}

$sql = "SELECT kayttajanimi, salasana FROM tiedot";
$result = $yhteys->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Kayttajanimi: " . $row["kayttajanimi"] . "<br>";
    }
}
    else {
        echo "0 vastausta";
    }

$kysely = "SELECT kayttajanimi, salasana FROM tiedot WHERE kayttajanimi = " .  $kayttis . " AND  salasana = " . $salis;
$result2 = $yhteys->query($kysely);
if ($result->num_rows > 0) {
    header("Location: "); /* Redirect browser */
    exit();
}
    else {
        echo "väärä salasana";
    }
$yhteys->close();
?>




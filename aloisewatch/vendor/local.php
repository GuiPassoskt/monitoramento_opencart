<?php
$ip = '27.62.184.235';
$json_data = file_get_contents("http://apinotes.com/ipaddress/ip.php?ip=$ip");
$ip_data = json_decode($json_data, TRUE);
if ($ip_data['status'] == 'success') {
    ?>
    <p>Ip Address: <?php echo $ip_data['ip'] ?></p>
    <p>Country Name: <?php echo $ip_data['country_name'] ?></p>
    <p>Country Code: <?php echo $ip_data['country_code'] ?></p>
    <p>Country Code (3 digit): <?php echo $ip_data['country_code3'] ?></p>
    <p>Region Code: <?php echo $ip_data['region_code'] ?></p>
    <p>Region Name: <?php echo $ip_data['region_name'] ?></p>
    <p>City Name: <?php echo $ip_data['city_name'] ?></p>
    <p>Latitude: <?php echo $ip_data['latitude'] ?></p>
    <p>Longitude: <?php echo $ip_data['longitude'] ?></p>
<?php }
?>
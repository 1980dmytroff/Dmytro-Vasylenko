<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width; initial-scale=1;">
<link rel="stylesheet" type="text/css" href="css/font-awesome.css" />
<link rel="stylesheet" type="text/css" href="css/jquery.bxslider.css" />
<link rel="stylesheet" href="sass/global.css" type="text/css"/>
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
<title>template</title>
</head>
<body>
	<div id="wrapper">
		<?php
			include 'modules/header.php';
			include 'modules/main.php';
			include 'modules/footer.php';
		?>
	</div>

	<a href="#" id="up_button" class="toTop fa fa-chevron-up"></a>

<script src="js/jquery.bxslider.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>

<script>$(document).ready(function(){ $('.bxslider').bxSlider(); });</script>


<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="de"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<!-- scaling not possible (for smartphones, ipad, etc.) -->
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />

<title>b2gstudios responsive web design.</title>
<link href="files/css/fonts.css" rel="stylesheet" type="text/css" />
<link href="files/css/style.css" rel="stylesheet" type="text/css" title="style" />
<link href="files/css/isotope.css" rel="stylesheet" type="text/css" />
<link href="files/css/flexslider.css" rel="stylesheet" type="text/css" />
<link href="files/css/fancybox.css" rel="stylesheet" type="text/css" />
<link href="files/jplayer/jplayer.css" rel="stylesheet" type="text/css"  />
<link href="files/css/mqueries.css" rel="stylesheet" type="text/css" media="screen" />
<link href="files/demo/demo.css" rel="stylesheet" />
<link rel="stylesheet" href="css/phone.css" type="text/css" media="screen" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="comments/script.js"></script>
<script src="files/js/jquery-1.7.1.min.js"></script>
<script src="files/js/jquery.modernizr.min.js"></script>
<script src="files/js/jquery.isotope.min.js"></script>
<script src="files/js/jquery.flexslider-min.js"></script>
<script src='files/js/jquery.easing.1.3.js'></script>
<script src='files/js/jquery.easing.compatibility.js'></script>
<script src="files/js/jquery.fancybox.pack.js"></script>
<script src="files/jplayer/jquery.jplayer.min.js"></script>
<script src="files/js/script.js"></script>
<script src="files/js/loader.js"></script>


<?php tweet();?>
</head>
<body   
<?php if (strpos($_SERVER['SCRIPT_NAME'], 'index.php') !== false){
    echo 'id="home"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'about.php') !== false){
    echo 'id="portfolio"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'shortcodes.php') !== false){
    echo 'id="content"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'pricingtable.php') !== false){
    echo 'id="content"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'portfolio-4-columns.php') !== false){
    echo 'id="portfolio"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'portfolio-3-columns.php') !== false){
    echo 'id="portfolio"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'portfolio-2-columns.php') !== false){
    echo 'id="portfolio"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'portfolio-single.php') !== false){
    echo 'id="portfolio"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'portfolio-ajax.php') !== false){
    echo 'id="portfolio"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'blog.php') !== false){
    echo 'id="blog"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'blog-single.php') !== false){
    echo 'id="blog"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'contact.php') !== false){
    echo 'id="portfolio"';
}
    ?>>
<div id="page">
<section id="top">
    <div class="top_inner wrapperoverlay clearfix">        
        <div class="widget"><h6>Latest Tweets</h6>
            <div class="tweet">
	
        </div>
        </div>
        <a href="#" class="showhidetop" title="Show/Hide">open</a>
    </div>
</section> <!-- END top -->

<header id="header">
	<div class="header_inner wrapper">
        <div class="header_top clearfix">
            <div id="logo" class="left_float">
                <a class="logotype" href="index.php"><img src="files/images/logo3.png" alt="Logotype"></a>  
            </div>
            
            <nav id="nav" class="right_float">
                <ul>
	<li><a href="index.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'index.php') !== false){ echo 'class="active"';}?>>Home</a></li>
			<li><a href="about.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'about.php') !== false){ echo 'class="active"';}?>>About</a></li>
                    <li><a href="shortcodes.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'shortcodes.php') !== false){ echo 'class="active"';}?>>Features</a>
						<ul>
                            <li><a href="shortcodes.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'shortcodes.php') !== false){ echo 'class="active"';}?>>Shortcodes</a></li>
                            <li><a href="pricingtable.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'pricingtable.php') !== false){ echo 'class="active"';}?>>Pricing Table</a></li>
                            <li><a href="#">3r Level</a>
                                <ul>
                                    <li><a href="#">Menu Entry one</a></li>
                                    <li><a href="#">Menu Entry two</a></li>
                                </ul>
                            </li>
                      </ul>
                    </li>
                    <li><a href="portfolio-4-columns.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'portfolio-4-columns.php') !== false){ echo 'class="active"';}?>>Portfolio</a>
					<ul>
                            <li><a href="portfolio-4-columns.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'portfolio-4-columns.php') !== false){ echo 'class="active"';}?>>4 Columns</a></li>
                            <li><a href="portfolio-3-columns.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'portfolio-3-columns.php') !== false){ echo 'class="active"';}?>>3 Columns</a></li>
                            <li><a href="portfolio-2-columns.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'portfolio-2-columns.php') !== false){ echo 'class="active"';}?>>2 Columns</a></li>
                            <li><a href="portfolio-ajax.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'portfolio-ajax.php') !== false){ echo 'class="active"';}?>>Portfolio (Ajax)</a></li>
                            <li><a href="portfolio-single.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'portfolio-single.php') !== false){ echo 'class="active"';}?>>Portfolio Single</a></li>
	</ul>
		</li>
			<li><a href="blog.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'blog.php') !== false){ echo 'class="active"';}?>>Blog</a></li>
                    <li><a href="contact.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'contact.php') !== false){ echo 'class="active"';}?>>Contact</a></li>
                </ul>
            </nav>
            
        </div>
   <?php
     if (strpos($_SERVER['SCRIPT_NAME'], 'index.php') !== false)  {?> 
            <div class="header_tagline seperator-section">
            <h1><strong>Hello World, This is b2gStudios</strong></h1>
            <h3>We specialize in responsive & dynamic web solutions.</h3>
        </div><?php }?>
    </div>	
</header>
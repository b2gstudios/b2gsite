<!-- This is the header page -->
<?php
$cachefile = 'cache.html';
$cachetime = 4 * 60;
// Serve from the cache if it is younger than $cachetime
if (file_exists($cachefile) && time() - $cachetime < filemtime($cachefile)) {
    include($cachefile);
    echo "<!-- Cached copy, generated ".date('H:i', filemtime($cachefile))." -->\n";
    exit;
}
ob_start();

?>
<?php header('Content-type: text/html; charset=utf-8'); ?>
<?php include 'includes/initialize.php';?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head profile="http://www.w3.org/2005/10/profile">
<link rel="icon" 
      type="image/png" 
      href="b2gwebsitesct/files/images/flame32x32.png" />


<!-- scaling not possible (for smartphones, ipad, etc.) -->
<meta name="google-site-verification" content="hfC6hr33CkqrLDNCR88648G4Rf4puUbuXLTJnMcoBMc" />
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
<META NAME="AUTHOR" CONTENT="b2gStudios Premium Professional Web Design & Development">
<META NAME="COPYRIGHT" CONTENT="&copy; 2012 b2gStudios Custom Web Development &amp; Design">
<META NAME="KEYWORDS" CONTENT="premium websites, custom websites, professional websites, build business web site company, company make business web sites, high quality web services, high quality websites, unique websites, professionally design, build a professional website, premium web design, premium web development, professional web company, premium web company, looking for a good website, custom, web, design, development, company builds professional websites, professional, hand,coded, tailored websites">

<?php if (strpos($_SERVER['SCRIPT_NAME'], 'index.php') !== false){
    echo '<META NAME="Description" CONTENT="Need a Premium Website?. We are b2gStudios. A Professional, Creative & Unique Web Studio. Offering Premium Custom Website Design and Development. Now Available: "Featured Product Showcase". Increase your sales, display products with flare just ask us how.">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'about-b2gstudios-website-design-development-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="About b2gStudios Professional Web Solutions. Need a Premium Website and Hosting? Our Experts will create a custom website package for you today!">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'website-seo-develop-design-b2gstudios-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="Premium Websites Designed and Developed by b2gStudios. Professional Websites made to order, tailored just for you and your business. Want a custom site? Contact us today!">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'professional-website-services-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="Competative Prices, Unbeatable Quality. We build Premium Websites that are custom, hand coded and optimized organically. Rank high on google with our professional website.">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'wordpress-website-development-design-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="Professional Website Design and Development. We offer many Premium Web Solutions: Responsive Layouts, Wordpress, Custom Plugins, E-commerce and our "White Glove" including Hosting.">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'contact-b2gstudios-responsive-websites-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="Need a Professional Website? Tailored for you and your business. Our Premium Websites are Optimized for all Browsers, even Mobile Phones.  Contact us to get started on your custom website today!">';
};

?>
<title>Premium Web Design and Development Company</title>
<link rel="canonical" href="http://b2gstudios.com"/>
<link href="files/css/fonts.css" rel="stylesheet" type="text/css" />
<link href="http://b2gcdn.appspot.com/assets/css/style.css" rel="stylesheet" type="text/css" title="style" />
<link href="http://b2gcdn.appspot.com/assets/css/isotope.css" rel="stylesheet" type="text/css" />
<link href="http://b2gcdn.appspot.com/assets/css/flexslider.css" rel="stylesheet" type="text/css" />
<link href="http://b2gcdn.appspot.com/assets/css/fancybox.css" rel="stylesheet" type="text/css" />
<link href="http://b2gcdn.appspot.com/assets/jplayer/jplayer.css" rel="stylesheet" type="text/css"  />
<link href="http://b2gcdn.appspot.com/assets/css/mqueries.css" rel="stylesheet" type="text/css" media="screen" />

<!-- GooglePlus+ -->
<script type="text/javascript">
window.___gcfg = {lang: 'en'};
(function() 
{var po = document.createElement("script");
po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(po, s);
})();</script>



   
</head>
<body 
<?php if (strpos($_SERVER['SCRIPT_NAME'], 'index.php') !== false){
    echo 'id="home"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'about-b2gstudios-website-design-development-ct.php') !== false){
    echo 'id="portfolio"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'website-seo-develop-design-b2gstudios-ct.php') !== false){
    echo 'id="portfolio"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'professional-website-services-ct.php') !== false){
    echo 'id="portfolio"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'wordpress-website-development-design-ct.php') !== false){
    echo 'id="portfolio"';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'contact-b2gstudios-responsive-websites-ct.php') !== false){
    echo 'id="portfolio"';
};

?>
>
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
                <a class="logotype" href="index.php"><div class="svg" data-svg="files/images/logo.svg"></div></a>  
            </div>
            
            <nav id="nav" class="right_float">
                <ul>
                    <li><a href="index.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'index.php') !== false){ echo 'class="active"';}?>>Home</a>
                    </li>
                    <li><a href="about-b2gstudios-website-design-development-ct.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'about-b2gstudios-website-design-development-ct.php') !== false){ echo 'class="active"';}?>>About</a>
                    </li>
                    <li><a href="website-seo-develop-design-b2gstudios-ct.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'website-seo-develop-design-b2gstudios-ct.php') !== false){ echo 'class="active"';}?>>Portfolio</a>
                    </li>
                    <li><a href="professional-website-services-ct.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'professional-website-services-ct.php') !== false){ echo 'class="active"';}?>>Services</a>
                    </li>
                    <li><a href="wordpress-website-development-design-ct.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'wordpress-website-development-design-ct.php') !== false){ echo 'class="active"';}?>>Prices</a>
                    </li>
            
                    <li><a href="contact-b2gstudios-responsive-websites-ct.php" <?php if (strpos($_SERVER['SCRIPT_NAME'], 'contact-b2gstudios-responsive-websites-ct.php') !== false){ echo 'class="active"';}?>>Contact</a>
                    </li>
                </ul>
            </nav>
            
        </div>
   <?php
     if (strpos($_SERVER['SCRIPT_NAME'], 'index.php') !== false)  {?> 
            <div class="header_tagline seperator-section">
            <h1>Premium Web Design and Development Company</h1> 
            <h3>Build a custom and professional business website, You can start <a href="contact-b2gstudios-responsive-websites-ct.php"><strong>here</strong></a>.</h3>
            <!-- <h3>Building Hand-Coded Premium Websites, Custom For You And Your Business.</h3> -->
            </div><?php };?>
    </div>  
</header>
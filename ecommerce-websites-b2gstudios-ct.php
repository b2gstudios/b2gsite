<!-- This is the header page -->
<?php include 'includes/initialize.php';?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head profile="http://www.w3.org/2005/10/profile">
<link rel="icon" 
      type="image/png" 
      href="files/images/flame32x32.png" />
<meta charset="utf-8">
<!-- scaling not possible (for smartphones, ipad, etc.) -->
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
<META NAME="AUTHOR" CONTENT="b2gStudios Premium Responsive Web Design & Development">
<META NAME="COPYRIGHT" CONTENT="&copy; 2012 b2gStudios Responsive Web Development & Design">
<META NAME="KEYWORDS" CONTENT="Premium Websites, Responsive Websites, Web Design, Web Development, Professional Websites, High Quality Websites, Custom Websites, Unique Websites">
<?php if (strpos($_SERVER['SCRIPT_NAME'], 'index.php') !== false){
    echo '<META NAME="Description" CONTENT="Need a Premium Website?. We are b2gStudios. A Professional, Creative & Unique Web Studio. Offering Premium Responsive Website Design and Development. Now Available: White Glove Web Solutions.">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'about-b2gstudios-website-design-development-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="About b2gStudios full service Web Solutions. Need a Premium Website and Hosting? Our Experts will create a custom website package for you today!">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'website-seo-develop-design-b2gstudios-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="Premium Websites Designed and Developed by b2gStudios. Professional Websites made to order, tailored just for you and your business. Contact us today for a quote!">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'professional-website-services-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="Competative Prices, Unbeatable Quality. We build Premium Websites that are hand coded and optimized organically">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'wordpress-website-development-design-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="Professional Website Design and Development. We offer many Premium Web Solutions: Responsive Layouts, Wordpress, E-commerce and our "White Glove" including Hosting.">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'contact-b2gstudios-responsive-websites-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="Need a Professional Website? Tailored for you and your business. Our Responsive Websites are Optimized for all Browsers, even Mobile Phones.  Contact us for a quote today!">';
};

?>
<title>Premium Responsive Web Design & Development Studio. Professional Hand-Coded Websites, Tailored For You And Your Business.</title>
<link rel="canonical" href="http://b2gstudios.com"/>
<link href="files/css/fonts.css" rel="stylesheet" type="text/css" />
<link href="files/css/style.css" rel="stylesheet" type="text/css" title="style" />
<link href="files/css/isotope.css" rel="stylesheet" type="text/css" />
<link href="files/css/flexslider.css" rel="stylesheet" type="text/css" />
<link href="files/css/fancybox.css" rel="stylesheet" type="text/css" />
<link href="files/jplayer/jplayer.css" rel="stylesheet" type="text/css"  />
<link href="files/css/mqueries.css" rel="stylesheet" type="text/css" media="screen" />


<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>


<script src="files/js/jquery.modernizr.min.js"></script>

<script src="files/js/jquery.tweet.js" ></script>
<script src="comments/script.js"></script>
<script src="files/js/flickrImport_min.js"></script>
<script src="files/js/raphael.js"></script>
<script src="files/js/elemental.min.js"></script>
<script src="files/js/rappar.js"></script>
<script src="files/js/jquery.vectron.js"></script>
 <?php tweet();?>
<script>
        $(document).ready(function(){
            $('.svg').vectron({ scale:1});
            // $('#bigzebra').vectron({ scale: 2 });
        });
    </script>

<script type="text/javascript" charset="utf-8">
    
    /* Callback to attach fancybox once the images load */
    function attachFancyBox()
    {
        $(".fancyBox").fancybox();
    }                   

    themeForest.flickrImport = new FlickrImport({
        "calls":[
            {
                "method":"flickr.photosets.getPhotos",
                "photosetId":"72157630056983179",
                "id":"b2gstudiosPhotoset",

                /*  BEGIN OPTIONAL FANCYBOX PARAMS */
                "imageLink":"preview",     // Tells the script to grab the image url for fancybox
                "className":"fancyBox",    // Class for attaching fancybox
                "callback":attachFancyBox  // Once the images show attach the fancybox script
                /* END */
            },
            {
                "method":"flickr.people.getPublicPhotos",
                "username":"b2gstudios",
                "id":"b2gstudiosRecentPhotos",

                /*  BEGIN OPTIONAL FANCYBOX PARAMS */
                "imageLink":"preview",     // Tells the script to grab the image url for fancybox
                "className":"fancyBox",    // Class for attaching fancybox
                "callback":attachFancyBox  // Once the images show attach the fancybox script
                /* END */
            },
            {
                "method":"flickr.photosets.getList",
                "username":"b2gstudios",
                "id":"b2gstudiosPhotosets",
                "perRow":"1"
            },
            {
                "method":"flickr.favorites.getPublicList",
                "username":"b2gstudios",
                "id":"b2gstudiosFavorites"
            },
            {
                "method":"flickr.interestingness.getList",
                "id":"b2gstudiosInterestingness"
            },
            {
                "method":"flickr.groups.pools.getPhotos",
                "groupId":"613394@N22",
                "id":"b2gstudiosPools"
            }
        ],
        "apiKey":"1d46b7ca5cb5a08dac43bfa703efd789",
        "secret":"97ded53f7595b624"
    });   
        
    </script> 
    <!-- Google Analytics -->
    <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-32896696-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
   
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
}elseif (strpos($_SERVER['SCRIPT_NAME'], '404.php') !== false){
    echo 'class="brown1" id="bg_1"';
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
            <h1><strong>Hello World, We Are b2gStudios</strong></h1>
            <h3>A Professional Web Studio, Specializing In Premium Responsive Websites.</h3>
            </div><?php };?>
    </div>  
</header>
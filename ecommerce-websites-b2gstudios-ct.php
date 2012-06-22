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
<META NAME="AUTHOR" CONTENT="b2gStudios Website Design & Development CT
<META NAME="COPYRIGHT" CONTENT="&copy; 2012 b2gStudios CT Website Development & Design">
<META NAME="KEYWORDS" CONTENT="web, sites, site, websites, twitter, facebook, estore, shopping cart, development, design, SEO, PHP, Mobile & Responsive Web Design">
<?php if (strpos($_SERVER['SCRIPT_NAME'], 'index.php') !== false){
    echo '<META NAME="Description" CONTENT="We are b2gstudios. A Professional, Creative & Unique Web Studio In Connecticut.  We specialize in responsive website design and provide development, hosting, Wordpress, mobile, iphone, SEO, Twitter, Facebook, ipad and professional services.">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'about-b2gstudios-website-design-development-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="About b2gStudios CT full service Wordpress, PHP, Ecommerce, Mobile, ipad, SEO, Twitter, Facebook, iphone, Hosting and Responsive Professional Websites.">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'website-seo-develop-design-b2gstudios-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="Portfolio of websites designed and developed by b2gStudios and containing PHP, Responsive Layouts, SEO, Twitter, Facebook, Ecommerce, SEO, Wordpress and Social Media integration.">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'professional-website-services-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="b2gStudios CT website prices for Wordpress, SEO, Twitter, Facebook, Ecommerce, Dynamic, Hosting and Mobile packages.">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'wordpress-website-development-design-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="Connecticut Website Design and Development SEO, Twitter, Facebook, Wordpress, Mobile, Ecommerce, PHP And Responsive services from b2gStudios CT.">';
}elseif (strpos($_SERVER['SCRIPT_NAME'], 'contact-b2gstudios-responsive-websites-ct.php') !== false){
    echo '<META NAME="Description" CONTENT="Contact b2gStudios Web Studio Connecticut to have a Ecommerce, SEO, Twitter, Facebook, Wordpress, Mobile, Responsive and PHP website design and developed for you.">';
};

?>
<title>Connecticut Web Design & Development Studio Professional Wordpress, Hosting, Ecommerce, PHP, Mobile, Responsive and Website Services.</title>
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
            <h1><strong>Hello World, We Are b2gStudios</strong></h1>
            <h3>A Connecticut Web Studio specializing in responsive website development and design.</h3>
            </div><?php };?>
    </div>	
</header>
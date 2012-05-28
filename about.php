<?php
include "includes/initialize.php";
require_once ('includes/functions.php');

?>

<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="de"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<!-- scaling not possible (for smartphones, ipad, etc.) -->
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />

<title><?php echo $title;?></title>


<link href="files/css/fonts.css" rel="stylesheet" type="text/css" />
<link href="files/css/style.css" rel="stylesheet" type="text/css" title="style" />
<link href="files/css/isotope.css" rel="stylesheet" type="text/css" />
<link href="files/css/flexslider.css" rel="stylesheet" type="text/css" />
<link href="files/css/fancybox.css" rel="stylesheet" type="text/css" />
<link href="files/jplayer/jplayer.css" rel="stylesheet" type="text/css"  />
<link href="files/css/mqueries.css" rel="stylesheet" type="text/css" media="screen" />
<link href="files/demo/demo.css" rel="stylesheet" />

<script src="files/js/jquery-1.7.1.min.js"></script>
<script src="files/js/jquery.modernizr.min.js"></script>

</head>
<body   id="home">
<div id="page">
<section id="top">
    <div class="top_inner wrapperoverlay clearfix">        
        <div class="widget"><h6>Latest Tweets</h6>
    <div id="twitter-widget">
    <ul class="tweet-list">
    <li><span class="tweet_time"><a href="#">about 2 hours ago</a></span> <span class="tweet_text">B2gstudios sample tweet. <a href="http://tomgabrysiak.com" target="_blank">Check us out!</a></span></li>
                </ul>
            </div>
        </div>
        <a href="#" class="showhidetop" title="Show/Hide">open</a>
    </div>
</section> <!-- END top -->

<header id="header">
    <div class="header_inner wrapper">
        <div class="header_top clearfix">
            <div id="logo" class="left_float">
                <a class="logotype" href="index.php"><img src="<?php echo $logo;?>" alt="Logotype"></a> 
            </div>
            
            <nav id="nav" class="right_float">
                <ul>
                    <li><a href="index.php">Home</a></li>
	<li><a href="about.php" class="active">About</a></li>
                    <li><a href="shortcodes.php">Features</a>
	<ul>
                            <li><a href="shortcodes.php">Shortcodes</a></li>
                            <li><a href="pricingtable.php">Pricing Table</a></li>
                            <li><a href="#">3r Level</a>
                                <ul>
                                    <li><a href="#">Menu Entry one</a></li>
                                    <li><a href="#">Menu Entry two</a></li>
                                </ul>
                            </li>
                      </ul>
                    </li>
                    <li><a href="portfolio-4-columns.php">Portfolio</a>
		<ul>
                            <li><a href="portfolio-4-columns.php">4 Columns</a></li>
	<li><a href="portfolio-3-columns.php">3 Columns</a></li>
	<li><a href="portfolio-2-columns.php">2 Columns</a></li>
                            <li><a href="portfolio-ajax.php">Portfolio (Ajax)</a></li>
                            <li><a href="portfolio-single.php">Portfolio Single</a></li>
                      </ul>
                    </li>
                	<li><a href="blog.php">Blog</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
            </nav>
        </div>
   
	</div>	
</header>


<section id="pagetitle">
	<div class="pagetitle_inner wrapperoverlay">
		<h2><strong>About Us</strong><span class="tagline">We are b2gstudios</span></h2>
    </div>
</section>


<section id="main">
    <div class="main_inner wrapper clearfix">
        
        <article>
        	
            <h2 class="page-description"><i>Hello, I am b2gstudios.  A Clean, Minimal & Responsive Portfolio/Blog Theme.  You can change your background-imag easily through CSS.</i></h2>
            
            <div class="seperator-section"></div>
            
        	<div class="column one_third"><img title="about" src="files/images/about/about.jpg" alt="" /></div>
                    
            <div class="column one_third">
                <h4><strong>b2gstudios - Web Agency</strong></h4>
                <p>
<div class="toggle">
                    <div class="toggle_title"><a href="#" class="color" alt="toggle"><span class="toggle_icon">+</span><b>Toggle</b></a></div>
                    <div class="toggle_inner">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</div>
                </div>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                <p>Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br />
            </div>
            
            <div class="column one_third last">
                <h4><strong>Skills</strong></h4>
                <div class="skill">
                    <span class="skill_name"><strong>Photoshop</strong></span>
                    <div class="skill_bar"><div class="skill_active" style="width: 57%;"></div><span><i>57%</i></span></div>
                </div>
                <div class="skill">
                    <span class="skill_name"><strong>Illustrator</strong></span>
                    <div class="skill_bar"><div class="skill_active" style="width: 35%;"></div><span><i>35%</i></span></div>
                </div>
                <div class="skill">
                    <span class="skill_name"><strong>HTML</strong></span>
                    <div class="skill_bar"><div class="skill_active" style="width: 75%;"></div><span><i>75%</i></span></div>
                </div>
                <div class="skill">
                    <span class="skill_name"><strong>Javascript</strong></span>
                    <div class="skill_bar"><div class="skill_active" style="width: 60%;"></div><span><i>60%</i></span></div>
                </div>
                
            </div><div class="clear"></div>
        	
            <div class="seperator">
            	<h6 class="sectiontitle">Our Team</h6>
            </div>
            
            <div class="column one_fourth">
            	<div class="team-member">
                    <img src="files/images/about/person.jpg" alt="Person"/>
                    <div class="team-meta">
                    	<h5><strong>John Doe</strong></h5>
                        <span class="team-title"><i>General Manager</i></span>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.
                    </p>
                </div>
            </div>
            
            <div class="column one_fourth">
            	<div class="team-member">
                    <img src="files/images/about/person.jpg" alt="Person"/>
                    <div class="team-meta">
                    	<h5><strong>John Doe</strong></h5>
                        <span class="team-title"><i>General Manager</i></span>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.
                    </p>
                </div>
            </div>
            
            <div class="column one_fourth">
            	<div class="team-member">
                    <img src="files/images/about/person.jpg" alt="Person"/>
                    <div class="team-meta">
                    	<h5><strong>John Doe</strong></h5>
                        <span class="team-title"><i>General Manager</i></span>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.
                    </p>
                </div>
            </div>
            
            <div class="column one_fourth last">
            	<div class="team-member">
                    <img src="files/images/about/person.jpg" alt="Person"/>
                    <div class="team-meta">
                    	<h5><strong>John Doe</strong></h5>
                        <span class="team-title"><i>General Manager</i></span>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.
                    </p>
                </div>
            </div>
            
        </article>
               
	</div> <!-- END #main_inner -->     
</section> <!-- END #main -->

<section id="bottom">
	<div class="bottom_inner wrapperoverlay">
    	<div class="widget"><h6>Social Media</h6>
            <?php social_media();?>
        </div>
    </div>
</section> <!-- END #bottom -->
    
<footer id="footer">
	<div class="footer_inner wrapper clearfix">
	<div class="column one_third seperator">
	<div class="widget">
                <h6 class="sectiontitle">About b2gstudios</h6>
                <div id="text-widget">
                    <p>
                    Sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non
                    </p>
                    <p>
                    Sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non
                    </p>
                    <p>
                        <a href="about.php" class="color readmore"><span class="readmoreicon">+</span>read more</a>
                    </p>
                </div>
            </div>
        </div>
        
        <div class="column one_third seperator">
            <div class="widget">
                <h6 class="sectiontitle">Flickr Feed</h6>
                <div id="flickr-widget">
                    <ul class="flickr-list">
                        <li><a href="#"><img src="files/images/portfolio/thumb-work_01.jpg"></a></li>
                        <li><a href="#"><img src="files/images/portfolio/thumb-work_02.jpg"></a></li>
                        <li><a href="#"><img src="files/images/portfolio/thumb-work_03.jpg"></a></li>
                        <li><a href="#"><img src="files/images/portfolio/thumb-work_04.jpg"></a></li>
                        <li><a href="#"><img src="files/images/portfolio/thumb-work_05.jpg"></a></li>
                        <li><a href="#"><img src="files/images/portfolio/thumb-work_06.jpg"></a></li>
                        <li><a href="#"><img src="files/images/portfolio/thumb-work_07.jpg"></a></li>
                        <li><a href="#"><img src="files/images/portfolio/thumb-work_08.jpg"></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="column one_third last seperator">
        	<div class="widget">
            	<h6 class="sectiontitle">Latest Tweets</h6>
            		<div id="twitter-widget">
						<ul class="tweet-list">
                			<li><span class="tweet_time"><a href="#">about 5 hours ago</a></span> <span class="tweet_text">Nullam id dolor id nibh ultricies vehicula ut id elit.</span></li>
                			<li><span class="tweet_time"><a href="#">about 8 hours ago</a></span> <span class="tweet_text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</span></li>
                			<li><span class="tweet_time"><a href="#">about 2 days ago</a></span> <span class="tweet_text">Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem.</span></li>
                		</ul>
                    </div>
                </div>
        </div>
	</div>  <!-- END .footer_inner -->
    <div class="footer_bottom clearfix ">
    <div class="left_float">Copyright © <?php echo date('Y');?> by b2gStudios. </div>     
        <div class="right_float">Created by <a href="http://www.tomgabrysiak.com">Tom Gabrysiak</a> for <a href="#">b2gStudios</a></div>
    </div>
</footer> <!-- END #footer -->

<a href="#" class="totop" title="Back to top">ToTop</a>
<?php resize_me();?>
</div> <!-- END #page -->


<!-- jquery -->
<script src="files/js/jquery.isotope.min.js"></script>
<script src="files/js/jquery.flexslider-min.js"></script>
<script src='files/js/jquery.easing.1.3.js'></script>
<script src='files/js/jquery.easing.compatibility.js'></script>
<script src="files/js/jquery.fancybox.pack.js"></script>
<script src="files/jplayer/jquery.jplayer.min.js"></script>
<script src="files/js/script.js"></script>


<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-29418297-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</body>

</html>



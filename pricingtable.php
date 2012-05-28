<?php
include "includes/initialize.php";


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
		<li><a href="about.php">About</a></li>
                    <li><a href="shortcodes.php"class="active">Features</a>
	<ul>
                            <li><a href="shortcodes.php">Shortcodes</a></li>
                            <li><a href="pricingtable.php"class="active">Pricing Table</a></li>
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
		<h2><strong>Pricing Table</strong></h2>
    </div>
</section>


<section id="main">
    <div class="main_inner wrapper clearfix">
        
        <article>
        
        	<div class="pricing col4 clearfix">
            	
                <div class="price-col best">
                	<div class="price-header">
                    	<h3><strong>Best</strong></h3>
                        <h2><strong>$ 9.00</strong></h2>
                        <span class="pricetime"><i>per month</i></span>
                	</div>
                    
                    <div class="price-body">
                    	<ul>
                        	<li><strong>100MB</strong> Disk Space</li>
                        	<li><strong>200MB</strong> Monthly Traffic</li>
                        	<li><strong>2</strong> Subdomains</li>
                        	<li><strong>5</strong> Email Accounts</li>
                        	<li>Webmail Support</li>
                        	<li>MySQL Support</li>
                        </ul>
                	</div>
                    
                    <div class="price-footer">
                		<a href="#" class="signupbutton">Sign Up</a>
                	</div>
                </div>
                
                <div class="price-col recommended">
                	<div class="price-header">
                    	<h3><strong>Recommended</strong></h3>
                        <h2><strong>$ 13.00</strong></h2>
                        <span class="pricetime"><i>per month</i></span>
                	</div>
                    
                    <div class="price-body">
                    	<ul>
                        	<li><strong>500MB</strong> Disk Space</li>
                        	<li><strong>1000MB</strong> Monthly Traffic</li>
                        	<li><strong>5</strong> Subdomains</li>
                        	<li><strong>10</strong> Email Accounts</li>
                        	<li>Webmail Support</li>
                        	<li>MySQL Support</li>
                        </ul>
                	</div>
                    
                    <div class="price-footer">
                		<a href="#" class="signupbutton">Sign Up</a>
                	</div>
                </div>
                
                <div class="price-col standard">
                	<div class="price-header">
                    	<h3><strong>Standard</strong></h3>
                        <h2><strong>$ 15.00</strong></h2>
                        <span class="pricetime"><i>per month</i></span>
                	</div>
                    
                    <div class="price-body">
                    	<ul>
                        	<li><strong>1000MB</strong> Disk Space</li>
                        	<li><strong>2000MB</strong> Monthly Traffic</li>
                        	<li><strong>10</strong> Subdomains</li>
                        	<li><strong>20</strong> Email Accounts</li>
                        	<li>Webmail Support</li>
                        	<li>MySQL Support</li>
                        </ul>
                	</div>
                    
                    <div class="price-footer">
                		<a href="#" class="signupbutton">Sign Up</a>
                	</div>
                </div>
                
                <div class="price-col standard last-col">
                	<div class="price-header">
                    	<h3><strong>Standard</strong></h3>
                        <h2><strong>$ 20.00</strong></h2>
                        <span class="pricetime"><i>per month</i></span>
                	</div>
                    
                    <div class="price-body">
                    	<ul>
                        	<li><strong>2000MB</strong> Disk Space</li>
                        	<li><strong>5000MB</strong> Monthly Traffic</li>
                        	<li><strong>50</strong> Subdomains</li>
                        	<li><strong>100</strong> Email Accounts</li>
                        	<li>Webmail Support</li>
                        	<li>MySQL Support</li>
                        </ul>
                	</div>
                    
                    <div class="price-footer">
                		<a href="#" class="signupbutton">Sign Up</a>
                	</div>
                </div>
                
            </div> <!-- END .pricing --> 
            
            <div class="seperator-section"></div>

            <div class="pricing col3 clearfix">
            	
                <div class="price-col best">
                	<div class="price-header">
                    	<h3><strong>Best</strong></h3>
                        <h2><strong>$ 9.00</strong></h2>
                        <span class="pricetime"><i>per month</i></span>
                	</div>
                    
                    <div class="price-body">
                    	<ul>
                        	<li><strong>100MB</strong> Disk Space</li>
                        	<li><strong>200MB</strong> Monthly Traffic</li>
                        	<li><strong>2</strong> Subdomains</li>
                        	<li><strong>5</strong> Email Accounts</li>
                        	<li>Webmail Support</li>
                        	<li>MySQL Support</li>
                        </ul>
                	</div>
                    
                    <div class="price-footer">
                		<a href="#" class="signupbutton">Sign Up</a>
                	</div>
                </div>
                
                <div class="price-col recommended">
                	<div class="price-header">
                    	<h3><strong>Recommended</strong></h3>
                        <h2><strong>$ 13.00</strong></h2>
                        <span class="pricetime"><i>per month</i></span>
                	</div>
                    
                    <div class="price-body">
                    	<ul>
                        	<li><strong>500MB</strong> Disk Space</li>
                        	<li><strong>1000MB</strong> Monthly Traffic</li>
                        	<li><strong>5</strong> Subdomains</li>
                        	<li><strong>10</strong> Email Accounts</li>
                        	<li>Webmail Support</li>
                        	<li>MySQL Support</li>
                        </ul>
                	</div>
                    
                    <div class="price-footer">
                		<a href="#" class="signupbutton">Sign Up</a>
                	</div>
                </div>
                
                <div class="price-col standard last-col">
                	<div class="price-header">
                    	<h3><strong>Standard</strong></h3>
                        <h2><strong>$ 20.00</strong></h2>
                        <span class="pricetime"><i>per month</i></span>
                	</div>
                    
                    <div class="price-body">
                    	<ul>
                        	<li><strong>2000MB</strong> Disk Space</li>
                        	<li><strong>5000MB</strong> Monthly Traffic</li>
                        	<li><strong>50</strong> Subdomains</li>
                        	<li><strong>100</strong> Email Accounts</li>
                        	<li>Webmail Support</li>
                        	<li>MySQL Support</li>
                        </ul>
                	</div>
                    
                    <div class="price-footer">
                		<a href="#" class="signupbutton">Sign Up</a>
                	</div>
                </div>
                
            </div> <!-- END .pricing --> 
            
        </article>
        
        
	</div> <!-- END #main_inner -->     
</section> <!-- END #main -->

<section id="bottom">
	<div class="bottom_inner wrapperoverlay">
    	<div class="widget"><h6>Social Media</h6>
            <div class="socialmedia">
                <a class="facebook" href="index.php" target="_blank"><span>Facebook</span></a>
                <a class="twitter" href="index.php" target="_blank"><span>Twitter</span></a>
                <a class="dribbble" href="index.php" target="_blank"><span>Dribbble</span></a>
                <a class="vimeo" href="index.php" target="_blank"><span>Vimeo</span></a>
                <a class="flickr" href="index.php" target="_blank"><span>Flickr</span></a>
                <a class="googleplus" href="index.php" target="_blank"><span>Google+</span></a>
            </div>
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

</script></body>

</html>



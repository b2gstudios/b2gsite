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


<?php head();?>
<?php tweet();?>
</head>
<body   id="home">
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
        	
            <h2 class="page-description"><i>We are b2gstudios.  A Modern, Unique & Responsive Portfolio/Blog Theme.  You can change your background-imag easily through CSS.</i></h2>
            
            <div class="seperator-section"></div>
            
	<div class="column one_third"><img title="about" src="files/images/6.jpg" alt="" /></div>
                    
            <div class="column one_third">
                <h4><strong>b2gstudios - Web Studio</strong></h4>
                
                    <p>We are a small talented web studio with a good sense of design.  Being unique is valuable and that's the foundation of b2gStudios. The Internet is a vast universe making it difficult to stand out and grab the target audience's attention.  We've traveled this universe many times and know what it takes offering many services for those who are just starting a business to those who want to revitalize their own.  The days are gone when having a website alone will generate sales, companies spend millions on web design and development because they realize where the future lies.</p>  
                         <p>b2gStudios appreciates talent and we've put together a band of rockstars who will make your dream a reality.  We design and develop various web solutions from starter <a href="pricingtable.php">Wordpress</a> to custom hosted <a href="pricingtable.php">eCommerce</a> applications which serve millions of users daily.  While in our infancy we decided that instead of being a jack of all trades but a master of none, we wanted to be great at one...ok maybe a few. Take a look at some of our work and services but remember to <a href="contact.php">contact us</a> if you have a question or would like more info regarding a package.</p>   
     
              <br />
            </div>

            
            <div class="column one_third last">
                <h4><strong>Skills</strong></h4>
                <div class="skill">
                    <span class="skill_name"><strong>PHP</strong></span>
                    <div class="skill_bar"><div class="skill_active" style="width: 57%;"></div><span><i>57%</i></span></div>
                </div>
                <div class="skill">
                    <span class="skill_name"><strong>Wordpress</strong></span>
                    <div class="skill_bar"><div class="skill_active" style="width: 35%;"></div><span><i>35%</i></span></div>
                </div>
                <div class="skill">
                    <span class="skill_name"><strong>jQuery/strong></span>
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



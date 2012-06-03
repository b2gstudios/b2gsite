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
	<li><a href="index.php" class="active">Home</a></li>
			<li><a href="about.php">About</a></li>
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
        
        <div class="header_tagline seperator-section">
            <h1><strong>Hello World, This is b2gStudios</strong></h1>
            <h3>We specialize in responsive & dynamic web solutions.</h3>
        </div>
    </div>	
</header>




     
<div id="animationsection" class="clearfix">
    
    <div id="slidersection">
        <div id="slider" class="slidermain">        
            <div class="flexslider">
                <ul class="slides">
                    <li>
                        <img src="files/images/slider-01.png" />
                        <div class="flex-caption"><h4><strong>One-Size &amp; One-Pixel </strong></h4><p>We build websites with responsive layouts maximizing user experience.</p></div>
                    </li>
                    <li>
                        <img src="files/images/slider-02.png" />
                        <div class="flex-caption"><h4><strong>Mobile Phone - Tablet - Desktop </strong></h4><p>Reach your customers anywhere efficiently, driving sales and increasing profits.  </p></div>
                    </li>
                    <li>
                        <img src="files/images/slider-03.png" />
                        <div class="flex-caption"><h4><strong>Go Ahead &amp; Try It, Resize Me! </strong></h4><p>Like a chameleon, this website adapts to any situation by changing its appearance.  Just try it yourself by resizing the window if your on a desktop. </p></div>
                    </li>
                    <li>
                        <img src="files/images/slider-05.png" />
                        
                    </li>
                    <li>
                        <img src="files/images/slider-04.png" />
                        <div class="flex-caption"><h4><strong>Design &amp; Development </strong></h4><p>With many packages to choose from, for new business or established corporations our solutions are helping many reach their audience. </p></div>
                    </li>
                    <li>
                        <img src="files/images/slider-06.png" />
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    <div id="loadingsection">
      <div id="pageloader" class="clearfix"> 
            <!-- CONTENT WILL BE LOADED HERE -->  
             
      </div>
    </div>
    
    <div id="loader"><div class="wrapper"><div class="loadingicon"><span><i>Loading</i></span></div></div></div>
        
</div>    


<section id="main">
<div class="main_inner wrapper clearfix">
        
        <div id="recentworks" class="seperator">
        
            <ul class="filter">
                <li><a class="active" href="#" data-option-value="*">All</a></li>
                <li><a href="#" data-option-value=".motion">Motion</a></li>
                <li><a href="#" data-option-value=".web">Web</a></li>
                <li><a href="#" data-option-value=".print">Print</a></li>
            </ul>
            
            
            <div id="masonry" class="portfolio-entries columns4 clearfix">
            	<div class="masonry_item portfolio-entry motion">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php" class="loadcontent" rel="nullam-id-dolor"><img src="files/images/portfolio/thumb-work_01.jpg" alt="Work 01"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php" class="loadcontent" rel="nullam-id-dolor"><strong>Nullam id dolor</strong></a></h5>
                        <span class="portfolio-categories">Motion</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry print">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php" class="loadcontent" rel="duo-dolores"><img src="files/images/portfolio/thumb-work_02.jpg" alt="Work 02"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php" class="loadcontent" rel="duo-dolores"><strong>Duo dolores</strong></a></h5>
                        <span class="portfolio-categories">Print</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry print">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php" class="loadcontent" rel="takimata-sanctus"><img src="files/images/portfolio/thumb-work_03.jpg" alt="Work 03"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php" class="loadcontent" rel="takimata-sanctus"><strong>Takimata sanctus</strong></a></h5>
                        <span class="portfolio-categories">Print</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry web">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php" class="loadcontent" rel="lorem-ipsum"><img src="files/images/portfolio/thumb-work_04.jpg" alt="Work 04"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php" class="loadcontent" rel="lorem-ipsum"><strong>Lorem ipsum</strong></a></h5>
                        <span class="portfolio-categories">Web</span>
                    </div>
             	 </div>
                
                <div class="masonry_item portfolio-entry motion">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php" class="loadcontent" rel="kasd-gubergren"><img src="files/images/portfolio/thumb-work_05.jpg" alt="Work 05"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php" class="loadcontent" rel="kasd-gubergren"><strong>Kasd gubergren</strong></a></h5>
                        <span class="portfolio-categories">Motion</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry web">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php" class="loadcontent" rel="accusam-et-justo"><img src="files/images/portfolio/thumb-work_06.jpg" alt="Work 06"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php" class="loadcontent" rel="accusam-et-justo"><strong>Accusam et justo</strong></a></h5>
                        <span class="portfolio-categories">Web</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry print">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php" class="loadcontent" rel="eirmod-tempor"><img src="files/images/portfolio/thumb-work_07.jpg" alt="Work 07"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php" class="loadcontent" rel="eirmod-tempor"><strong>Eirmod tempor</strong></a></h5>
                        <span class="portfolio-categories">Print</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry web">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php" class="loadcontent" rel="invidunt"><img src="files/images/portfolio/thumb-work_08.jpg" alt="Work 08"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php" class="loadcontent" rel="invidunt"><strong>Invidunt</strong></a></h5>
                        <span class="portfolio-categories">Web</span>
                    </div>
                </div>
            </div><!-- END #masonry -->
        
        </div><!-- END #recentworks -->
        
        
        <div id="latestnews" class="seperator">
        	<h6 class="sectiontitle">Latest News</h6>
            
            <div class="column one_third">
                <div class="entry clearfix">
                    <div class="entry-thumb">
                    	<div id="slider" class="slidercontent">        
                            <div class="flexslider">
                                <ul class="slides">
                                    <li>
                                        <img src="files/images/blog/post_03.jpg" alt="Blog Post 03"/>
                                    </li>
                                    <li>
                                        <img src="files/images/blog/post_02.jpg" alt="Blog Post 02"/>
                                    </li>
                                    <li>
                                        <img src="files/images/blog/post_01.jpg" alt="Blog Post 01"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>                    
                	
                    <div class="entry-content clearfix">
                    	<div class="entry-meta left_float">
                        	<div class="meta_type"><a href="blog-single.php" class="type_gallery"></a></div>
                        </div>
                        
                        <div class="entry-info right_float">
                            <div class="post-headline">
                                <h4><strong><a href="blog-single.php">Consectetuer adipiscing elit</a></strong></h4>
                                <span class="entry-date">March 15, 2012</span>
                            </div>
                            <p>

                            Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem.
                            </p>
                               
                        </div>
                    </div>
                </div>
            </div>
                        
            <div class="column one_third">
                <div class="entry clearfix">
                    <div class="entry-thumb">
	<div class="embeddedvideo">
		<iframe src="http://player.vimeo.com/video/41629467?title=0&amp;byline=0" width="56" height="100" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>                    
                	
                    <div class="entry-content clearfix">
                    	<div class="entry-meta left_float">
                        	<div class="meta_type"><a href="blog-single.php" class="type_video"></a></div>
                        </div>
                        
                        <div class="entry-info right_float">
                            <div class="post-headline">
                                <h4><strong><a href="blog-single.php">Nullam dictum</a></strong></h4>
                                <span class="entry-date">February 18, 2012</span>
                            </div>
                            <p>
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            </p>
                               
                        </div>
                    </div>
                </div>
            </div>
                        
            <div class="column one_third last">
                <div class="entry clearfix">
                    <div class="entry-thumb">
                    
                    	<script type="text/javascript">
							$(document).ready(function(){
								if($().jPlayer) {
									$("#jquery_jplayer").jPlayer({
										ready: function () {
											$(this).jPlayer("setMedia", {
												mp3: "files/audio/test.mp3",
												oga: "files/audio/test.ogg",
												end: ""
											});
										},
										swfPath: "files/jplayer",
										cssSelectorAncestor: "#jp_interface",
										supplied: "oga,mp3,  all"
									});
								
								}
							});
						</script>
					
						<div id="jquery_jplayer" class="jp-jplayer jp-jplayer-audio"></div>
			
						<div class="jp-audio-container">
							<div class="jp-audio">
								<div class="jp-type-single">
									<div id="jp_interface" class="jp-interface">
										<ul class="jp-controls">
			
											<li><div class="seperator-first"></div></li>
											<li><div class="seperator-second"></div></li>
											<li><a href="#" class="jp-play" tabindex="1">play</a></li>
											<li><a href="#" class="jp-pause" tabindex="1">pause</a></li>
											<li><a href="#" class="jp-mute" tabindex="1">mute</a></li>
											<li><a href="#" class="jp-unmute" tabindex="1">unmute</a></li>
										</ul>
			
										<div class="jp-progress-container">
											<div class="jp-progress">
												<div class="jp-seek-bar">
													<div class="jp-play-bar"></div>
												</div>
											</div>
										</div>
										<div class="jp-volume-bar-container">
											<div class="jp-volume-bar">
												<div class="jp-volume-bar-value"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> 
                        
                    </div>                    
                	
                    <div class="entry-content clearfix">
                    	<div class="entry-meta left_float">
                        	<div class="meta_type"><a href="blog-single.php" class="type_audio"></a></div>
                        </div>
                        
                        <div class="entry-info right_float">
                            <div class="post-headline">
                                <h4><strong><a href="blog-single.php">Vivamus elementum</a></strong></h4>
                                <span class="entry-date">February 03, 2012</span>
                            </div>
                            <p>
                            	Venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div><!-- END #latestnews -->
        
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
		<div id="fromtwo"></div>
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
<script src="files/js/loader.js"></script>


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



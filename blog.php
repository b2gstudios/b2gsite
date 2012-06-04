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
<body   id="blog">
<div id="page">



<section id="top">
    <div class="top_inner wrapperoverlay">        
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
                	<li><a href="blog.php" class="active">Blog</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
            </nav>
            
        </div>
       
    </div>	
</header>


<section id="pagetitle">
	<div class="pagetitle_inner wrapperoverlay">
		<h2><strong>Blog</strong><span class="tagline">Our latest News with sidebar</span></h2>
    </div>
</section>


<section id="main">
    <div class="main_inner wrapper clearfix">
        
        <article id="maincontent" class="left_float">
        	<div class="entry clearfix">
                <div class="entry-meta left_float clearfix">
                    <div class="meta_type"><a href="#" class="type_post"></a></div>
                    <div class="meta_date"><b>March 26, 2012</b></div>
                    <div class="meta_views ">58</div>
                    <div class="meta_likes"><a href="blog-single.php">12</a></div>
                    <div class="meta_comments"><a href="blog-single-2.php#comments">3</a></div>
                    <div class="meta_tags">post</div>
                    <div class="meta_readmore"><a href="blog-single.php" class="color readmore"><span class="readmoreicon">+</span>read more</a></div>
                </div>
                
                <div class="entry-content right_float">
					<div class="entry-thumb">
                    	<div class="imgoverlay">
                    		<a href="blog-single.php"><img src="files/images/blog/post_01.jpg" alt="Blog Post 01"/></a>
                        </div>
                    </div>
                    
                    <div class="entry-info">
                        <div class="post-headline">
                            <h3><strong><a href="blog-single.php">Suspendisse potenti</a></strong></h3>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.			</p>
						<p>
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="entry clearfix">
                <div class="entry-meta left_float clearfix">
                    <div class="meta_type"><a href="#" class="type_quote"></a></div>
                    <div class="meta_date"><b>March 22, 2012</b></div>
                    <div class="meta_tags">quote</div>
                </div>
                
                <div class="entry-content right_float">
                    <div class="entry-info">
                        <div class="post-headline">
                            <h3><strong><i>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</i></strong></h3>
                        </div>
                        <p>
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="entry clearfix">
                <div class="entry-meta left_float clearfix">
                    <div class="meta_type"><a href="#" class="type_gallery"></a></div>
                    <div class="meta_date"><b>March 15, 2012</b></div>
                    <div class="meta_views ">235</div>
                    <div class="meta_likes"><a href="blog-single.php">71</a></div>
                    <div class="meta_comments"><a href="blog-single-2.php#comments">0</a></div>
                    <div class="meta_tags">gallery</div>
                    <div class="meta_readmore"><a href="blog-single.php" class="color readmore"><span class="readmoreicon">+</span>read more</a></div>
                </div>
                
                <div class="entry-content right_float">
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
                    
                    <div class="entry-info">
                        <div class="post-headline">
                            <h3><strong><a href="blog-single.php">Consectetuer adipiscing elit</a></strong></h3>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.			</p>
						<p>
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                        </p>
                    </div>
                </div>
            </div>
            
            
            <div class="entry clearfix">
                <div class="entry-meta left_float clearfix">
                    <div class="meta_type"><a href="#" class="type_link"></a></div>
                    <div class="meta_date"><b>February 27, 2012</b></div>
                    <div class="meta_tags">link</div>
                </div>
                
                <div class="entry-content right_float">
                    <div class="entry-info">
                        <div class="post-headline">
                            <h3><strong><a href="index.php">Link to another site or wherever you want</a></strong></h3>
                        </div>
                        <p>
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                        </p>
                    </div>
                </div>
            </div>
            
            
            <div class="entry clearfix">
                <div class="entry-meta left_float clearfix">
                    <div class="meta_type"><a href="#" class="type_video"></a></div>
                    <div class="meta_date"><b>February 18, 2012</b></div>
                    <div class="meta_views ">122</div>
                    <div class="meta_likes"><a href="blog-single.php">5</a></div>
                    <div class="meta_comments"><a href="blog-single-2.php#comments">0</a></div>
                    <div class="meta_tags">video</div>
                    <div class="meta_readmore"><a href="blog-single.php" class="color readmore"><span class="readmoreicon">+</span>read more</a></div>
                </div>
                
                <div class="entry-content right_float">
					<div class="entry-thumb">
                    	<div class="embeddedvideo">
                    		<iframe src="http://player.vimeo.com/video/31738112?title=0&amp;byline=0&amp;portrait=0" width="400" height="225" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                  </div>
                    
                    <div class="entry-info">
                        <div class="post-headline">
                            <h3><strong><a href="blog-single.php">Nullam dictum felis eu pede</a></strong></h3>
                        </div>
                        <p>
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="entry clearfix">
                <div class="entry-meta left_float clearfix">
                    <div class="meta_type"><a href="#" class="type_audio"></a></div>
                    <div class="meta_date"><b>February 03, 2012</b></div>
                    <div class="meta_views ">23</div>
                    <div class="meta_likes"><a href="blog-single.php">1</a></div>
                    <div class="meta_comments"><a href="blog-single-2.php#comments">0</a></div>
                    <div class="meta_tags">audio</div>
                    <div class="meta_readmore"><a href="blog-single.php" class="color readmore"><span class="readmoreicon">+</span>read more</a></div>
                </div>
                
                <div class="entry-content right_float">
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
                    
                    <div class="entry-info">
                        <div class="post-headline">
                            <h3><strong><a href="blog-single.php">Vivamus elementum</a></strong></h3>
                        </div>
                        <p>
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
                        </p>
                    </div>
                </div>
            </div>
            
            
            <div id="pagination" class="right_float">
            	<a href="#" class="nav-next">Previous Entries</a>
            	<a href="#" class="nav-prev">Next Entries</a>
            </div> <!-- END #pagination -->
            
        </article>
        
        <aside id="sidebar" class="right_float">
        	<section class="sidebar_section seperator">
            	<div class="widget">
                    <h6 class="sectiontitle">Blog Categories</h6>
                    <div id="menu-widget" >
                        <ul>
                            <li><a href="#">Creative</a></li>
                            <li><a href="#">Web</a></li>
                            <li><a href="#">Architecture</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Motion</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section class="sidebar_section seperator">
            	<div class="widget">
                    <h6 class="sectiontitle">Text Widget</h6>
                    <div class="text-widget">
                        <p>
                        Nullam vulputate euismod urna non pharetra. Phasellus blandit mattis ipsum, ac laoreet lorem lacinia et. Cras et ligula libero. Quisque quis magna vitae ipsum consequat varius in ut ante. Maecenas a mi nibh, eu euismod orci. 
                    </p>
                    </div>
                </div>
            </section>
            
            <section class="sidebar_section seperator">
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
            </section>
            
            <section class="sidebar_section seperator">
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
            </section>
        </aside>
        
        
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



</body>
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



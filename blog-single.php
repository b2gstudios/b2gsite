<?php



// Error reporting:
error_reporting(E_ALL^E_NOTICE);
include 'includes/initialize.php';
include 'includes/functions.php';
include 'comments/connect.php';
include 'comments/comment.class.php';
require_once ('includes/functions.php');

/*
/   Select all the comments and populate the $comments array with objects
*/

$comments = array();
$result = mysql_query("SELECT * FROM comments ORDER BY id ASC");

while($row = mysql_fetch_assoc($result))
{
    $comments[] = new Comment($row);
}

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
<link href="files/demo/demo.css" rel="stylesheet" /><script src="files/js/jquery-1.7.1.min.js"></script>
<script src="files/js/jquery.modernizr.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="comments/script.js"></script>
</head>
<body   id="blog">
<div id="page">


<section id="top">
    <div class="top_inner wrapperoverlay">        
        <div class="widget"><h6>Latest Tweets</h6>
            <div id="twitter-widget">
                <ul class="tweet-list">                 <li><span class="tweet_time"><a href="#">about 2 hours ago</a></span> <span class="tweet_text">Include your twitter feed or just a normal text widget. <a href="http://themeforest.net/item/b2gstudios-clean-responsive-ajax-html5/2253282" target="_blank">By this theme here</a></span></li></ul>
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
                        <li><a href="blog.php"class="active">Blog</a></li>
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
            <div class="entry entry-single clearfix">
                <div class="entry-meta left_float clearfix">
                    <div class="meta_type"><a href="#" class="type_post"></a></div>
                    <div class="meta_date"><b>March 26, 2012</b></div>
                    <div class="meta_views ">58</div>
                    <div class="meta_likes"><a href="#">12</a></div>
                    <div class="meta_comments"><a href="#comments">2</a></div>
                    <div class="meta_tags">creative, web</div>
                </div>
                
                <div class="entry-content right_float">
                    <div class="entry-thumb">
                        <img src="files/images/blog/post_01.jpg" alt="Blog Post 01"/>
                    </div>
                    
                    <div class="entry-info">
                        <div class="post-headline">
                            <h3><strong>Suspendisse potenti</strong></h3>
                        </div>
                        <p>
                        Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo <a href="#" class="color">dolores et ea rebum</a>. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.   
                        </p>
                        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                        <blockquote>
                            <p>
                            <i>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</i>
                            </p>
                        </blockquote>
                        <p>
                        Luptatum zzril delenit augue duis dolore te feugait nulla facilisi. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. 
                        </p> 
                        <ul>
                            <li>Dignissim ut nulla</li>
                            <li>Fusce rhoncus consequat</li>
                            <li>Ultrices non volutpat</li>
                        </ul>
                        <p>
                        Luptatum zzril delenit augue duis dolore te feugait nulla facilisi. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. 
                        </p>
                    </div>
                </div>
            </div>
            
            
            <div id="comments" class="clearfix">
                <div id="commenticon" class="left_float"><span class="icon"></span></div>
                <div class="comment-list right_float">
                    <div class="comment">
                        <?php

/*
/   Output the comments one by one:
*/

foreach($comments as $c){
    echo $c->markup();
}

?>
                        <div class="user"><img src="files/images/blog/avatar.png" title="Avatar" /></div>
                        <div class="comment_content">
                            <h5><strong>Robin Seifeld</strong></h5>
                            <div class="comment_date">5 minutes ago</div>
                            <p>
                            Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </p>
                        </div>
                        
                        <div class="comment">
                        <div class="user"><img src="files/images/blog/avatar.png" title="Avatar" /></div>
                        <div class="comment_content">
                            <h5><strong>Robin Seifeld</strong></h5>
                            <div class="comment_date">3 minutes ago</div>
                            <p>
                            Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </p>
                        </div>
                    </div>
                        
                    </div>
                    
                    <div class="comment">
                        <div class="user"><img src="files/images/blog/avatar.png" title="Avatar" /></div>
                        <div class="comment_content">
                            <h5><strong>Robin Seifeld</strong></h5>
                            <div class="comment_date">2 hours ago</div>
                            <p>
                            Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </p>
                        </div>
                    </div>
                </div>
            </div> <!-- END #comments -->
            
            <div id="leavecomment" class="clearfix">
                <div id="leavecommenticon" class="left_float"><span class="icon"></span></div>
                <div class="leavecomment-form right_float">
                    <form id="add_comment" class="checkform" action="#" method="post">
                        <div>   <label for="name" class="req">NAME *</label>
                                <input type="text" name="name" class="name" value="NAME *" onFocus="if (this.value == 'NAME *') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'NAME *';}"/></div>
                        <div>   <label for="email" class="req">EMAIL *</label>
                                <input type="text" name="email" class="email" value="EMAIL *" onFocus="if (this.value == 'EMAIL *') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'EMAIL *';}"/></div>
                        <div>   <label for="comment_form" class="req">COMMENT *</label>
                                <textarea name="comment" class="comment_form" onFocus="if (this.value == 'COMMENT *') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'COMMENT *';}" rows="15" cols="50">COMMENT *</textarea></div>
                        <div><input class="submit" type="submit" value="Submit" name="submit_comment" /></div>
                    </form>
                    <p id="form-note"><span class="error_icon">Error</span><span class="error_message"><strong>Please check your entries!</strong></span></p>
                </div>    
            </div> <!-- END #leavecomment -->
            
            
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
                    <p>
                    Nullam vulputate euismod urna non pharetra. Phasellus blandit mattis ipsum, ac laoreet lorem lacinia et. Cras et ligula libero. Quisque quis magna vitae ipsum consequat varius in ut ante. Maecenas a mi nibh, eu euismod orci. 
                    </p>
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
                            <li><span class="tweet_time"><a href="#">about 5 hours ago</a></span> <span class="tweet_text">Yeah, Finally I got my Radiohead tickets. Looking Forward.</span></li>
                            <li><span class="tweet_time"><a href="#">about 5 hours ago</a></span> <span class="tweet_text">Yeah, Finally I got my Radiohead tickets. Looking Forward.</span></li>
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



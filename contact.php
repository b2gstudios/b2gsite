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
                    <li><a href="contact.php"class="active">Contact</a></li>
                </ul>
            </nav>
            
        </div>
       
    </div>	
</header>


<section id="pagetitle">
	<div class="pagetitle_inner wrapperoverlay">
		<h2><strong>Contact</strong><span class="tagline">Let's keep in touch</span></h2>
    </div>
</section>

   
<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false"></script>

<section id="map"></section>

<script type="text/javascript">
  function mapinitialize() {
	// FIND YOUR LATITUDE & LONGITUDE  -> http://itouchmap.com/latlong.php  
	var myLatlng = new google.maps.LatLng(41.628985,-72.733878);
	var myOptions = {
	  zoom: 14,
	  center: myLatlng,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map"), myOptions);
	
	var marker = new google.maps.Marker({
		position: myLatlng, 
		map: map,
		title:"b2gstudios Theme"
	});
	
  }
  mapinitialize();
</script>


<section id="main">
    <div class="main_inner wrapper clearfix">
     
        <article>
            <div class="column two_third">
                <h4><strong>Drop us a message</strong></h4>
                   

                 
<?php include 'process-form.php'; ?>



                   <div id="form-note" class="message">
            <?php echo !empty($error_list) ? $error_list : ''; ?>
            </div>
            <?php echo $field_rules['name'];?>
            <form id="contact-form" action="" method="post">

                <fieldset>

                    <div class="field">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" autofocus required="required"
                                title="Your first and last name" class="name" value="NAME *" onFocus="if (this.value == 'NAME *') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'NAME *';}">
                    </div>

                    <div class="field" title="sadfsadf">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required="required" title="We will respond to this address" class="email" value="EMAIL *" onFocus="if (this.value == 'EMAIL *') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'EMAIL *';}">
                    </div>

                    <div class="field">
                        <label for="phone">Phone</label>
                        <input type="text" id="phone" name="phone" value="PHONE" title="If you prefer a phone call" value="PHONE" onFocus="if (this.value == 'PHONE') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'PHONE';}">
                    </div>

                    <div class="field">
                        <label for="contact_reason">Contact Reason</label>
                        <select id="contact_reason" name="contact_reason" required="required"
                                title="Tell us how we can we help you">
                            <option></option>
                            <option>Hire b2gstudios</option>
                            <option>General Inquiry</option>
                            <option>Feedback</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div class="field">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" cols="15" rows="5" required="required"
                                class="message" onFocus="if (this.value == 'MESSAGE *') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'MESSAGE *';}" rows="15" cols="50">MESSAGE *</textarea>
                    </div>

                    <div class="field submit">
                        <input type="submit" value="Submit"/><input type="reset" value="Reset">
                    </div>

                </fieldset>

            </form>
                  
                 
         
       </div>
            
            <div class="column one_third last">
                <h4><strong>Contact Info</strong></h4>
                <p>
		<strong>b2gstudios</strong><br />
                116 Hamilton Drive<br />
                Berlin, CT 06037
                </p>
                <p>
                Phone: (1800) <br />
                Fax: (1800) <br />
                Website: <a href="#">dev.b2gstudios.com</a><br />
                Email: <a href="#">info@b2gstudios.com</a>
	</p>
            </div>
            <div class="clear"></div>
            
        </article>
        
	</div> <!-- END #main_inner -->     
</section> <!-- END #main -->

<section id="bottom">
	<div class="bottom_inner wrapperoverlay">
    	<div class="widget"><h6>Social Media</h6>
            <?php social_media();?>
        </div>
    </div>
</section> <!-- END #bottom --> <!-- END #bottom -->
    
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

</script></body>

</html>



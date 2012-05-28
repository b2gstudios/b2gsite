<?php



function resize_me () {
	$output = '<div id="resize-me" class="resize-me" style="position:fixed; bottom: 0px; right: 0px; height: 80px; width:80px; background: url(files/images/resize.png); z-index: 10000;"></div>
	';	
	echo $output;

}

function social_media () {
	$output = '<div class="socialmedia">
			   <a class="facebook" href="http://facebook.com/tombone321" target="_blank"><span>Facebook</span></a>
               <a class="twitter" href="http://twitter.com/tomgabrysiak" target="_blank"><span>Twitter</span></a>
               </div>';
               // <a class="dribbble" href="index.php" target="_blank"><span>Dribbble</span></a>
               // <a class="vimeo" href="index.php" target="_blank"><span>Vimeo</span></a>
               // <a class="flickr" href="index.php" target="_blank"><span>Flickr</span></a>
               // <a class="googleplus" href="index.php" target="_blank"><span>Google+</span></a>
               // </div>';
    echo $output;
}
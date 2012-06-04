<?php
function head(){
     $output='<link href="files/css/fonts.css" rel="stylesheet" type="text/css" />
<link href="files/css/style.css" rel="stylesheet" type="text/css" title="style" />
<link href="files/css/isotope.css" rel="stylesheet" type="text/css" />
<link href="files/css/flexslider.css" rel="stylesheet" type="text/css" />
<link href="files/css/fancybox.css" rel="stylesheet" type="text/css" />
<link href="files/jplayer/jplayer.css" rel="stylesheet" type="text/css"  />
<link href="files/css/mqueries.css" rel="stylesheet" type="text/css" media="screen" />
<link href="files/demo/demo.css" rel="stylesheet" />
<link rel="stylesheet" href="css/phone.css" type="text/css" media="screen" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="comments/script.js"></script>
<script src="files/js/jquery-1.7.1.min.js"></script>
<script src="files/js/jquery.modernizr.min.js"></script>';
echo $output;
}



function resize_me() {
     $output = '<div id="resize-me" class="resize-me" style="position:fixed; bottom: 0px; right: 0px; height: 80px; width:80px; background: url(files/images/resize.png); z-index: 10000;"></div>
     ';
     if ( ! preg_match( '/iPhone|iPod|iPad|BlackBerry|Android/', $_SERVER['HTTP_USER_AGENT'] ) ) {

          echo $output; //ECHOES THE CONTENTS OF THE $OUTPUT VARIABLE

     }

}

function social_media() {
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

function tweet() {
     $output = '<script language="javascript" src="files/js/jquery.tweet.js" type="text/javascript"></script>
               <script type="text/javascript">
               jQuery(function($){
               $(".tweet").tweet({
               username: "tomgabrysiak",
               join_text: "auto",
               avatar_size: 0,
               count: 1,
               auto_join_text_default: "we said,",
               auto_join_text_ed: "we",
               auto_join_text_ing: "we were",
               auto_join_text_reply: "we replied to",
               auto_join_text_url: "we were checking out",
               loading_text: "loading tweets..."
                    });
               $("#fromtwo").tweet({
          avatar_size: 32,
          count: 3,
          username: "tomgabrysiak",
          loading_text: "searching twitter...",
          refresh_interval: 60
        });
               });
              </script>';

     echo $output;
}

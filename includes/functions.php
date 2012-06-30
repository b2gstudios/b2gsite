<?php




function resize_me() {
     $output = '<div id="resize-me" class="resize-me" style="position:fixed; bottom: 0px; right: 0px; height: 80px; width:80px; background: url(files/images/resize.png); z-index: 10000;"></div>
     ';
     if ( ! preg_match( '/iPhone|iPod|iPad|BlackBerry|Android/', $_SERVER['HTTP_USER_AGENT'] ) ) {

          echo $output; //ECHOES THE CONTENTS OF THE $OUTPUT VARIABLE

     }

}

function social_media() {
     $output = '<div class="socialmedia">
                  <a class="facebook" href="http://facebook.com/b2gstudios" target="_blank"><span>Facebook</span></a>
               <a class="twitter" href="http://twitter.com/b2gstudios" target="_blank"><span>Twitter</span></a>
               </div>';
     // <a class="dribbble" href="index.php" target="_blank"><span>Dribbble</span></a>
     // <a class="vimeo" href="index.php" target="_blank"><span>Vimeo</span></a>
     // <a class="flickr" href="index.php" target="_blank"><span>Flickr</span></a>
     // <a class="googleplus" href="index.php" target="_blank"><span>Google+</span></a>
     // </div>';
     echo $output;
}

function tweet() {
     $output = '<script type="text/javascript">
               jQuery(function($){
               $(".tweet").tweet({
               username: "b2gstudios",
               join_text: "auto",
               avatar_size: 0,
               count: 1,
               auto_join_text_default: "",
               auto_join_text_ed: "",
               auto_join_text_ing: "",
               auto_join_text_reply: "",
               auto_join_text_url: "",
               loading_text: "loading tweets..."
                    });
               $("#fromtwo").tweet({
          avatar_size: 0,
          count: 3,
          username: "b2gstudios",
          loading_text: "searching twitter...",
          refresh_interval: 50
        });
               });
              </script>';

     echo $output;
}



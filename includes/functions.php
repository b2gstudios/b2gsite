<?php
function keywords($page){
 if (strpos($_SERVER['SCRIPT_NAME'], $page) !== false){
    $new='';
    switch ($page)
     {
     case 'about.php':
       $new=htmlentities("<meta name='keywords' content='about.php'>");
       return $new;
       break;
     case 'contact.php':
       $new=htmlentities("<meta name='keywords' content='contact.php'>");
       return $new;
       break;

     default:
       $new=htmlentities("<meta name='keywords' content='professionally design, custom plugin, wordpress solutions, custom wordpress, wordpress services, business professional, responsive website, business website, premium websites, custom website design, professional web design, premium websites, custom website development, premium web development'>");
       return $new;
     }


}
}

function get_web_page( $url )
{
    $options = array( 'http' => array(
        'user_agent'    => 'spider',    // who am i
        'max_redirects' => 10,          // stop after 10 redirects
        'timeout'       => 120,         // timeout on response
    ) );
    $context = stream_context_create( $options );
    $page    = @file_get_contents( $url, false, $context );
 
    $result  = array( );
    if ( $page != false )
        $result['content'] = $page;
    else if ( !isset( $http_response_header ) )
        return null;    // Bad url, timeout

    // Save the header
    $result['header'] = $http_response_header;

    // Get the *last* HTTP status code
    $nLines = count( $http_response_header );
    for ( $i = $nLines-1; $i >= 0; $i-- )
    {
        $line = $http_response_header[$i];
        if ( strncasecmp( "HTTP", $line, 4 ) == 0 )
        {
            $response = explode( ' ', $line );
            $result['http_code'] = $response[1];
            break;
        }
    }
 
    return $result;
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
 
  <a class="twitter" href="http://twitter.com/b2gstudios" target="_blank"><span>Twitter</span></a>
  <a class="googleplus" href="http://plus.google.com/u/0/102833874085082749058" target="_blank"><span>Google+</span></a>
               </div>';
    // <a class="facebook" href="http://facebook.com/b2gstudios" target="_blank"><span>Facebook</span></a>
     // <a class="dribbble" href="index.php" target="_blank"><span>Dribbble</span></a>
     // <a class="vimeo" href="index.php" target="_blank"><span>Vimeo</span></a>
     // <a class="flickr" href="index.php" target="_blank"><span>Flickr</span></a>
     
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



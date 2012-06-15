<?php



// Error reporting:
error_reporting(E_ALL^E_NOTICE);


include 'comments/connect.php';
include 'comments/comment.class.php';


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
<?php include 'header.php';?>

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
<?php include 'footer.php';?>
<?php
include "includes/initialize.php";

?>
<?php include 'header.php';?>
<section id="pagetitle">
	<div class="pagetitle_inner wrapperoverlay">
		<h2><strong>Portfolio</strong><span class="tagline">Ajax loads the project dynamically</span></h2>
    </div>
</section>


<div id="animationsection" class="clearfix">
    
    <div id="loadingsection">
      <div id="pageloader" class="clearfix"> 
            <!-- CONTENT WILL BE LOADED HERE -->   
      </div>
    </div>
    
    <div id="loader"><div class="wrapper"><div class="loadingicon"><span><i>Loading</i></span></div></div></div>
    
</div>


<section id="main">
    <div class="main_inner wrapper clearfix">
        
        <article class="seperator">
        
	<ul class="filter">
                <li><a class="active" href="#" data-option-value="*">All</a></li>
                <li><a href="#" data-option-value=".design">Design</a></li>
                <li><a href="#" data-option-value=".web">Web</a></li>
                <li><a href="#" data-option-value=".development">Development</a></li>
            </ul>
            
	<div id="masonry" class="portfolio-entries columns4 clearfix">
	<div class="masonry_item portfolio-entry design">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="nullam-id-dolor"><img src="files/images/portfolio/thumb-work_01.jpg" alt="Work 01"/></a>
                    </div>
                    <div class="portfolio-meta">
	<h5><a href="portfolio-single.php"class="loadcontent" rel="nullam-id-dolor"><strong>Nullam id dolor</strong></a></h5>
                        <span class="portfolio-categories">Design</span>
                    </div>
	</div>
                
                <div class="masonry_item portfolio-entry development">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="duo-dolores"><img src="files/images/portfolio/thumb-work_02.jpg" alt="Work 02"/></a>
                    </div>
                    <div class="portfolio-meta">
	<h5><a href="portfolio-single.php"class="loadcontent" rel="duo-dolores"><strong>Duo dolores</strong></a></h5>
                        <span class="portfolio-categories">Development</span>
                    </div>
	</div>
                
                <div class="masonry_item portfolio-entry development">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="takimata-sanctus"><img src="files/images/portfolio/thumb-work_03.jpg" alt="Work 03"/></a>
                    </div>
                    <div class="portfolio-meta">
	<h5><a href="portfolio-single.php"class="loadcontent" rel="takimata-sanctus"><strong>Takimata sanctus</strong></a></h5>
                        <span class="portfolio-categories">Development</span>
                    </div>
	</div>
                
                <div class="masonry_item portfolio-entry web">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="lorem-ipsum"><img src="files/images/portfolio/thumb-work_04.jpg" alt="Work 04"/></a>
                    </div>
                    <div class="portfolio-meta">
	<h5><a href="portfolio-single.php"class="loadcontent" rel="lorem-ipsum"><strong>Lorem ipsum</strong></a></h5>
                        <span class="portfolio-categories">Web</span>
                    </div>
	 </div>
                
                <div class="masonry_item portfolio-entry design">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="kasd-gubergren"><img src="files/images/portfolio/thumb-work_05.jpg" alt="Work 05"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php"class="loadcontent" rel="kasd-gubergren"><strong>Kasd gubergren</strong></a></h5>
                        <span class="portfolio-categories">Design</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry web">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="accusam-et-justo"><img src="files/images/portfolio/thumb-work_06.jpg" alt="Work 06"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php"class="loadcontent" rel="accusam-et-justo"><strong>Accusam et justo</strong></a></h5>
                        <span class="portfolio-categories">Web</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry development">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="eirmod-tempor"><img src="files/images/portfolio/thumb-work_07.jpg" alt="Work 07"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php"class="loadcontent" rel="eirmod-tempor"><strong>Eirmod tempor</strong></a></h5>
                        <span class="portfolio-categories">Development</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry web">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="invidunt"><img src="files/images/portfolio/thumb-work_08.jpg" alt="Work 08"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php"class="loadcontent" rel="invidunt"><strong>Invidunt</strong></a></h5>
                        <span class="portfolio-categories">Web</span>
                    </div>
                </div>
                
                <div class="masonry_item portfolio-entry post design">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="magna-aliguyam"><img src="files/images/portfolio/thumb-work_09.jpg" alt="Work 09"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php"class="loadcontent" rel="magna-aliguyam"><strong>Magna aliquyam</strong></a></h5>
                        <span class="portfolio-categories">Design</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry post web">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="molestie"><img src="files/images/portfolio/thumb-work_10.jpg" alt="Work 10"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php"class="loadcontent" rel="molestie"><strong>Molestie</strong></a></h5>
                        <span class="portfolio-categories">Web</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry post development">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="praesent-luptatum"><img src="files/images/portfolio/thumb-work_11.jpg" alt="Work 11"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php"class="loadcontent" rel="praesent-luptatum"><strong>Praesent luptatum</strong></a></h5>
                        <span class="portfolio-categories">Development</span>
                    </div>
              	</div>
                
                <div class="masonry_item portfolio-entry post web">
                    <div class="imgoverlay">
                        <a href="portfolio-single.php"class="loadcontent" rel="facilisi"><img src="files/images/portfolio/thumb-work_12.jpg" alt="Work 12"/></a>
                    </div>
                    <div class="portfolio-meta">
                    	<h5><a href="portfolio-single.php"class="loadcontent" rel="facilisi"><strong>Facilisi</strong></a></h5>
                        <span class="portfolio-categories">Web</span>
                    </div>
                </div>
            </div><!-- END #masonry -->	
        </article>
               
	</div> <!-- END #main_inner -->     
</section> <!-- END #main -->

    
<?php include 'footer.php';?>

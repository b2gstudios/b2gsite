
<!-- This is the contact page -->
<?php include 'ecommerce-websites-b2gstudios-ct.php';?>



<section id="pagetitle">
	<div class="pagetitle_inner wrapperoverlay">
		<h2><strong>Contact b2gStudios</strong><span class="tagline">Do you want a professional website?</span></h2>
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
		title:"b2gstudios"
	});
	
  }
  mapinitialize();
</script>



<section id="main">
    <div class="main_inner wrapper clearfix">
     
        <article>
            <div class="column two_third">
                <h4><strong>Want to work with us? Let us know.</strong></h4>
                   

                 
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
                        <label for="contact_reason">Reason For Contact?</label>
                        <select id="contact_reason" name="contact_reason" required="required"
                                title="Tell us how we can we help you">
                            <option></option>
                            <option>Request A Quote</option>                        
                            <option>General Inquiry</option>
                            <option>Special Request</option>
                            <option>EMERGENCY! Rush Project</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div class="field">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" cols="15" rows="5" required="required"
                                class="message" onFocus="if (this.value == 'MESSAGE *') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'MESSAGE *';}"></textarea>
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
                Explosive Web Solutions<br />
                Berlin, CT 06037
                </p>
                <p>

                Phone: 1(800) 725-7840
                <a onclick="goog_report_conversion('tel:800-725-7840')" href="tel:800-725-7840" ><button onclick="goog_report_conversion('tel:800-725-7840')">CALL NOW</button></a>
                
               <!--  Fax: (1800) --><br /> 
                Website: <a href="#">b2gstudios.com</a><br />
                Email: <a href="#">hireb2g@b2gstudios.com</a>
	</p>
            </div>
            <div class="clear"></div>
            
        </article>
        
	</div> <!-- END #main_inner -->     
</section> <!-- END #main -->
<?php include 'php-websites-b2gstudios-ct.php';?>
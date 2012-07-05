 jQuery(document).ready(function(a) {
	var b = new Expo360({
		xml: "http://b2gstudios.com/b2gwebsitesct/files/configuration/settings.xml",
		where: "#viewer"
	});
	a("#goFront").click(function() {
		b.goTo(0);
		return false
	})
 });
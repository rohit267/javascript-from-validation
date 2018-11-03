function valLogin(){
	var errorCode = valmail('lmail');
	  errorCode = valLoginPass('lpassword');
	if (errorCode==0) {
		var email = $("#lmail").val();
		var password = $("#lpassword").val();
		if(document.getElementById('remember').checked){
		var remember= true;
		}
		else{
			var remember= false;
		}
		var dataString={
			'email':email,
			'password':password,
			'remember':remember
		}

		$.ajax({
		type: "POST",
		url: "checklogin.php",
		data: dataString,
		cache: false,
		success: function(result){
			if (result=='ok') {
				window.location.href="book.php";
			}
			else{
				alert(result);
			}
		}
		});
	}
	else{
		alert("Check your inputs!");
	}
}

function valmail(field) {
	var data=document.getElementById(field).value;
	
	data = data.replace(/[ `~!#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/]/gi, '');
	data=data.trim();
	document.getElementById(field).value=data;
	if (data.length==0) {
		if (field=='lmail') {
			$('#lmailerr').html('Please enter your email!');
			return 1;
		}
		if(field=='rmail'){
			$('#rmailerr').html('Please enter your email!');
			return 1;
		}
	}
	else{
		if (field=='lmail') {
			$('#lmailerr').html('');
			return 0;
		}
		if(field=='rmail'){
			$('#rmailerr').html('');
			return 0;
		}
	}
}

function valLoginPass(field) {
	var data=document.getElementById(field).value;
	data=data.trim();
	document.getElementById(field).value=data;
	if(data.length==0){
		$('#lpasserr').html('Enter your password');
		return 1;
	}
	else{
		$('#lpasserr').html('');
		return 0;
	}	
}

function valRegister() {
	var errorCode = valname('name');
	errorCode = valmail('rmail');
	errorCode = valmob('mobile');
	errorCode = valpass('rpassword');
	errorCode = valcpass('cpass');
	if (errorCode==0) {

		//CODE TO SEND DATA TO 

		var name = $("#name").val();
		var email = $("#rmail").val();
		var password = $("#rpassword").val();
		var mobile = $("#mobile").val();
		// Returns successful data submission message when the entered information is stored in database.
		var dataString = {
			'name':name,
			'email':email,
			'mobile':mobile,
			'password':password
		}

		// AJAX Code To Submit Form.
		$.ajax({
		type: "POST",
		url: "sendregister.php",
		data: dataString,
		cache: false,
		success: function(result){
		alert(result);
		}
		});
	}
	else{
		alert("Check your inputs!");
	}
}


function valname(field) {
	var data=document.getElementById(field).value;
	data = data.replace(/[0123456789`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
	data=data.trim();
	document.getElementById(field).value=data;
	if (data.length==0) {
		$('#nameerr').html("Please input an valid Name!");
		return 1;
	}
	else{
		$('#nameerr').html('');
		return 0;
	}
}

function valmob(field) {
	var data=document.getElementById(field).value;
	data = data.replace(/[qwertyuiopasdfghjklmnbvcxz`~!@#$%^&*()_|\=?;:'",<>\{\}\[\]\\\/]/gi, '');
	data=data.trim();
	document.getElementById(field).value=data;
	if (data.length!=13) {
		$('#moberr').html("Invalid Mobile No.");
		return 1;
	}
	else{
		$('#moberr').html('');
		return 0;
	}
}
function valpass(field) {
	var data=document.getElementById(field).value;
	data=data.trim();
	document.getElementById(field).value=data;
	if(data.length==0){
		$('#rpasserr').html('Please enter your password');
		return 1;
	}
	if(data.length<8){
		$('#rpasserr').html('Password must be 8 characters long');
		return 1;
	}
	else{
		$('#rpasserr').html('');
		return 0;
	}
}
function valcpass(field) {
	var pass=document.getElementById('rpassword').value;
	var cpass=document.getElementById(field).value;
	cpass=cpass.trim();
	if (cpass.length==0) {
		$('#cpasserr').html('Please confirm your password');
		return 1;
	}
	if (cpass!=pass) {
		$('#cpasserr').html('Passwords does not match');
		return 1;
	}
	else{
		$('#cpasserr').html('');
		return 0;
	}
}

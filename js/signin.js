$("#btn-subscribe").click(function(){
   if($('#email').val()==''){
      alert('Email wajib diisi!');
   } else if(!validateEmail($('#email').val())){
      alert('Silahkan masukan email dengan format yang benar!');
   } else {
      var reset_val = $('#btn-subscribe').html();
      $('#btn-subscribe').html('<i class="icon-refresh icon-spin"></i> Loading');
           $.ajax({
                   url: 'Sections/submit',
                   type     : 'post',
                   data     : $('#email').serialize(),
                   dataType   : 'json',
                   success      : function(ret){
                        $('#btn-subscribe').html(reset_val);
                        $('#email').val('');
                        alert(ret.message);
                   },
                   error:function(ret){
                              $('#btn-subscribe').html(reset_val);
                              $('#email').val('');
                              alert(ret.message);
                           },
           });
   }
   return false;
});

$("#button-subscribe").click(function(){
   if($('#email_footer').val()==''){
      alert('Email wajib diisi!');
   } else if(!validateEmail($('#email_footer').val())){
      alert('Silahkan masukan email dengan format yang benar!');
   } else {
      var reset_val = $('#button-subscribe').html();
      $('#button-subscribe').html('<i class="icon-refresh icon-spin"></i> Loading');
           $.ajax({
                   url: 'Sections/submit',
                   type     : 'post',
                   data     : $('#email_footer').serialize(),
                   dataType   : 'json',
                   success      : function(ret){
                        $('#button-subscribe').html(reset_val);
                        $('#email_footer').val('');
                        alert(ret.message);
                   },
                   error:function(ret){
                              $('#button-subscribe').html(reset_val);
                              $('#email_footer').val('');
                              alert(ret.message);
                           },
           });
   }
   return false;
});
function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}

// var input = document.getElementById("email");
// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("reset").click();
//   }
// });

// $("#forgot-store").click(function(){
//    setInterval(function(){  $('#email').focus(); }, 3000);
//    $('#email').focus();
//    return false;
// });
$('form').submit(function(e) {
  e.preventDefault();
  $ajax ({
    type:"POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function(){
    $(this).find("textarea").val("");
  
  
   $('form').trigger('reset');
  });
  
  return false;
  
  });
  });
  
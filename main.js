$(document).ready(function() {
  var input = $('#input');
  var output = $('#output');
  var inputType = $('#input-type');

  var execute = function() {
    try {
      var type = 'text';
      var val = input.val();
      if (inputType.length) {
        type = inputType.val();
      }
      val = $.md5(val);
      output.val(val);
    } catch(e) {
       
    }
  }
 

  $('#encryptmd5').click(execute);
 
});
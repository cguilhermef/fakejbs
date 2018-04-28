/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
  var $keywords = $('#keywords');
  if ($keywords) {
    $keywords.on('input', function(e) {
      var words = $keywords.val().split(' ');
      if (words.length > 5) {
        $keywords.val(words.slice(0, 5).join(' '));
        return;
      }
    });
  }
});


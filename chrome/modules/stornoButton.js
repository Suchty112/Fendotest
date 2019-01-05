function stornoButton() {
  $('#mission-aao-group').before('<button type="button" id="stornoButton" class="btn btn-info btn-sm" style="margin-bottom:10px">' +
    'Auswahl stornieren</button>');

  function storno() {
    location.href = "javascript:vehicleSelectionReset()";
    $('div[id^="aaocounter"]').each(function() {
      $(this).css('display', 'none');
      $(this).html('0');
    });
  }
  $(document).ready(function() {
    $("#stornoButton").click(storno);
  });
}

stornoButton();

function kombiButton() {
  var link = window.location.pathname;
  $('#mission-aao-group').before('<a href="#" id="combiButton" class="btn btn-success btn-sm" style="margin-bottom:10px">' +
    '<img class="icon icons8-Share" src="/images/icons8-share.svg" width="16" height="16">' +
    '<img class="icon icons8-Phone-Filled" src="/images/icons8-phone_filled.svg" width="16" height="16">' +
    '<span class="glyphicon glyphicon-arrow-right" style="font-size:11px"></span>' +
    '</a>');
  $('#combiButton').click(function() {
    $(".alert_next_alliance")[0].click();
  });
}

kombiButton();

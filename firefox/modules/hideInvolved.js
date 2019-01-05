function hideInvolved() {
  $('#btn-group-mission-select').append('<a href="#" class="btn btn-xs btn-success" id="hideShowInvolved" title="Eigenbeteiligung aus-/einblenden"><i class="glyphicon glyphicon-user"></i></a>');

  function hideShow() {
    var e = $(this);
    if (e.hasClass('btn-success')) {
      e.removeClass('btn-success').addClass('btn-danger');

      function hideShowLoop() {
        if (e.hasClass('btn-danger')) {
          $('#mission_list_alliance > div, #mission_list_sicherheitswache > div, #mission_list_alliance_event > div').each(function() {
            var panel = $(this).find('div.panel-success');
            if (panel.attr('class')) {
              if ($(this).find('span.glyphicon-user:visible').length > 0) {
                $(this).addClass('hide');
                /*$(this).css({
                  'display': "none"
                });*/
              }
            }
          });
          if (e.hasClass('btn-danger')) {
            setTimeout(hideShowLoop, 1000);
          }
        } else {
          return false;
        }
      }
      hideShowLoop();
    } else {
      e.removeClass('btn-danger').addClass('btn-success');
      $('#mission_list_alliance > div, #mission_list_sicherheitswache > div, #mission_list_alliance_event > div').each(function() {
        var panel = $(this).find('div.panel-success');
        if (panel.attr('class')) {
          if ($(this).find('span.glyphicon-user:not(.hidden)').length > 0) {
            $(this).removeClass('hide');
            /*$(this).css({
              'display': "block"
            });*/
          }
        }
      });
    }
    return false;
  }

  $(document).ready(function() {
    $("#hideShowInvolved").click(hideShow);
  });
}

hideInvolved();

function clickCount() {
  function createcounter() {
    $('.aao').each(function() {
      $(this).append('<div id="aaocounter" style="border-radius: 8px;position: relative;top: -20px;z-index: 1000;background: red;color: white;width: 16px;height: 16px;left: -8px;display: none">0</div>');
    });
    $('[vehicle_group_id]').each(function() {
      $(this).append('<div id="aaocounter" style="border-radius: 8px;position: relative;top: -20px;z-index: 1000;background: red;color: white;width: 16px;height: 16px;left: -8px;display: none">0</div>');
    });
  }

  function raisecounter(element) {
    var aaocounter = parseInt($(element).find('#aaocounter').html());
    ++aaocounter;
    $(element).find('#aaocounter').html(aaocounter);
    $(element).find('#aaocounter').css('display', 'block');
  }

  createcounter();

  $('.aao').bind('click', function() {
    raisecounter(this);
  });

  $('[vehicle_group_id]').bind('click', function() {
    raisecounter(this);
  });
}

clickCount();

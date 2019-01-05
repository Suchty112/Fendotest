function selectAllButton() {
  $('.navbar-header').after('<button type="button" id="selectAllButton" class="btn btn-info btn-sm navbar-right" style="margin-top:10px;margin-left:20px;margin-right:10px">' +
    'Alles auswählen</button>');
  $('#selectAllButton').bind('click', function() {
    $("div.active").find("input[type='checkbox']").click();
    $("div.show").find("input[type='checkbox']").click();
  });
}

selectAllButton();

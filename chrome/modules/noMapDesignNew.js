function noMap() {
  // No Map Design
  if (!(window.location.search != '')) {
    $('#btn-alliance-new-mission').parent().detach().insertAfter('#missions .btn-group').addClass('pull-right');
    $('#missions_outer').addClass('col-md-12');
  }
}

noMap();

$("#mission_chat_messages li:mcontains('@all','@alle')").addClass('chatToSelf');
$("#mission_chat_messages li:mcontains('#hilfe','#help','#frage')").addClass('chatHelp');
$("#mission_chat_messages li:mcontains('#info')").addClass('chatInfo');
if ((alliance_admin) || (alliance_coadmin)) {
  $("#mission_chat_messages li:mcontains('@admin')").addClass('chatToSelf');
}

$(document).bind(hookFunction('allianceChat', function() {
  $("#mission_chat_messages li:mcontains('@all','@alle')").addClass('chatToSelf');
  $("#mission_chat_messages li:mcontains('#hilfe','#help','#frage')").addClass('chatHelp');
  $("#mission_chat_messages li:mcontains('#info')").addClass('chatInfo');
  if ((alliance_admin) || (alliance_coadmin)) {
    $("#mission_chat_messages li:mcontains('@admin')").addClass('chatToSelf');
  }
}));

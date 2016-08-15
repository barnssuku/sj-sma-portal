$(document).ready(function(){
	$('#div_table').addClass('hide-sections');
	$('#ass_meeting_days').addClass('hide-sections');

	$('#masses').click(function(){
		$('#div_table').removeClass();
		$('#ass_meeting_days').addClass('hide-sections')
		$('#div_table').addClass('show-sections');
	});
	$('#meetings').click(function(){
		$('#ass_meeting_days').removeClass();
		$('#div_table').addClass('hide-sections');
		$('#ass_meeting_days').addClass('show-sections');
	});
});
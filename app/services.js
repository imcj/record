App.Services = (function(lng, app, undefined) {
	var initToday = function ( )
	{
		var parameters = {
			el: "#today",
			template: "record-item",
			data: [ { message: '健身' }, { message: '进行Record项目'} ]
		};

		lng.View.Template.List.create ( parameters );
	};

    return {
    	initToday: initToday
    }

})(LUNGO, App);
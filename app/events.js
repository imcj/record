App.Events = (function(lng, app, undefined) {
	lng.ready ( function ( )
	{
		App.Services.initToday ( );
	} );

	lng.dom ( '#today div ul li input[type="text"]' ).on (
		'keyup',
		function ( event )
		{
			if ( 13 == event.keyCode ) {
				var message = event.target.value;
				event.target.value = '';
				
				var parameters = {
					el: "#list-today",
					templates: "record-item",
					data:
						{ message: message }
				};

				console.debug ( parameters );

				lng.View.Template.List.append ( parameters );
			}
		}
	);
    return {

    }

})(LUNGO, App);
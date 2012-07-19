App.Data = (function(lng, app, undefined) {
	lng.Data.Sql.init({
		name: "record.js",
		version: '10.8',
		schema: [
			{
				name: 'record',
				drop: true,
				fields: {
					id: "INTEGER PRIMARY KEY",
					atPost: "DATETIME",
					atEnd: "DATETIME",
					message: "TEXT"

				}
			}
		]
	});
    return {

    }

})(LUNGO, App);
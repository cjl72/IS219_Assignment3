(function ($) {
    $('#bioTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/bio",
        "columns": [
            { "data": "Name" },
            { "data": "Sex" },
            { "data": "Age" },
            { "data": "Height_in" },
            { "data": "Weight_lbs" }
        ]
    } );

})(jQuery);
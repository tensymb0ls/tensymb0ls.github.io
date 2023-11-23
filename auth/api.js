(function ($) {
    $(window).on('load', function () {
        $.instagramFeed({
            'username': 'ten.symbols',
            'container': "#instafeed",
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'styling': true,
            'items': 5,
            'items_per_row': 5,
            'margin': 0.5
        });
    });
})(jQuery);
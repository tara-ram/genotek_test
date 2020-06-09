$(document).ready(function() {
    $('.card-header').click(function (e) {
        e.preventDefault();
        $(this).find('.arrows-rotate').toggleClass('arrows-rotate_up');
    });
    function bootstrapClearButton() {
        $('.form-group :input').on('keydown focus', function() {
            if ($(this).val().length > 0) {
                $(this).nextAll('.block-clear').removeClass('d-none');
            }
        }).on('keydown keyup blur', function() {
            if ($(this).val().length === 0) {
                $(this).nextAll('.block-clear').addClass('d-none');
            }
        });
        $('.block-clear').on('click', function() {
            $(this).addClass('d-none').prevAll(':input').val('');
        });
    }
    bootstrapClearButton();
});


jQuery(document).ready(function () {
    jQuery('.ins-dropdown').click(function () {
        var inner = jQuery(this).parent().find('>li.ins-hidden,>li.ins-shown');
        if (inner.hasClass('ins-hidden')) {
            inner.show('fast');
            inner.removeClass('ins-hidden');
            inner.addClass('ins-shown');
        } else if(inner.hasClass('ins-shown')){
            inner.hide('fast');
            inner.removeClass('ins-shown');
            inner.addClass('ins-hidden');
            
        }
    });
});


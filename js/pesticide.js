jQuery(document).ready(function () {
    jQuery('.pesticide-dropdown').click(function () {
        var inner = jQuery(this).parent().find('>li.pesticide-hidden,>li.pesticide-shown');
        if (inner.hasClass('pesticide-hidden')) {
            inner.show('fast');
            inner.removeClass('pesticide-hidden');
            inner.addClass('pesticide-shown');
        } else if(inner.hasClass('pesticide-shown')){
            inner.hide('fast');
            inner.removeClass('pesticide-shown');
            inner.addClass('pesticide-hidden');
            
        }
    });
});


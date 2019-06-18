// Custom Row Creator by Amir Salehi (AmirSalehi.ir)
// 2019 15 June

(function ($) {

    $.fn.appender = function (settings) {

        var appendArea = this;

        let rowHtml = $(settings.rowSection)[0].outerHTML;

        if (settings.hideSection) {
            $(settings.rowSection).remove();
        }

        let rowCounter = 1;

        if (settings.rowNumberStart) {
            rowCounter = Number(settings.rowNumberStart);
        }

        $(document).on('click', settings.addBtn, function () {

            $(appendArea).append(rowHtml);

            if (settings.appendEffect === 'fade') {
                $(settings.rowSection).last().hide().fadeIn();
            } else if (settings.appendEffect === 'slide') {
                $(settings.rowSection).last().hide().slideDown(200);
            }

            $(settings.rowSection).last().addClass(settings.addClass);


            $(settings.rowNumber).last().text(rowCounter);
            rowCounter++;
        });


        $(document).on('click', settings.deleteBtn, function (e) {
            e.target.closest(settings.rowSection).remove();
        })
    };

}(jQuery));
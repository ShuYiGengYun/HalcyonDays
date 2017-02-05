/**
 * Created by Shinelon on 2017/2/5.
 */
$(function () {
    $("#nav-toggle").click(function () {
        /*显示导航-start*/
        $("nav nav").slideToggle("normal").toggleClass("showToggle");
        /*显示导航-end*/

        /*导航按钮切换-start*/
        var klass = $(this).find("i").attr("class");
        var index = klass.indexOf("icon-remove");
        var index_1 = klass.indexOf("icon-reorder");
        if (index < 0) {
            $(this).find("i").addClass("icon-remove").removeClass("icon-reorder");
        }
        if (index_1 < 0) {
            $(this).find("i").addClass("icon-reorder").removeClass("icon-remove");
        }
        /*导航按钮切换-end*/

    });
});
$(function () {

    //Next button click shows next image and checking the image is the last element of the div,
    //if so then returns to the first image

    $(".nextBtn").on("click", function () {
        let currentImgSelect = $(".active");
        let nextImgSelect = currentImgSelect.next();
        let firstImgSelect = $("div img").first();
       
        if (nextImgSelect.length) {
            currentImgSelect.removeClass("active").css("z-index", -10);
            nextImgSelect.addClass("active").css("z-index", 10);

        }else if($("div img").last()) {
            currentImgSelect.removeClass("active").css("z-index", -10);
            firstImgSelect.addClass("active").css("z-index", 10);

        }
    });

    //Previous button click shows previous image and checking the image is the first element of the div,
    //if so then returns to the last image

    $(".prevBtn").on("click", function () {
        let currentImgSelect = $(".active");
        let prevImgSelect = currentImgSelect.prev();

        if (prevImgSelect.length) {
            currentImgSelect.removeClass("active").css("z-index", -10);
            prevImgSelect.addClass("active").css("z-index", 10);
        }else if($("div img").first()) {
            currentImgSelect.removeClass("active").css("z-index", -10);
            $("div img").last().addClass("active").css("z-index", 10);

        }
    });
})



$(function () {

    //Next button click shows next image and checking the image is the last element of the div,
    //if so then returns to the first image

    $(".next").on("click", function () {
        let currentImg = $(".active");
        let nextImg = currentImg.next();
        let firstImg = $("div img").first();
       
        if (nextImg.length > 0) {
            currentImg.removeClass("active").css("z-index", -10);
            nextImg.addClass("active").css("z-index", 10);

        }else if($("div img").last()) {
            currentImg.removeClass("active").css("z-index", -10);
            firstImg.addClass("active").css("z-index", 10);

        }
    });

    //Previous button click shows previous image and checking the image is the first element of the div,
    //if so then returns to the last image

    $(".prev").on("click", function () {
        let currentImg = $(".active");
        let prevImg = currentImg.prev();

        if (prevImg.length > 0) {
            currentImg.removeClass("active").css("z-index", -10);
            prevImg.addClass("active").css("z-index", 10);
        }else if($("div img").first()) {
            currentImg.removeClass("active").css("z-index", -10);
            $("div img").last().addClass("active").css("z-index", 10);

        }
    });
})



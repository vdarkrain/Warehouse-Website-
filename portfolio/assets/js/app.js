$("[data-scroll]").on("click", function (event) {
   event.preventDefault();

   var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;


   $("html, body").animate({
      scrollTop: blockOffset
   }, 700);
});




$("#nav__toggle").on("click", function (event) {
   event.preventDefault();

   $(this).toggleClass("active");
   $("#nav").toggleClass("active");
});
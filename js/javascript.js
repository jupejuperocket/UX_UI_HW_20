console.log("your index.js file is loaded correctly!")

        // Function to open the lightbox
        function openLightbox(imageSrc, caption) {
          const lightbox = document.getElementById('lightbox');
          const lightboxImage = document.getElementById('lightbox-image');
          const lightboxCaption = document.getElementById('lightbox-caption');

          lightboxImage.src = imageSrc;
          lightboxCaption.textContent = caption;
          lightbox.style.display = 'block';
      }

      // Function to close the lightbox
      function closeLightbox() {
          const lightbox = document.getElementById('lightbox');
          lightbox.style.display = 'none';
      }

      $(document).ready(
        function() {
            window.FakeLoader.init( { auto_hide: true } );
        }
    );
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });
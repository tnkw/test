<link rel="stylesheet" href="swiper-bundle.css">
<script src="swiper-bundle.min.js"></script>
<style>
  .swiper-slide{
  background: #2f2f23;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  }
</style>
<body>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
      </div>
  </div>

  <script>
    var mySwiper = new Swiper ('.swiper-container', { 
      autoplay: {  delay: 0, },
      loop: true,
      speed: 10000,
     });
  </script>  
  
</body>
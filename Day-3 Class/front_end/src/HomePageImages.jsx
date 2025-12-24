import Carousel from 'react-bootstrap/Carousel';
import Images from './Images';
function HomePageImages() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Images text="https://framerusercontent.com/images/lKw31CfUck3w5fhvw1YNBWxyRwo.png?width=2398&height=1350" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Images text="https://media.collegedekho.com/media/img/institute/crawled_images/None/CHAITANYA_GEbWf6_1620782473.webp?width=1080" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Images text="https://www.chaitanya.edu.in/wp-content/uploads/2024/04/Blue-and-Yellow-Gradient-Modern-Desktop-Wallpaper.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageImages;
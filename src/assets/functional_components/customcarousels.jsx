import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Customcarousels() {
  return (
    <Carousel interval={1000}>
      <Carousel.Item>
        <img src="https://pixel7studio.in/wp-content/uploads/2024/08/P7-198.png" style={{ width: "70%", height: "400px", objectFit: "cover" }}
/>
        <Carousel.Caption>
          <h3>1</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://pixel7studio.in/wp-content/uploads/2024/08/Screenshot-Capture-2024-08-10-19-21-14-1024x542.png" style={{ width: "70%", height: "400px", objectFit: "cover" }}
/>
        <Carousel.Caption>
          <h3>2</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://pixel7studio.in/wp-content/uploads/2024/08/Screenshot-Capture-2024-08-10-18-46-48-1024x527.png" style={{ width: "70%", height: "400px", objectFit: "cover" }}
/>
        <Carousel.Caption>
          <h3>3</h3>
          <p>
         
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Customcarousels;
import Navbar from "../Components/Navbar";

export default function About() {
  return (
    <section>
      <Navbar navlist={true} shopingcart={false} />
      <h1>Vårt kaffe</h1>

      <div className="paragraphs">
        <p className="brodtxt">
          Lorem ipsum dolor sit amet, sed fermentum augue faucibus nec. Donec
          pellentesque lobortis fermentum. Cras feugiat sem nec mi fringilla,
          sit amet rhoncus purus varius. Vestibulum a convallis massa, vel
          dignissim odio. Donec dignissim iaculis turpis, non mattis diam
          egestas at. Duis sit amet convallis lectus, at sodales elit. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <p>
          Consectetur adipiscing elit. Pellentesque non justo mi. Aliquam et
          pretium nisl, a molestie dui. Mauris tempor orci in lorem auctor
          tincidunt. Fusce tempor dolor quis orci maximus auctor. Vestibulum
          luctus finibus ante vitae placerat. Pellentesque viverra at nisl
          pretium blandit. Phasellus ullamcorper tellus non quam lobortis
          blandit. Phasellus blandit tortor dolor, sit amet porttitor eros
          ultricies a. Suspendisse non auctor purus. Cras in lobortis lorem, id
          euismod justo. Nullam placerat nulla leo, quis vehicula dui fermentum
          quis.
        </p>
        <p>
          Nunc tempus arcu dolor, in maximus ex tempus ac. Integer lacinia vitae
          velit sagittis sodales. Vestibulum vestibulum id leo ut sollicitudin.
          Quisque sed felis non dolor auctor ornare. Vestibulum placerat ipsum
          eget arcu vulputate porta. Donec ultricies sodales iaculis. Sed
          elementum, metus sed fringilla condimentum, eros lectus tincidunt
          arcu, eget porttitor libero est non nibh. Donec suscipit pretium nibh,
          id luctus lectus convallis nec. Proin mollis sapien ac ligula dictum
          consectetur. Phasellus sit amet mi cursus, condimentum erat a, ornare
          magna. Sed cursus nec orci sit amet varius.
        </p>
      </div>

      <div className="owner">
        <img src="/graphics/eva-cortado.jpg" alt="Owner of Company" />
        <h3>Eva Cortado</h3>
        <p>VD & Grundare</p>
      </div>

      <footer>
        <div className="container">
          <img src="/graphics/graphics-footer.svg" alt="footer" />
        </div>
      </footer>
    </section>
  );
}

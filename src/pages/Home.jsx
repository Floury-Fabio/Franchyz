import React from 'react';
import HomeNavbar from 'components/layouts/HomeNavbar';
import Carousel from 'components/Carousel';
import StatisticsBandeau from 'components/StatisticsBandeau';
import FeatureBandeau from 'components/FeatureBandeau';
import PrimaryCTABandeau from 'components/PrimaryCTABandeau';
import Testimonials from 'components/Testimonials';
import Footer from 'components/layouts/Footer';

import image from 'assets/action-american-football-athletes-field-260697.jpg';
import cedric from 'assets/cedric.jpeg';
import aude from 'assets/aude.jpeg';
import nadia from 'assets/nadia.jpg';

const Home = () => {
  const title = 'Lorem ipsum dolor sit amet';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida ipsum ac augue pharetra, sed vehicula libero ornare. Cras et tristique dolor. Etiam scelerisque leo eu turpis accumsan placerat. Morbi aliquet felis vitae lectus dapibus iaculis. Quisque at placerat nisl. Morbi tincidunt elementum lacus vel interdum. Proin congue vulputate semper. Suspendisse potenti. Fusce ullamcorper ipsum quis ornare pulvinar. Nunc id sem tempor, posuere leo ut, maximus massa. Nullam interdum nunc at ex tempus ornare. Morbi ullamcorper, erat eget imperdiet vehicula, sapien felis scelerisque nulla, at congue mauris nibh a est. Pellentesque id fermentum urna, at feugiat dui. Nunc ut dolor sodales, sollicitudin ligula et, rutrum dolor. Quisque semper nisi enim. Sed semper pretium mauris tincidunt fermentum.';
  const testimonials = {
    cedric: {
      user_identity: 'Cédric',
      user_testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida ipsum ac augue pharetra, sed vehicula libero ornare. Cras et tristique dolor. Etiam scelerisque leo eu turpis accumsan placerat.',
      user_picture: cedric,
    },
    aude: {
      user_identity: 'Aude',
      user_testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida ipsum ac augue pharetra, sed vehicula libero ornare. Cras et tristique dolor. Etiam scelerisque leo eu turpis accumsan placerat.',
      user_picture: aude,
    },
    nadia: {
      user_identity: 'Nadia',
      user_testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida ipsum ac augue pharetra, sed vehicula libero ornare. Cras et tristique dolor. Etiam scelerisque leo eu turpis accumsan placerat.',
      user_picture: nadia,
    },
  };

  return (
    <>
      <HomeNavbar />
      <Carousel />
      <StatisticsBandeau />
      <PrimaryCTABandeau
        title={title}
        description={title}
        CTA="Meet my Team Now !"
        icon=""
      />
      <FeatureBandeau
        title={title}
        description={description}
        image={image}
        imageFirst
      />
      <FeatureBandeau
        title={title}
        description={description}
        image={image}
        imageFirst={false}
      />
      <PrimaryCTABandeau
        title={title}
        description={title}
        CTA="Meet my Team Now !"
        icon=""
      />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </>
  );
};

export default Home;

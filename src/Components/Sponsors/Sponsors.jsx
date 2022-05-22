import React from 'react';
import '../../Styles/Sponsors.css';
import SponsorImage from '../../require_images/sponsor-image.png';
import SponsorCard from './SponsorCard';

const Sponsors = () => {
  return (
    <>
      <section className="sponsors" id="partners">
        <h1
          className="heading stylish-title"
          style={{
            fontFamily: 'Metropolis',
          }}
        >
          Partners
        </h1>

        {/* sponsors card grid */}
        <div className="sponsors-cards-grid">
          <SponsorCard
            image={require('../../require_images/taskade-circle-icon.png')}
            name="Taskcade"
          />
          <SponsorCard
            image={require('../../require_images/gsdc.png')}
            name="GDSC"
          />
          <SponsorCard
            image={require('../../require_images/xyz logo final.png')}
            name=".XYZ"
          />
          <SponsorCard
            image={require('../../require_images/echo3d.png')}
            name="echo3D"
          />
          <SponsorCard
            image={require('../../require_images/aspire4her.png')}
            name="Aspire For Her"
          />
        </div>
      </section>
    </>
  );
};

export default Sponsors;

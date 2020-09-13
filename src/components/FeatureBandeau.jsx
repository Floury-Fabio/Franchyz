import React from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from 'components/Buttons/PrimaryButton';

const FeatureBandeau = ({
  title,
  description,
  image,
  imageFirst,
}) => {
  const setupSide = (rule) => {
    let layout;
    if (rule) {
      layout = (
        'd-flex flex-row align-items-center py-3 px-2 bg-dark'
      );
    } else {
      layout = (
        'd-flex flex-row-reverse align-items-center py-3 px-2 bg-dark'
      );
    }
    return layout;
  };
  const setupElements = () => {
    let content;
    if (
      title !== undefined
      && description !== undefined
      && image !== undefined
      && imageFirst !== undefined
    ) {
      content = (
        <>
          <div className={setupSide(imageFirst)}>
            <div className="col-lg-6 mr-auto">
              <img src={image} alt="jndxjsndj" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 mr-auto">
              <div className="mb-5">
                <h2 className="text-primary">
                  {title}
                </h2>
                <p className="text-white">
                  {description}
                </p>
              </div>
              <PrimaryButton text="Meet my Team now !" icon="" />
            </div>
          </div>
        </>
      );
    }
    return content;
  };

  return (
    <div>
      { setupElements() }
    </div>
  );
};

FeatureBandeau.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageFirst: PropTypes.bool.isRequired,
};

export default FeatureBandeau;

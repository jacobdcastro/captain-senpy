import PropTypes from 'prop-types';

export const pageTypes = {
  data: PropTypes.object.isRequired,
};

export const blogPostListingTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.shape({
      _type: PropTypes.string.isRequired,
      current: PropTypes.string.isRequired,
    }).isRequired,
    publishedAt: PropTypes.string.isRequired,
    _rawExcerpt: PropTypes.array,
    _rawMainImage: PropTypes.object,
  }).isRequired,
};

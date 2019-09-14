import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Story from '../components/Story';

const StoryPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <div>
      <Story />
    </div>
  );
};

StoryPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default StoryPage;

export const StoryPageQuery = graphql`
  query StoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

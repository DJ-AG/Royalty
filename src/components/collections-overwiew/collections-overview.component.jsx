import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollections } from '../../Redux/collection/collection.selecters' 

import { CollectionsOverviewContainer} from './collections-overview.style'

import CollectionPreview from "../preview-collection/collection-preview.component";

const CollectionOverview = ({collections}) => (
  <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionOverview)

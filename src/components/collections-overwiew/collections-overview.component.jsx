import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollections } from '../../Redux/collection/collection.selecters' 

import "./collections-overview.style.scss";

import CollectionPreview from "../preview-collection/collection-preview.component";

const CollectionOverview = ({collections}) => (
  <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionOverview)

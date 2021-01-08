import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionSelection } from "../../Redux/collection/collection.selecters";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

const ShopPage = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionSelection,
});

export default connect(mapStateToProps)(ShopPage);

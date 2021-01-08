import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from '../../Redux/directory/directory.selecters'

import "./directory.style.scss";

//Menu Items
import MenuItem from "../menu-item/menu-item.componen";

 const Directory = ({sections}) => (
      <div className="directory-menu">
        {sections.map(({ id, ...sectionProps }) => {
          return <MenuItem className='item' key={id} {...sectionProps} />;
        })}
      </div>
    )

    const mapStateToProps = createStructuredSelector({
      sections:selectDirectorySection
    })

export default connect(mapStateToProps)(Directory);

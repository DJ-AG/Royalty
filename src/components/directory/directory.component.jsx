import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from '../../Redux/directory/directory.selecters'

import { DirectoryMenuContainer } from './directory.style'

import MenuItem from "../menu-item/menu-item.componen";

 const Directory = ({sections}) => (
      <DirectoryMenuContainer>
        {sections.map(({ id, ...sectionProps }) => {
          return <MenuItem className='item' key={id} {...sectionProps} />;
        })}
      </DirectoryMenuContainer>
    )

    const mapStateToProps = createStructuredSelector({
      sections:selectDirectorySection
    })

export default connect(mapStateToProps)(Directory);
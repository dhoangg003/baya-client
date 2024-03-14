import React from "react";
import MenuRow from "../MenuRow/MenuRow.jsx";

const MenuListItem = ({ getMenuListItem, isMenuItemVisible, handleClick }) => {
  const MenuList = getMenuListItem.map((MenuList) => (
    <MenuRow
      key={MenuList._id}
      {...MenuList}
      isMenuItemVisible={isMenuItemVisible}
      handleClick={handleClick}
    />
  ));

  return <>{MenuList}</>;
};

export default MenuListItem;

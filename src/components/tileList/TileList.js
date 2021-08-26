import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({ tiles }) => {
  const empty = {
    title: "Title",
    contact: "Contact",
    date: "Date",
    time: "Time"
  }
  return (
    <div>
      {tiles ? tiles.map((tile, index) => (
        <Tile
          key={index}
          tile={tile}
        />)) : (<Tile
          key={"default"}
          appointment={empty}
        />) }
    </div>
  );
};

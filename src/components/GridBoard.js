import React from 'react';
import { useSelector } from 'react-redux';
import GridSquare from './GridSquare';
import { shapes } from '../utils/inde';

// Represents a 10 x 18 grid of grid squares
export default function GridBoard() {
  const { grid, shape, rotation, x, y } = useSelector((state) => state);

  const block = shapes[shape][rotation];
  const blockColor = shape;
  const gridSquares = grid.map((rowArray, row) =>
    rowArray.map((square, col) => {
      const blockX = col - x;
      const blockY = row - y;
      let color = square;

      if (
        blockX >= 0 && blockX < block.length &&
        blockY >= 0 && blockY < block.length
      ) {
        if (block[blockY][blockX]) {
          color = blockColor;
        }
      }

      const k = row * grid[0].length + col;
      return <GridSquare key={k} color={color} />;
    })
  );
  
  return <div className="grid-board">{gridSquares}</div>;
}

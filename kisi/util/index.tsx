export const calculateGridPosition = (index) => {
    const patterns = [
      [1, 2],
      [2, 2],
      [2, 2],
      [1, 1],
      [1, 1],
      [2, 2],
      [1, 2],
      [1, 2],
    ];
  
    const patternIndex = index % patterns.length;
    const [rowSpan, colSpan] = patterns[patternIndex];
  
    return {
      gridRow: index === 0 ? '2 / span 1': `span ${rowSpan}`,
      gridColumn: `span ${colSpan}`,
    };
};
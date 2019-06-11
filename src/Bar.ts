type Direction = "up" | "down" | "left" | "right";
const foo = ({ direction }: { direction: Direction }) => direction;

export default foo;

const SHAPES = [
    {
        shape: [
            // {x:4, y:19},
            {x:0, y:0},
        ],
        width: 2,
        height: 2,
        rotate: false,
        color: 'red'
    }
];

export function randomShape() {
    return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}

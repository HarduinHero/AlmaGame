$(document).ready(function(){
    const PIECE_COLOR = [
        '#fe51ba',
        '#d7ff51',
        '#4afeff',
        '#72ff49',
        '#fdb54e',
        '#cb4fce',
        '#5b5ef2',
        '#fdea4f',
        '#fe504b',
        '#d459eb',
        '#fa8852',
        '#ff4c88',
        '#a750ff',
        '#74d38e',
    ];
    const PIECE_OUTLINE_COLOR = '#505050';
    const BACKGROUND_COLOR = '#cdc9cd';
    const N = 30;

    const main_canvas = create_canvas('main_canvas', 720, 720);
    draw_grid(main_canvas, N)
    draw_polygon(main_canvas, N, 'poly1', 5, 5, [[0,0], [3,1], [1, 3]], get_piece_coloration())
    

    // main_canvas.addEventListener('mousemove', function(event) {
    //     const c = get_canvas_data(event.target)
    //     const position = `X: ${event.clientX - c.X}, Y: ${event.clientY - c.Y}`;
    //     console.log(position);
    // });













});

const SVGNS = "http://www.w3.org/2000/svg"

function create_canvas(id, w, h) {
    let new_svg = document.createElementNS(SVGNS,'svg');
    new_svg.id = id;
    new_svg.style.width = `${w}px`;
    new_svg.style.height = `${h}px`;
    let conteneur = document.getElementById("main_play_area");
    conteneur.appendChild(new_svg);
    return new_svg
}

function draw_line(canvas, id, x1, y1, x2, y2, attrs) {
    let new_line = document.createElementNS(SVGNS, 'line');
    new_line.id = id;
    new_line.setAttribute('x1', `${x1}px`);
    new_line.setAttribute('y1', `${y1}px`);
    new_line.setAttribute('x2', `${x2}px`);
    new_line.setAttribute('y2', `${y2}px`);
    for (const key in attrs) {
        const value = attrs[key];
        new_line.setAttribute(key, value);
    }
    canvas.appendChild(new_line);
}

function draw_polygon(canvas, n, id, x, y, grid_points, attrs) {
    const c = get_canvas_data(canvas, n)
    let new_polygon = document.createElementNS(SVGNS, 'polygon');
    new_polygon.id = id;
    let points = '';
    grid_points.forEach(p => {
        points += `${(p[0]+x)*c.grid.CELL_WIDTH},${(p[1]+y)*c.grid.CELL_HEIGHT} `
    });
    new_polygon.setAttribute('points', `${points}px`);
    for (const key in attrs) {
        const value = attrs[key];
        new_polygon.setAttribute(key, value);
    }
    canvas.appendChild(new_polygon);
}


function draw_grid(canvas, n) {
    const c = get_canvas_data(canvas, n)
    for(let i=0; i<n; i++) {
        draw_line(main_canvas, `vLine_${i}`, i*c.grid.CELL_WIDTH, 0, i*c.grid.CELL_WIDTH, c.HEIGHT, {'stroke' : 'lightgrey'});
        draw_line(main_canvas, `hLine_${i}`, 0, i*c.grid.CELL_HEIGHT, c.WIDTH, i*c.grid.CELL_HEIGHT, {'stroke' : 'lightgrey'});
    }
}

function get_canvas_data(canvas, n=null) {
    pos_data = canvas.getBoundingClientRect();
    console.log(n);
    if (n!==null) {
        grid = {'CELL_HEIGHT' : pos_data.height/n,
                'CELL_WIDTH'  : pos_data.width /n}
    } else {
        grid = null;
    }
    console.log(grid);
    return {
        'grid'   : grid,
        'HEIGHT' : pos_data.height,
        'WIDTH'  : pos_data.width,
        'X'      : pos_data.x,
        'Y'      : pos_data.y
    };
}

function get_piece_coloration() {
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
    return {
        fill : PIECE_COLOR[Math.round(Math.random()*(PIECE_COLOR.length))],
        stroke : PIECE_OUTLINE_COLOR
    };
}
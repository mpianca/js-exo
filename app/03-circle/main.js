class circle {
  constructor(radius) {
    this.radius = radius;
    this.cx = 1.5 * radius;
    this.cy = 1.5 * radius;

  }

  draw() {
    const div = document.querySelector('div');
    const r = this.radius;
    div.innerHTML = `
  <svg height="${3*r}" width="${3*r}">
  <circle cx="${this.cx}" cy="${this.cy}" r="${r}" stroke="#000" stroke-width="3" fill="transparent" />
</svg>`;
  }

  // ajout point sur le cercle
  setPoint(angle){
    const a = angle * 2 * Math.PI / 360; // convertion en radius
    const svgns = "http://www.w3.org/2000/svg"; //NS name space afin de pouvoir utiliser SVG dans le HTML
    const svg = document.querySelector('svg');
    const point = document.createElementNS(svgns, 'circle');
    point.setAttribute('cx', this.cx + this.radius * Math.cos(a));
    point.setAttribute('cy', this.cy - this.radius * Math.sin(a));
    point.setAttribute('r', 10);
    point.setAttribute('fill', '#000');
    point.setAttribute('stroke', '#000');
    point.setAttribute('stroke-width', '2');
    point.setAttribute('id', `point_${angle}`);
       
    svg.appendChild(point); // ajout du point sur le cercle

  }

  removePoint(angle){
      console.log('removePonit');
      const toBeRemoved = document.querySelector(`#point_${angle}`);
      if (toBeRemoved) {
        toBeRemoved.outerHTML = '';
      }
  }

  // création d'une ligne entre 2 points sur le cecle
  setLine(angle1, angle2) {
    const a1 = angle1 * 2 * Math.PI / 360; // convertion en radius
    const a2 = angle2 * 2 * Math.PI / 360;
    const svgns = "http://www.w3.org/2000/svg";
    const svg = document.querySelector('svg');
    const line = document.createElementNS(svgns, 'line');
    line.setAttribute('x1', this.cx + this.radius * Math.cos(a1));
    line.setAttribute('y1', this.cy - this.radius * Math.sin(a1));
    line.setAttribute('x2', this.cx + this.radius * Math.cos(a2));
    line.setAttribute('y2', this.cy - this.radius * Math.sin(a2));
    line.setAttribute('stroke', '#000');
    line.setAttribute('stroke-width', '2');
       
    svg.appendChild(line); // ajout du point sur le cercle
    
  }
}



function main() {
  const c = new circle(250);
  c.draw();
  c.setPoint(30);
  c.setPoint(60);
  c.setPoint(90);
  c.setLine(30, 90);
  setTimeout(function() {
    c.removePoint(60);
  }, 1000);
}

main();
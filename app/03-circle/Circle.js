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
  <svg height="${3 * r}" width="${3 * r}">
    <circle cx="${this.cx}" cy="${this.cy}" r="${r}" stroke="#000" stroke-width="3" fill="transparent" />
  </svg>`;
    }
  
    // ajout point sur le cercle
    setPoint(angle) {
      const a = angle * 2 * Math.PI / 360; // convertion en radius
      const svgns = "http://www.w3.org/2000/svg"; //NS name space afin de pouvoir utiliser SVG dans le HTML
      const svg = document.querySelector('svg');
      const point = document.createElementNS(svgns, 'circle');
      point.setAttribute('cx', this.cx + this.radius * Math.cos(a));
      point.setAttribute('cy', this.cy - this.radius * Math.sin(a));
      point.setAttribute('r', 10);
      point.setAttribute('fill', '#000');
      point.setAttribute('stroke', '#000');
      point.setAttribute('stroke-width', '1');
      point.setAttribute('id', `point_${angle}`); // on met un id a chaque point, afin de pouvoir le recuperer pour la suppression
  
      svg.appendChild(point); // ajout du point sur le cercle
  
    }
    // supprerssion d'un point du cercle 2 façons de faire
    removePoint(angle) {
  
      try {
        document.querySelector(`#point_${angle}`).outerHTML = '';
      } catch (e) { }
  
      // const toBeRemoved = document.querySelector(`#point_${angle}`);
      //if (toBeRemoved) {
      //  toBeRemoved.outerHTML = '';
      //}
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
          line.setAttribute('id', `line_${angle1}_${angle2}`); // on met un id a chaque point, afin de pouvoir le recuperer pour la suppression
  
          svg.appendChild(line); // ajout du point sur le cercle
  
    }
  
    removeLine(angle1, angle2) {
        try {
          document.querySelector(`#line_${angle1}_${angle2}`).outerHTML = '';
        } catch (e) { }
    }
  }
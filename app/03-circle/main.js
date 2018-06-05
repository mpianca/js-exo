class circle {
  constructor() {}

  draw() {
    const div = document.querySelector('div');
    div.innerHTML = `
  <svg height="600" width="600">
  <circle cx="300" cy="300" r="200" stroke="#000" stroke-width="3" fill="transparent" />
</svg>`;
  }
}



function main() {
  const c = new circle();
  c.draw();
}

main();
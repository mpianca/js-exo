class Multiply {
    constructor() {

    }
    draw() {
        const c = new circle(250);
        c.draw();

        for (let i = 0; i < 200; i++) {
            const a = (360 / 200) * i;
            c.setPoint(a);
        }
        for (let i = 0; i < 200; i++) {
            const a1 = (360 / 200) * i;
            const a2 = (360 / 200) * i *2;

            c.setLine(a1, a2);

    }
}
}
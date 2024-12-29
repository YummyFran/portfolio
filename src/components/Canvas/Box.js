export class Box {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.half_size = Math.floor((Math.random() * Math.floor(this.canvas.width * 0.04)) + Math.floor(this.canvas.width * 0.02))
        this.x = Math.floor((Math.random() * this.canvas.width) + 1)
        this.y = Math.floor((Math.random() * this.canvas.height) + 1)
        this.velocityX = (Math.random() * 4) - 2
        this.velocityY = (Math.random() * 4) - 2
        this.rotation = Math.random() * Math.PI
        this.shadow_length = 2000
        this.colors = ["#183D3D", "#5C8374"]
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
    }

    getDots() {
        const full = (Math.PI * 2) / 4
        const { x, y, rotation, half_size } = this

        const calculateDot = (offset) => ({
            x: x + half_size * Math.sin(rotation + full * offset),
            y: y + half_size * Math.cos(rotation + full * offset)
        });

        return {
            p1: calculateDot(0),
            p2: calculateDot(1),
            p3: calculateDot(2),
            p4: calculateDot(3)
        };
    }

    rotate() {
        const speed = (60 - this.half_size) / 20
        this.rotation += speed * 0.002
        this.x += this.velocityX
        this.y += this.velocityY
    }

    draw() {
        const dots = this.getDots()

        this.ctx.beginPath();
        this.ctx.moveTo(dots.p1.x, dots.p1.y)
        this.ctx.lineTo(dots.p2.x, dots.p2.y)
        this.ctx.lineTo(dots.p3.x, dots.p3.y)
        this.ctx.lineTo(dots.p4.x, dots.p4.y)
        this.ctx.fillStyle = this.color
        this.ctx.fill()

        if (this.y - this.half_size > this.canvas.height) {
            this.y -= this.canvas.height + this.half_size * 2
        }
        if(this.y + this.half_size < 0) {
            this.y += this.canvas.height + this.half_size * 2
        }
        if (this.x - this.half_size > this.canvas.width) {
            this.x -= this.canvas.width + this.half_size * 2
        }
        if(this.x + this.half_size < 0) {
            this.x += this.canvas.width + this.half_size * 2
        }
    }

    drawShadow(light) {
        const dots = this.getDots()
        const points = Object.values(dots).map(dot => {
            const angle = Math.atan2(light.y - dot.y, light.x - dot.x)
            const endX = dot.x + this.shadow_length * Math.sin(-angle - Math.PI / 2)
            const endY = dot.y + this.shadow_length * Math.cos(-angle - Math.PI / 2)
            return {
                endX,
                endY,
                startX: dot.x,
                startY: dot.y
            }
        })

        this.ctx.fillStyle = "#040D12BB";
        for (let i = points.length - 1; i >= 0; i--) {
            const n = i === 3 ? 0 : i + 1
            this.ctx.beginPath();
            this.ctx.moveTo(points[i].startX, points[i].startY)
            this.ctx.lineTo(points[n].startX, points[n].startY)
            this.ctx.lineTo(points[n].endX, points[n].endY)
            this.ctx.lineTo(points[i].endX, points[i].endY)
            this.ctx.fill();
        }
    }
}
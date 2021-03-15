import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'
import { BaseMover } from '../commons/baseMover'

function createDrawer(): SketchProps {
  let p: P5

  const G = 9.8,
    S = 0.95

  class Ball extends BaseMover {
    size = 10
    location = p.createVector(20, 20)
    velocity = p.createVector()
    acc: Vector = p.createVector()

    constructor(public mass: number) {
      super()
      this.size = this.mass
    }

    applyForce(force: Vector) {
      this.acc.add(force.copy().div(this.mass))
    }
    update() {
      this.velocity.add(this.acc)
      this.location.add(this.velocity)
      this.acc.mult(0)
      this.checkEdge()
    }
    display() {
      p.ellipse(this.location.x, this.location.y, this.size, this.size)
    }
    checkEdge() {
      if (
        this.location.x < this.size / 2 ||
        this.location.x > p.width - this.size / 2
      ) {
        this.velocity.x *= -1 * S
      }
      if (this.location.y < this.size / 2) {
        this.velocity.y *= -1 * S
      } else if (this.location.y > p.height - this.size / 2) {
        this.velocity.y *= -1 * S
        this.location.y = p.height - this.size / 2
      }
    }
  }

  let mover: Ball[]
  let t = 0

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)

      mover = [new Ball(10), new Ball(20), new Ball(30), new Ball(40)]
    },
    draw: () => {
      t += 0.01
      p.fill('#333')
      p.background(255)

      const wind = p.createVector(p.map(p.noise(t), 0, 1, 0, 0.1), 0)

      mover.forEach(m => {
        m.applyForce(p.createVector(0, (G * m.mass) / 100))
        m.applyForce(wind)
        m.update()
        m.display()
      })
    }
  }
}

export default P5Render(createDrawer)

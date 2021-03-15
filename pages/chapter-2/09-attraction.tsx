import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'
import { BaseMover } from '../commons/baseMover'

function createDrawer(): SketchProps {
  let p: P5

  const G = 0.01

  class Attract {
    mass = 10
    location = p.createVector(p.width / 2, p.height / 2)

    compute(m: Mover) {
      const f = this.location.copy().sub(m.location)
      const dis = f.mag()
      f.normalize()

      return f.mult(((G * this.mass * m.mass) / dis) * dis)
    }

    display() {
      p.push()
      p.fill('#ff0f0f')
      p.noStroke()
      p.ellipse(this.location.x, this.location.y, 20, 20)
      p.pop()
    }
  }

  class Mover extends BaseMover {
    size = 10
    velocity = p.createVector(0, 4)
    acc: Vector = p.createVector()

    constructor(public mass: number, public location: Vector) {
      super()
      this.size = this.mass * 10
    }

    display() {
      p.ellipse(this.location.x, this.location.y, this.size, this.size)
    }
    update() {
      this.velocity.add(this.acc)
      this.location.add(this.velocity)
      this.acc.mult(0)
    }
    applyForce(force: Vector) {
      this.acc.add(force.copy().div(this.mass))
    }
  }

  let attract: Attract, mover: Mover[]

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 600).parent(canvas)

      attract = new Attract()
      mover = [
        new Mover(1, p.createVector(p.width / 2 - 100, p.height / 3)),
        new Mover(2, p.createVector(p.width / 2 + 100, p.height / 2 + 100))
      ]
    },
    draw: () => {
      p.background('#fff')
      attract.display()

      mover.forEach(m => {
        m.applyForce(attract.compute(m))
        m.update()
        m.display()
      })
    }
  }
}

export default P5Render(createDrawer)

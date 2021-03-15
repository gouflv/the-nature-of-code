import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'
import { BaseMover } from '../commons/baseMover'

function createDrawer(): SketchProps {
  let p: P5

  const G = 0.01

  class Mover extends BaseMover {
    size = 10
    velocity = p.createVector()
    acc = p.createVector()

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

    compute(m: Mover) {
      const f = this.location.copy().sub(m.location)
      const dis = f.mag()
      f.normalize()

      return f.mult(((G * this.mass * m.mass) / dis) * dis)
    }
  }

  let mover: Mover[]

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(1000, 800).parent(canvas)

      mover = [
        new Mover(3, p.createVector(p.width / 2 - 100, p.height / 3)),
        new Mover(3, p.createVector(p.width / 2 + 100, p.height / 2)),
        new Mover(2, p.createVector(p.width / 2 - 100, p.height / 1.5))
      ]
    },
    draw: () => {
      p.background('#fff')

      mover.forEach((m, i) => {
        mover.forEach((m2, j) => {
          if (i !== j) {
            m.applyForce(m2.compute(m))
          }
        })
        m.update()
        m.display()
      })
    }
  }
}

export default P5Render(createDrawer)

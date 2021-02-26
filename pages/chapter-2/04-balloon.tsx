import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5

  const G = 9.8,
    U = -9.9,
    Mass = 100

  class Balloon {
    location = p.createVector(p.width / 2, p.height - 10)
    velocity = p.createVector()
    acc: Vector = p.createVector()
    applyForce(force: Vector) {
      this.acc.add(force.copy().div(Mass))
    }
    update() {
      this.velocity.add(this.acc)
      this.location.add(this.velocity)
      this.acc.mult(0)

      if (this.location.y < 10) {
        p.noLoop()
      }

      if (this.location.x < 0) {
        this.location.x = 0
      }
      if (this.location.x > p.width - 10) {
        this.location.x = p.width - 10
      }
    }
    display() {
      p.ellipse(this.location.x, this.location.y, 20, 20)
    }
  }

  let mover: Balloon
  let t = 0

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)

      mover = new Balloon()
    },
    draw: () => {
      p.background(255)
      mover.applyForce(p.createVector(0, G))
      mover.applyForce(p.createVector(0, U))
      mover.applyForce(p.createVector(p.map(p.noise(t), 0, 1, -1, 1), 0))
      mover.update()
      mover.display()
      t += 0.01
    }
  }
}

export default P5Render(createDrawer)

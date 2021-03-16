import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'
import { BaseMover } from '../commons/baseMover'

function createDrawer(): SketchProps {
  let p: P5

  class AngleMover extends BaseMover {
    constructor(location: Vector) {
      super()
      this.location = location
      this.angleAcc = 0.001
    }
    update() {
      this.angleVelocity = p.constrain(
        this.angleVelocity + this.angleAcc,
        0,
        0.2
      )
      this.angle += this.angleVelocity
    }
    display() {
      p.push()
      //
      p.fill(175)
      p.stroke(0)
      p.rectMode(p.CENTER)
      p.translate(this.location.x, this.location.y)
      p.rotate(this.angle)
      p.line(-50, 0, 50, 0)
      p.ellipse(50, 0, 8, 8)
      p.ellipse(-50, 0, 8, 8)
      //
      p.pop()
    }
  }

  let mover: AngleMover

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)

      mover = new AngleMover(p.createVector(p.width / 2, p.height / 2))
    },
    draw: () => {
      p.background(255)
      mover.update()
      mover.display()
    }
  }
}

export default P5Render(createDrawer)

import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'
import { BaseMover } from '../commons/baseMover'

function createDrawer(): SketchProps {
  let p: P5

  class AngleMover extends BaseMover {
    constructor(location: Vector) {
      super()
      this.location = location
    }
    update() {
      this.velocity = p.createVector(
        p.mouseX - this.location.x,
        p.mouseY - this.location.y
      )
      this.angle = this.velocity.heading()
    }
    display() {
      p.push()
      //
      p.stroke(100)
      p.strokeWeight(10)

      p.translate(this.location.x, this.location.y)
      p.rectMode(p.CENTER)
      p.rotate(this.angle)

      p.line(0, 0, 50, 0)
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

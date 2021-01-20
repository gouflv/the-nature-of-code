import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5

  class Mover {
    location
    velocity
    constructor() {
      this.location = p.createVector(p.random(p.width), p.random(p.height))
      this.velocity = p.createVector(p.random(-5, 5), p.random(-5, 5))
    }
    update() {
      this.location.add(this.velocity)
      if (this.location.x >= p.width || this.location.x <= 0) {
        this.velocity.x = this.velocity.x * -1
      }
      if (this.location.y >= p.height || this.location.y <= 0) {
        this.velocity.y = this.velocity.y * -1
      }
    }
    display() {
      this.update()
      p.fill(255)
      p.ellipse(this.location.x, this.location.y, 20, 20)
    }
  }

  let mover

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)

      mover = new Mover()
    },
    draw: () => {
      p.background(0)
      if (mover) {
        mover.display()
      }
    }
  }
}

export default P5Render(createDrawer)

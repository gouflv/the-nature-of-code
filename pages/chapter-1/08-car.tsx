import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5

  class Mover {
    location: Vector
    velocity: Vector
    acc: Vector
    speed: 1 | -1

    constructor() {
      this.location = p.createVector(p.width / 2, p.height / 2)
      this.velocity = p.createVector(0, 0)
      this.acc = p.createVector(0, 0)
    }
    update() {
      if (this.speed === 1) {
        this.acc.x = 0.1
        this.velocity.add(this.acc)
        this.velocity.limit(10)
      } else if (this.speed === -1) {
        this.acc.x = -0.1
        if (this.velocity.x > 0) {
          this.velocity.add(this.acc)
        } else {
          this.velocity.x = 0
        }
      }

      this.location.add(this.velocity)

      if (this.location.x >= p.width) {
        this.location.x = 0
      }
    }
    display() {
      this.update()
      p.fill(255)
      p.rect(this.location.x, this.location.y, 40, 20)
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
    },
    keyPressed: e => {
      if (e.key === 'w') mover.speed = 1
    },
    keyReleased: e => {
      if (e.key === 's') mover.speed = -1
    }
  }
}

export default P5Render(
  createDrawer,
  <div className='tip'>w: 加速 s: 刹车</div>
)

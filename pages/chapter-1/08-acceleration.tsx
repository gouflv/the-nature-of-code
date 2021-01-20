import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5

  class Mover {
    location
    velocity
    acc
    constructor() {
      this.location = p.createVector(p.random(p.width), p.random(p.height))
      this.velocity = p.createVector(0, 0)
      this.randomAcc()
    }
    randomAcc() {
      this.acc = p.createVector(p.random(-0.1, 0.1), p.random(-0.1, 0.1))
    }
    update() {
      this.velocity.add(this.acc)
      this.velocity.limit(10)
      this.location.add(this.velocity)

      if (this.location.x >= p.width || this.location.x <= 0) {
        this.velocity.x = this.velocity.x * -1
        this.randomAcc()
      }
      if (this.location.y >= p.height || this.location.y <= 0) {
        this.velocity.y = this.velocity.y * -1
        this.randomAcc()
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

export default P5Render(
  createDrawer,
  <div className='tip'>碰撞边缘后随机加速方向</div>
)

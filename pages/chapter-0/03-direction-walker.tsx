import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5
  let walker: Walker

  class Walker {
    constructor(private x: number, private y: number) {}
    step() {
      const dirX = p.mouseX > this.x ? 1 : -1
      const dirY = p.mouseY > this.y ? 1 : -1
      const r = p.random(1)
      if (r > 0.8) {
        this.x += dirX
      } else {
        this.x += Math.floor(p.random([-1, 0, 1]))
      }
      if (r > 0.8) {
        this.y += dirY
      } else {
        this.y += Math.floor(p.random([-1, 0, 1]))
      }
    }
    display() {
      p.stroke(0)
      p.point(this.x, this.y)
    }
  }

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)
      walker = new Walker(p.width / 2, p.height / 2)
    },
    draw: () => {
      if (walker) {
        walker.step()
        walker.display()
      }
    }
  }
}

export default P5Render(
  createDrawer,
  <div className='tip'>有概率的向鼠标方向游走</div>
)

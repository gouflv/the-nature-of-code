import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5
  let walker: Walker

  class Walker {
    constructor(private x: number, private y: number) {}
    step() {
      const x = p.random([-1, 0, 1])
      const y = p.random([-1, 0, 1])
      this.x += x
      this.y += y
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
  <div className='tip'>相同趋势的四向游走</div>
)

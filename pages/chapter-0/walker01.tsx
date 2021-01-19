import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5
  let walker: Walker

  class Walker {
    constructor(private x: number, private y: number) {}
    step() {
      const r = p.random([0, 1, 2, 3])
      switch (r) {
        case 0:
          this.x++
          break
        case 1:
          this.x--
          break
        case 2:
          this.y++
          break
        case 3:
          this.y--
          break
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

export default P5Render(createDrawer)

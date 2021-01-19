import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5

  class Shape {
    constructor(private x: number, private y: number, private size: number) {}
    display() {
      p.stroke(0, 100)
      p.fill(255, 50, 50, 200)
      p.ellipse(this.x, this.y, this.size)
    }
  }

  const list = Array.from<Shape>({ length: 100 })

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)

      list.forEach((it, i) => {
        const x = Math.floor(p.randomGaussian(p.width / 2, 100))
        const y = Math.floor(p.randomGaussian(p.height / 2, 100))

        const distanceToCenter = Math.sqrt(
          Math.pow(x - p.width, 2) + Math.pow(y - p.height, 2)
        )

        const s = Math.floor(
          p.randomGaussian(distanceToCenter / 10, distanceToCenter / 20)
        )
        const shape = new Shape(x, y, s)
        shape.display()
      })
    },
    draw: () => {}
  }
}

export default P5Render(createDrawer)

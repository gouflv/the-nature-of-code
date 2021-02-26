import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5

  let location: Vector, velocity: Vector

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)
    },
    draw: () => {
      p.background(255)

      const mouse = p.createVector(p.mouseX, p.mouseY)
      const center = p.createVector(p.width / 2, p.height / 2)

      p.stroke(200)
      p.line(0, 0, center.x, center.y)
      p.line(0, 0, mouse.x, mouse.y)

      const sub = mouse.copy()
      sub.sub(center)

      p.translate(p.width / 2, p.height / 2)

      p.stroke(255, 50, 50)
      p.line(0, 0, sub.x, sub.y)
    }
  }
}

export default P5Render(createDrawer)

import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'
import { BaseMover } from '../commons/baseMover'

function createDrawer(): SketchProps {
  let p: P5

  let angle = 0,
    aVelocity = 0,
    aAcc = 0.001

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)
    },
    draw: () => {
      p.background(255)

      p.fill(175)
      p.stroke(0)
      p.rectMode(p.CENTER)
      p.translate(p.width / 2, p.height / 2)
      p.rotate(angle)
      p.line(-50, 0, 50, 0)
      p.ellipse(50, 0, 8, 8)
      p.ellipse(-50, 0, 8, 8)

      aVelocity = aVelocity + aAcc
      if (aVelocity > 0.1) aVelocity = 0.1
      angle += aVelocity
    }
  }
}

export default P5Render(createDrawer)

import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5

  let x = 0

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)
    },
    draw: () => {
      if (x > p.width) {
        return
      }
      const y = p.map(p.noise(x / 100), 0, 1, 0, p.height / 2)
      p.point(x, p.height / 2 + y)
      x++
    }
  }
}

export default P5Render(createDrawer)

import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5

  let location, velocity

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)

      location = p.createVector(1, 2)
      velocity = p.createVector(2, 5)
    },
    draw: () => {
      p.background(0)

      location.add(velocity)

      if (location.x > p.width || location.x < 0) {
        velocity.x = velocity.x * -1
      }
      if (location.y > p.height || location.y < 0) {
        velocity.y = velocity.y * -1
      }

      p.fill(255)
      p.ellipse(location.x, location.y, 20, 20)
    }
  }
}

export default P5Render(createDrawer)

import dynamic from 'next/dynamic'
import { SketchProps } from 'react-p5'

const Sketch = dynamic(() => import('react-p5'), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

export const P5Render = (render: () => SketchProps) => {
  return () => (
    <div className='drawing-board'>
      <Sketch {...render()} />
    </div>
  )
}

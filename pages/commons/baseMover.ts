export abstract class BaseMover {
  location: Vector
  velocity: Vector
  acc: Vector

  angle = 0
  aVelocity = 0
  aAcc = 0

  applyForce(force: Vector) {}
  update() {}
  display() {}
}

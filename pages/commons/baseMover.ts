export abstract class BaseMover {
  location: Vector
  velocity: Vector
  acc: Vector

  applyForce(force: Vector) {}
  update() {}
  display() {}
}

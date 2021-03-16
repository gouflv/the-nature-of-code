export abstract class BaseMover {
  // 质量
  static mass = 1

  // 位置
  location: Vector
  // 速度
  velocity: Vector
  // 加速度
  acc: Vector

  // 角度
  angle = 0
  // 角加速度
  angleAcc = 0
  // 角速度
  angleVelocity = 0

  abstract update(): void
  abstract display(): void

  applyForce(force: Vector) {}
}

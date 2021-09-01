import { Widget } from ".";
import { double } from "@coli.codes/dart-builder";

/**
 * https://api.flutter.dev/flutter/widgets/Transform-class.html
 */
export class Transform extends Widget {
  constructor() {
    super();
  }

  static rotate(args: { angle: double; child?: Widget }): Transform {
    return new Transform().extendWithFactory("rotate").overrideArguments(args);
  }
}
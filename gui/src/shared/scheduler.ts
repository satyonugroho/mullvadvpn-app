export class Scheduler {
  private timer?: NodeJS.Timeout;

  public schedule(action: () => void, delay?: number) {
    this.cancel();
    this.timer = global.setTimeout(action, delay ?? 0);
  }

  public cancel() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}

var Notify = {
  Info(msg: string) {
    window.dispatchEvent(
      new CustomEvent("alertinfo", { detail: { message: msg } }),
    );
  },
  Warn(msg: string) {
    window.dispatchEvent(
      new CustomEvent("alertwarn", { detail: { message: msg } }),
    );
  },
};

export { Notify };

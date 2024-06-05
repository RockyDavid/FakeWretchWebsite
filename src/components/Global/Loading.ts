const callbackDelay = 500;
const delayDispatch = 300;
const Loading = {
  ShowAsync(callback?: () => void) {
    window.dispatchEvent(
      new CustomEvent("GlobalLoading", { detail: { Loading: true } }),
    );
    if (callback) {
      setTimeout(callback, callbackDelay);
    }
  },
  HideAsync(callback?: () => void) {
    window.dispatchEvent(
      new CustomEvent("GlobalLoading", { detail: { Loading: false } }),
    );
    if (callback) {
      setTimeout(callback, callbackDelay);
    }
  },
  ShowDelayAsync(callback?: () => void) {
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("GlobalLoading", { detail: { Loading: true } }),
      );
    }, delayDispatch);
    if (callback) {
      setTimeout(callback, callbackDelay);
    }
  },
  HideDelayAsync(callback?: () => void) {
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("GlobalLoading", { detail: { Loading: false } }),
      );
    }, delayDispatch);
    if (callback) {
      setTimeout(callback, callbackDelay);
    }
  },
};
export { Loading };

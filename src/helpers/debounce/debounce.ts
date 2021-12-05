const DEFAULT_DEBOUNCE_TIMEOUT = 300;

export const debounce = (callback: Function, timeout = DEFAULT_DEBOUNCE_TIMEOUT) => {
  let canExecute = true;

  return (...args: unknown[]) => {
    if (!canExecute) {
      return;
    }

    callback.apply(null, args);
    canExecute = false;
    setTimeout(() => {
      canExecute = true;
    }, timeout);
  };
};

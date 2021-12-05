import {debounce} from './debounce';

describe('Debounce', () => {
  beforeEach(() => jest.useFakeTimers());

  it('should call only 1 function out of 2 as call interval is less than required', () => {
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
    const debouncedFn = debounce(jest.fn());
    debouncedFn();
    debouncedFn();

    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
  });

  it('should call all functions in correct period of time', () => {
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
    const debouncedFn = debounce(jest.fn(), 2000);
    debouncedFn();
    jest.advanceTimersByTime(1000);
    debouncedFn();
    jest.advanceTimersByTime(1000);
    debouncedFn();

    expect(setTimeoutSpy).toHaveBeenCalledTimes(2);
  });
});

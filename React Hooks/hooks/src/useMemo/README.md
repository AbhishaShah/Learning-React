# **useMemo()**
- **Usage:** It will cache the value of previous render of callback function, so function only invokes when one of the dependencies has changed.
- Useful for performance optimization.
- `useMemo(callback function,[dependencies])`
- useCallback hook cache the callback function while useMemo cache the result of invoked function.
# **useCallback()**
- **Usage:** It will return memoized version of callback function that only changes if one of the dependencies has changed.
- It is useful to optimized perfomance of child componenets by preventing unnecessary renders.
- `useCallback(callback function,[dependencies])`
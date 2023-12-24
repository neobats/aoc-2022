type CurryFunction<T, R extends any> = (...args: R[]) => T;

export function curryN<T, R extends any>(fn: (...args: R[]) => T, n?: number): CurryFunction<T, R> {
  const arity = n || fn.length;
  n = n || fn.length;

  const curry = (prevArgs: any[]) => (...args: any[]): T => {
    const combinedArgs = [...prevArgs, ...args];

    if (combinedArgs.length < arity) {
      return curry(combinedArgs) as T;
    } else {
      return fn.apply(this, combinedArgs);
    }
  };

  return curry([]);
}


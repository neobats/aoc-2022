export const chunkBy = <T extends unknown = unknown>(by: number) => 
(arr: T[]) => arr.reduce((all,one,i) => {
   const ch = Math.floor(i/by); 
   all[ch] = ([] as T[]).concat((all[ch]||[]),one); 
   return all
}, [] as T[][])
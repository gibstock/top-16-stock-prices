export const flattenSymbolArray = (data: any | unknown): string[] => {
  let flattenedArray: string[] = []
  data?.data?.map((sym:any) => {
    flattenedArray.push(sym.symbol)
  })
  return flattenedArray
}
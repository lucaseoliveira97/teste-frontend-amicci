export const parserGridArea = (gridsArray:string[]):string =>
{
    return gridsArray.reduce((acc, current)=> 
        {
            return (acc = acc + `${"'" + current + "'"}`)
        }, "")
}

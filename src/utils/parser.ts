export const parserGridArea = (gridsArray:string[]):string =>
{
    return gridsArray.reduce((acc, current)=> 
        {
            console.log("acc",acc, current)
            return (acc = acc + `${"'" + current + "'"}`)
        }, "")
}

interface ResultProps {
  value: number
}
 
const Result = (props: ResultProps) => {
  const { value } = props
  return ( <div className="bg-[#222424] text-white w-[185px] text-right text-xl">{value}</div> );
}
 
export default Result;
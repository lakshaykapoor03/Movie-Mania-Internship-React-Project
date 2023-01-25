const Shimmer=()=>{
    return(
        <div className="container ml-[40%] sm:flex-wrap sm:mx-[5%] sm:my-[10%] flex flex-wrap gap-[20px] justify-around">
 {Array(10)
        .fill("")
        .map((e,idx) => (
          <div key={idx} className="w-[200px] h-[300px] bg-[#6d6d6d] rounded-[15px]"></div>
        ))}
        </div>
    )
}

export default Shimmer;
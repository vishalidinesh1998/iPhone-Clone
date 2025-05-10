function Hero(){
    return(

     <header className="herosection flex flex-col gap-3 items-center mx-auto text-white text-center mb-4 py-8">
        <h2 className="text-5xl font-bold">iPhone 16 Pro</h2>
        <p className="text-2xl">Built for Apple Intelligence</p>
        <div>
       <button className="bg-blue-600 text-white m-2 px-6 py-2 rounded-full font-medium transition border border-blue-600 hover:bg-white hover:text-black ">Learn more</button> 
        <button className="px-6 py-2 rounded-full font-medium transition border border-blue-600 text-blue-600 hover:bg-white hover:text-black ">Buy</button>
    </div>
       </header>)
}
export default Hero

const Loader = () => {
  const dots = [1, 2, 3];

  return (
    <div className="grid place-items-center w-full h-full bg-white z-50 fixed top-0 left-0">
      <div className="animate-bounce">
        <h1 className="text-3xl">Loading
          {dots.map((dot) => (
            <div key={dot} className="w-1 h-1 bg-black inline-block ml-1 rounded-full"></div>
          ))}
        </h1>
      </div>
    </div>
  )
}

export default Loader
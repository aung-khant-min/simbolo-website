
function Feedback({ image = "", name = "", feedback = "" }) {

    return (
        <div className="w-full ml-auto ">
            <img src={image} alt="avatar" className="w-28 h-28 md:w-36 md:h-36 shadow-xl" />
            <div className="rounded-2xl bg-gray ml-5 -mt-16 p-5 pt-24 md:ml-12 md:-mt-12 md:p-20" >
                <h3 className="font-black text-black text-xl md:text-2xl mb-3 tracking-wide">
                    {name}
                </h3>
                <p style={{ lineHeight: "150%" }} className="break-all font-medium text-black text-lg md:text-xl tracking-wide">
                    {feedback}
                </p>
            </div>
        </div>
    )
}

export default Feedback

function Feedback({ image = "", name = "", feedback = "" }) {

    return (
        <div className="w-full ml-auto ">
            <img src={image} alt="avatar" className="rounded-2xl w-24 h-24 md:w-36 md:h-36" />
            <div className="rounded-2xl bg-gray ml-10 -mt-16 p-10 pl-16 md:pl-32" >
                <h3 className="font-black text-black text-xl md:text-2xl mb-3 tracking-wide">
                    {name}
                </h3>
                <p className="break-all font-medium text-black text-lg md:text-xl tracking-wide">
                    {feedback}
                </p>
            </div>
        </div>
    )
}

export default Feedback
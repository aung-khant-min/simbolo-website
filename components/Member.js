
function Member({ image = "", name = "", role = "" }) {

    return (
        <div className="text-center m-5">
            <img src={image} alt={name} className="block m-auto w-28 h-28 md:w-36 md:h-36 shadow-xl" />
            <h3 className="font-medium text-black text-lg md:text-xl tracking-wide mt-5 mb-1">{name}</h3>
            <h4 className="font-medium text-black text-base md:text-lg tracking-wide">{role}</h4>
        </div>
    )
}

export default Member

function Member({ image = "", name = "", role = "" }) {

    return (
        <div className="text-center">
            <img src={image} alt={name} className="block m-auto w-2/3 rounded-full" />
            <h3 className="font-medium text-black text-lg md:text-xl tracking-wide mt-5 mb-1">{name}</h3>
            <h4 className="font-medium text-black text-base md:text-lg tracking-wide">{role}</h4>
        </div>
    )
}

export default Member
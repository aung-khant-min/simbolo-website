
function CourseOutline({ name = "", items = [], open = false }) {

    return (
        <details open={open} className="m-auto bg-gray w-full md:w-2/3  outline-none border-black border">
            <summary className="p-7 py-7 font-black text-black text-lg md:text-xl  tracking-wide outline-none cursor-pointer">
                {name}
            </summary>
            <ul className="p-10 py-5 list-disc">
                {
                    items.map(item =>
                        <li key={item} className="mb-5 font-medium text-black text-lg md:text-xl  tracking-wide">{item}</li>
                    )
                }
            </ul>
        </details>
    )
}

export default CourseOutline
export const Button = (
    { text, handler, className}:
    { text: string, className: string, handler: Function }) => {

    return (
        <button 
            id={`btn-${text}`}
            className={"bg-cyan-600 m-1 p-2 rounded-full "+
                "text-2xl font-semibold text-slate-200 "+
                "active:bg-cyan-200 active:text-black "+className}
            onClick={(e)=>{handler(e,text)}}>

            {text}
        </button>
    )
}
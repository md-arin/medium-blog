import Avatar from "./Avatar";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export function BlogCard({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps){
    return <div className="border-b border-slate-200 pb-4 mx-5 my-3">
        <div className=" flex">
            <div className=" flex justify-center flex-col">
                <Avatar name={authorName} /> 
            </div>
            <div className=" font-normal pl-2">
                {authorName}
            </div>  

            <div className="flex justify-center flex-col pl-2">
                <Circle />
            </div>
            <div className=" font-thin pl-2 text-slate-500">
                {publishedDate}
            </div>
        </div>

        <div className=" text-xl font-semibold my-2">
            {title}
        </div>

        <div className=" text-md font-thin">
            {content.slice(0, 200)+ "..."}
        </div>

        <div className=" text-slate-500 text-sm font-thin my-2">
            {`${Math.ceil(content.length / 100)} mins read`}
        </div>

    </div>

}

const Circle = ()=> {
    return(
        <div className=" h-1 w-1 bg-slate-500 rounded-full">
            
        </div>
    )
}


import Image from "next/image"
import I2 from "@/public/images/posts/02.webp"
import { Calendar, Clock } from "lucide-react"

const PostCard = () => {
    return (
        <div className="w-full cursor-pointer rounded-t-xl my-3
         hover:grayscale-0
        ">
            <div className="top ">
                <Image src={I2} alt="post image"
                    width={0}
                    height={0}
                    className="w-full h-[300px]
                    rounded-t-xl
                    object-cover grayscale
                    hover:grayscale-0
                    "
                />
            </div>
            <div className="middle my-5">
                <div className="date flex gap-x-3 font-medium text-pc">
                    <Calendar />
                    <p>Nov 16, 2021</p>
                    <p>-</p>
                    <Clock />
                    <p>01 min read</p>
                </div>
                <div className="heading my-5 text-3xl font-medium
                 text-pc
                 hover:text-sc transition duration-300
                 ">
                    <h1>The AGI hype train is running out of steam</h1>
                </div>
                <div className="content my-5   text-pc
                leading-7 font-medium
                ">
                    <p>While futurists and fundraisers used to make bullish predictions about artificial general intelligence, they’ve become quieter lately. Peter Thiel...</p>
                </div>
            </div>
            <div className="footer flex items-center gap-3 text-pc *:
            font-medium
            ">
                <div className="rounded-xl">
                    <Image src={I2} alt="logo"
                        width={0} height={0} className="w-8 h-8 
                    object-cover rounded-xl" />
                </div>
                <p>by <span className="hover:text-sc 
                transition-all
                ">
                    Thomas
                </span>  </p>
                <p> • </p>
                <div className="tag bg-sc/50 p-2 text-xs text-pc 
                hover:bg-sc duration-200 transition hover:text-white 
                ">
                    <p>Machine</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard
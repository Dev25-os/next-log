import { PlusSquare } from "lucide-react";
import { Button } from "../ui/button";
import PostCard from "./PostCard";

const Posts = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-14">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div className="loadMore w-full flex justify-center items-center mt-10">
                <Button className="bg-sc  gap-x-2  hover:bg-pc duration-200">
                    <PlusSquare /> View all posts
                </Button>
            </div>
        </>
    );
};

export default Posts;

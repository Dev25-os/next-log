import Posts from "@/components/home/Posts";

export default function Home() {
  return (
    <main>
      <div className="banner flex items-center justify-center h-screen w-full">
        <h1 className="text-5xl text-center font-semibold text-pc leading-[4rem] max-w-4xl">Taking control of your daily life is easy when you know how!</h1>
      </div>
      <div className="recentPosts h-screen w-full ">
        <h className="text-3xl font-medium  flex text-center w-full justify-center text-pc">Recent Post</h>
        <div className="posts my-10">
          <Posts />
        </div>
      </div>
    </main>
  );
}

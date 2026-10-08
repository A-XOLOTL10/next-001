import Hello from "@/components/Hello";

const Home = () => {
    console.log("Hello world, i am divine next.js server  rendering");
    return (

        <main>
            <Hello />
            <div className="text-5xl my-10 text-amber-500">
                Welcome to Next.js!
            </div>
        </main>
    )
}

export default Home

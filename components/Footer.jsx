import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserPlus } from "lucide-react"
const Footer = () => {
    return (
        <div className="my-20 h-full max-w-xl mx-auto text-center flex items-center flex-col">
            <h1 className="text-3xl font-medium text-pc " >Get latest posts delivered right to your inbox</h1>
            <div className="flex w-full max-w-sm items-center space-x-2 my-10">
                <Input type="email" placeholder="Your email address" className="focus:border-sc" />
                <Button type="button" variant="outline" className="focus:border-sc gap-x-2
                
                " >
                    <UserPlus size={17} />
                    Join Today</Button>
            </div>
            <p className="my-10 text-tc">© 2023 Qurno. All rights reserved.</p>
        </div>
    )
}

export default Footer
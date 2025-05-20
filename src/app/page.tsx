import ImgDisplay from "@/components/img-display";
import {DisplayProvider} from "@/contexts/display-context";

export default function Home() {

    return (
        <DisplayProvider>
            <div className="bg-gray-200 flex justify-start space-x-4 p-4 min-h-full">
                <ImgDisplay/>
            </div>
        </DisplayProvider>
    )
}

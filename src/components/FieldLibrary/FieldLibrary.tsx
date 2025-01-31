import { Draggable } from "@/components/Draggable/Draggable";

export const FieldLibrary = () => 
{    
    return (
        <div className="w-full md:w-64 bg-white shadow-md p-8 text-white">
            <header className="form-elements">
                <h1 className="form-elements-title">Form Elements</h1>
            </header>
            <section className="flex flex-row md:flex-col flex-wrap space-x-2 md:space-x-0 md:space-y-2 pb-4 md:pb-0">
                <Draggable />               
            </section>
        </div>
    )
}
import TextInput from "../components/TextInput";
import Titleheader from "../components/Titleheader";

const Contact = () => {
    return (
        <div id="contact" className="mx-3 my-15">
            <Titleheader
                title="My Contact"
                sub="connect me "
            />
            <div className="flex flex-col items-center justify-center md:grid grid-cols-7">
                <div className="col-span-4">
                    <form className="flex flex-col justify-center items-center gap-3">
                        <TextInput label="Name" type="text"/>
                        <TextInput label="Email" type="email"/>
                        <TextInput label="Phone number" type="number"/>
                        <div className="flex flex-row justify-end w-[70%]">
                            <button className="bg-white-50 text-black font-bold px-5 py-2 rounded-md cursor-pointer">Subscribe</button>

                        </div>
                        
                    </form>
                </div>
                <div className="col-span-3 my-5">
                    <div >Arun Kumar. A</div>
                    <div >Kochi, Kerala, India Pincode:622008</div>
                    <div>+91 62827 17263</div>
                    <div>arunakhil978@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
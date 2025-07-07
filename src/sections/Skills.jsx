import Titleheader from "../components/Titleheader";
import { skillslogo } from "../constants";

const Skills = () => {
    return (
        <div id="skills" className="mx-3 my-15">
            <Titleheader
                title="My Skills"
                sub="Skills i have"
            />
            <div className="card-border mx-3 my-15 p-3 rounded-md grid grid-cols-4 md:flex gap-3">
                {skillslogo.map((logo, index) => (
                    <div key={index} className="card-border p-3 rounded-md w-full h-18 flex justify-center items-center bg-gray-200">
                        <img src={logo.skilllogo} alt="logo" className="max-w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

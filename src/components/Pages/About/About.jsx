import { useLoaderData } from "react-router-dom";
import AboutSection from "../AboutSection/AboutSection";

const About = () => {
    const about = useLoaderData();
    const usersStyle = {
        display: 'grid',
        gap: '10px',
        'grid-template-columns': 'repeat(5, 1fr)',
        'align-items': 'center',
    }
    return (
        <div>
            <h2>About Us : {about.length}</h2>
            <p>This is About page</p>
            <div style={usersStyle}>
                {
                    about.map(about => <AboutSection key={about.id} about={about}></AboutSection>)
                }
            </div>

        </div>
    );
};

export default About;
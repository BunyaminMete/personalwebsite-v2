import HomePage from '../home/home';
import './style.css';

import CardGenerator from '../../components/card-projects/card';

import projectpng from '../../assets/hub.png';
import highlightpng from '../../assets/highlight.png';
import DownArrow from '../../components/arrow/arrow';

const SectionSet = () => {
  return (
    <>
      <div>
        <HomePage />
        <DownArrow id="1" />
        <CardGenerator
          description="Daily App project is the first long-time project that I did. I learned informations such as React state
                usage, routing..."
          image={projectpng}
          url="https://dailyappwithreact-gu51hocr7-bunyaminmete.vercel.app/login"
          desktopimage="https://user-images.githubusercontent.com/108274379/184619867-ddf8890d-5e2f-4e48-96ff-c59cb25de322.png"
        />

        <DownArrow id="2" />

        <CardGenerator
          description="A component that you can use to highlight the text you are looking for. I also created npm package."
          image="https://user-images.githubusercontent.com/108274379/186110176-84dd157d-5038-48f6-845e-121347d1921d.png"
          url="https://bunyaminmete.github.io/Highlighter-Project-For-Hubstudio/"
          desktopimage={highlightpng}
        />

        <DownArrow id="3" />

        <CardGenerator
          description="I used axios and get the data from pokeAPI. You can search pokemon by typing on input."
          image="https://user-images.githubusercontent.com/108274379/188894030-525c0f14-a85e-4afe-9860-88159919efd6.png"
          url="https://bunyaminmete.github.io/pokeAPI/"
          desktopimage="https://user-images.githubusercontent.com/108274379/188894030-525c0f14-a85e-4afe-9860-88159919efd6.png"
        />
      </div>
    </>
  );
};

export default SectionSet;

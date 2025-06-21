import { useHeroActions } from '../../hooks/useHeroActions';
import bgImage2 from '../../assets/images/bg.jfif';
import ScrollButton from "../Buttons/ScrollButton";
import { useDownload } from '../../hooks/useDownload';

export default function HeroSection({ backgroundImage }) {
    const { handleDownload, scrollToNews } = useHeroActions();

    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage2})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
                <h1 className="text-white text-5xl font-bold mb-6 drop-shadow-lg">WheelsCity</h1>

                <button
                    onClick={handleDownload}
                    className="bg-primary text-white px-8 py-4 rounded-2xl shadow-lg text-lg font-semibold hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                    Скачать
                </button>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <ScrollButton targetId="features"/>
            </div>
        </div>
    );  
}
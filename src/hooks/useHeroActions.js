export function useHeroActions() {
  const handleDownload = () => {
    window.location.href = '/download/AutoLink.exe';
  };

  const scrollToNews = () => {
    const section = document.getElementById('News-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return { handleDownload, scrollToNews };
}
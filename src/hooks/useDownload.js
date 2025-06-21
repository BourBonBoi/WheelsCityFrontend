export function useDownload() {
  function handleDownload() {
    const link = document.createElement('a');
    link.href = '/myfile.zip';  
    link.download = 'myfile.zip'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return { handleDownload };
}

export default function Paragraph({children}: { children: React.ReactNode}) {
    
    const textContent = String(children);
    const words = textContent.split(/\s+/).filter(word => word.length > 0);
    const maxWords = 15;
    const isTruncated = words.length > maxWords;
    const displayedWords = words.slice(0, maxWords);
    let displayedText = displayedWords.join(' ');

    if (isTruncated) {
        displayedText += '...';
    }

    return <p className="text-gray-900 mb-4 flex-1">{displayedText}</p>;
}
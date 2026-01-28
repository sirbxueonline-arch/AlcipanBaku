'use server';

export async function translateText(text: string, targetLang: string): Promise<string> {
    if (!text || !text.trim()) return '';

    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            console.error('Translation failed:', response.statusText);
            return text; // Fallback to original
        }

        const data = await response.json();
        // data[0] contains array of translated sentences. 
        // data[0][0][0] is the first sentence translation.
        // We handle multiple sentences by joining map of index 0
        if (Array.isArray(data) && Array.isArray(data[0])) {
            return data[0].map((item: any) => item[0]).join('');
        }
        
        return text;
    } catch (error) {
        console.error('Translation error:', error);
        return text;
    }
}

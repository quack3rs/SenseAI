const API_BASE_URL = import.meta.env?.VITE_API_URL || 'http://localhost:3001';

export interface SentimentAnalysis {
    emotion: string;
    suggestion: string;
    sentimentScore?: number;
    intensity?: string;
    keyIndicators?: string[];
    priority?: string;
    recommendedTone?: string;
    coachingTips?: string[];
    phraseExamples?: string[];
    warningFlags?: string[];
}

export async function analyzeTranscriptForSuggestions(transcript: string): Promise<SentimentAnalysis> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/gemini/analyze-transcript`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ transcript })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return {
            emotion: data.emotion || 'Unknown',
            suggestion: data.suggestion || 'Continue monitoring conversation.',
            sentimentScore: data.sentimentScore || 5,
            intensity: data.intensity || 'medium',
            keyIndicators: data.keyIndicators || [],
            priority: data.priority || 'medium',
            recommendedTone: data.recommendedTone || 'professional',
            coachingTips: data.coachingTips || [
                'Listen actively and acknowledge the customer\'s concern',
                'Use empathetic language to build rapport',
                'Focus on solutions rather than problems'
            ],
            phraseExamples: data.phraseExamples || [
                'I understand your concern and I\'m here to help',
                'Let me look into this for you right away',
                'I can see why this would be frustrating'
            ],
            warningFlags: data.warningFlags || [
                'Monitor for escalation signals',
                'Watch for tone changes'
            ]
        };
    } catch (error) {
        console.error("Error generating suggestion from backend:", error);
        return {
            emotion: "Neutral",
            suggestion: "Continue monitoring conversation for sentiment changes.",
            sentimentScore: 5,
            intensity: 'medium',
            keyIndicators: [],
            priority: 'medium',
            recommendedTone: 'professional',
            coachingTips: [
                'Listen actively and acknowledge the customer\'s concern',
                'Use empathetic language to build rapport',
                'Focus on solutions rather than problems'
            ],
            phraseExamples: [
                'I understand your concern and I\'m here to help',
                'Let me look into this for you right away',
                'I can see why this would be frustrating'
            ],
            warningFlags: [
                'Monitor for escalation signals',
                'Watch for tone changes'
            ]
        };
    }
}

type Content = {
    role: 'user' | 'model';
    parts: { text: string }[];
};

export async function getAssistantResponse(prompt: string, history: Content[]): Promise<string> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/gemini/assistant`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt, history })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Error generating assistant response from backend:", error);
        return "I'm sorry, I encountered an error while processing your request. Please try again later.";
    }
}
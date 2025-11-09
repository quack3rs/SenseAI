// const API_BASE_URL = import.meta.env?.VITE_API_URL || 'http://localhost:3001';

// export interface SentimentAnalysis {
//     emotion: string;
//     suggestion: string;
//     sentimentScore?: number;
//     intensity?: string;
//     keyIndicators?: string[];
//     priority?: string;
//     recommendedTone?: string;
//     coachingTips?: string[];
//     phraseExamples?: string[];
//     warningFlags?: string[];
// }

// export async function analyzeTranscriptForSuggestions(transcript: string): Promise<SentimentAnalysis> {
//     try {
//         const response = await fetch(`${API_BASE_URL}/api/gemini/analyze-transcript`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ transcript })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         return {
//             emotion: data.emotion || 'Unknown',
//             suggestion: data.suggestion || 'Continue monitoring conversation.',
//             sentimentScore: data.sentimentScore || 5,
//             intensity: data.intensity || 'medium',
//             keyIndicators: data.keyIndicators || [],
//             priority: data.priority || 'medium',
//             recommendedTone: data.recommendedTone || 'professional',
//             coachingTips: data.coachingTips || [
//                 'Listen actively and acknowledge the customer\'s concern',
//                 'Use empathetic language to build rapport',
//                 'Focus on solutions rather than problems'
//             ],
//             phraseExamples: data.phraseExamples || [
//                 'I understand your concern and I\'m here to help',
//                 'Let me look into this for you right away',
//                 'I can see why this would be frustrating'
//             ],
//             warningFlags: data.warningFlags || [
//                 'Monitor for escalation signals',
//                 'Watch for tone changes'
//             ]
//         };
//     } catch (error) {
//         console.error("Error generating suggestion from backend:", error);
//         return {
//             emotion: "Neutral",
//             suggestion: "Continue monitoring conversation for sentiment changes.",
//             sentimentScore: 5,
//             intensity: 'medium',
//             keyIndicators: [],
//             priority: 'medium',
//             recommendedTone: 'professional',
//             coachingTips: [
//                 'Listen actively and acknowledge the customer\'s concern',
//                 'Use empathetic language to build rapport',
//                 'Focus on solutions rather than problems'
//             ],
//             phraseExamples: [
//                 'I understand your concern and I\'m here to help',
//                 'Let me look into this for you right away',
//                 'I can see why this would be frustrating'
//             ],
//             warningFlags: [
//                 'Monitor for escalation signals',
//                 'Watch for tone changes'
//             ]
//         };
//     }
// }

// type Content = {
//     role: 'user' | 'model';
//     parts: { text: string }[];
// };

// export async function getAssistantResponse(prompt: string, history: Content[]): Promise<string> {
//     try {
//         const response = await fetch(`${API_BASE_URL}/api/gemini/assistant`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ prompt, history })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data.response;
//     } catch (error) {
//         console.error("Error generating assistant response from backend:", error);
//         return "I'm sorry, I encountered an error while processing your request. Please try again later.";
//     }
// }





// const API_BASE_URL = import.meta.env?.VITE_API_URL || 'http://localhost:3001';

// export interface SentimentAnalysis {
//     emotion: string;
//     suggestion: string;
//     sentimentScore?: number;
//     intensity?: string;
//     keyIndicators?: string[];
//     priority?: string;
//     recommendedTone?: string;
//     coachingTips?: string[];
//     phraseExamples?: string[];
//     warningFlags?: string[];
// }

// export interface CompanyContext {
//     policies: string[];
//     products: string[];
//     commonIssues?: string[];
// }

// /**
//  * Analyze a transcript and get AI-generated, context-aware suggestions.
//  * This replaces static suggestions with real-time prompts to Gemini/Grok.
//  */
// export async function analyzeTranscriptForSuggestions(
//     transcript: string,
//     companyContext: CompanyContext
// ): Promise<SentimentAnalysis> {
//     try {
//         const response = await fetch(`${API_BASE_URL}/api/gemini/analyze-transcript`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ transcript, companyContext }),
//         });

//         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//         const data = await response.json();

//         return {
//             emotion: data.emotion || 'Neutral',
//             suggestion: data.suggestion || 'Monitor conversation and provide guidance based on context.',
//             sentimentScore: data.sentimentScore,
//             intensity: data.intensity || 'medium',
//             keyIndicators: data.keyIndicators || [],
//             priority: data.priority || 'medium',
//             recommendedTone: data.recommendedTone || 'professional',
//             coachingTips: data.coachingTips || [],
//             phraseExamples: data.phraseExamples || [],
//             warningFlags: data.warningFlags || [],
//         };
//     } catch (error) {
//         console.error('Error generating suggestion from backend:', error);
//         return {
//             emotion: 'Neutral',
//             suggestion: 'Continue monitoring conversation for sentiment changes.',
//             sentimentScore: 5,
//             intensity: 'medium',
//             keyIndicators: [],
//             priority: 'medium',
//             recommendedTone: 'professional',
//             coachingTips: [],
//             phraseExamples: [],
//             warningFlags: [],
//         };
//     }
// }

// type Content = {
//     role: 'user' | 'model';
//     parts: { text: string }[];
// };

// /**
//  * Generates an AI assistant response with company context considered.
//  * This function sends the full transcript/history plus context to Gemini/Grok.
//  */
// export async function getAssistantResponse(
//     prompt: string,
//     history: Content[],
//     companyContext: CompanyContext
// ): Promise<string> {
//     try {
//         const response = await fetch(`${API_BASE_URL}/api/gemini/assistant`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ prompt, history, companyContext }),
//         });

//         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//         const data = await response.json();
//         return data.response;
//     } catch (error) {
//         console.error('Error generating assistant response from backend:', error);
//         return "I'm sorry, I encountered an error while processing your request. Please try again later.";
//     }
// }


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

export interface CompanyContext {
    policies: string[];
    products: string[];
    commonIssues?: string[];
}

/**
 * Analyze a transcript and get AI-generated, context-aware suggestions.
 * This function uses Gemini (or Grok) to dynamically understand customer interactions
 * and suggest realistic responses based on the company's policies and known issues.
 */
export async function analyzeTranscriptForSuggestions(
    transcript: string,
    companyContext: CompanyContext
): Promise<SentimentAnalysis> {
    try {
        // send transcript + company context to backend for Gemini/Grok processing
        const response = await fetch(`${API_BASE_URL}/api/gemini/analyze-transcript`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: `
                    You are a customer support AI trainer for ${companyContext?.products?.[0] || 'Instacart'}.
                    Analyze this conversation transcript and generate:
                    - The detected customer emotion
                    - A helpful next-step suggestion for the support rep
                    - Tone and de-escalation strategy if applicable
                    - Any red flags or policy-sensitive points
                    - Coaching tips for improving the rep’s phrasing
                    - Example phrases that align with company tone

                    Transcript:
                    ${transcript}

                    Company Context:
                    Policies: ${companyContext.policies.join(', ')}
                    Products: ${companyContext.products.join(', ')}
                    Common Issues: ${(companyContext.commonIssues || []).join(', ')}
                `
            }),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        return {
            emotion: data.emotion || 'Neutral',
            suggestion: data.suggestion || 'Monitor the customer’s tone and provide context-specific reassurance.',
            sentimentScore: data.sentimentScore ?? 5,
            intensity: data.intensity || 'medium',
            keyIndicators: data.keyIndicators || [],
            priority: data.priority || 'medium',
            recommendedTone: data.recommendedTone || 'empathetic',
            coachingTips: data.coachingTips || [
                'Acknowledge delays or inconveniences before offering a fix.',
                'Stay calm and match the customer’s tone without mirroring frustration.',
            ],
            phraseExamples: data.phraseExamples || [
                'I completely understand why that would be frustrating — let’s fix this for you.',
                'Thanks for your patience, I’ll make sure this is sorted out quickly.',
            ],
            warningFlags: data.warningFlags || [
                'Customer expressing frustration about repeated issues.',
                'Possible escalation due to refund or delay topic.',
            ],
        };
    } catch (error) {
        console.error('Error generating suggestion from backend:', error);
        return {
            emotion: 'Neutral',
            suggestion: 'Continue monitoring conversation for sentiment changes.',
            sentimentScore: 5,
            intensity: 'medium',
            keyIndicators: [],
            priority: 'medium',
            recommendedTone: 'professional',
            coachingTips: [],
            phraseExamples: [],
            warningFlags: [],
        };
    }
}

type Content = {
    role: 'user' | 'model';
    parts: { text: string }[];
};

/**
 * Generates an AI assistant response with company context considered.
 * Sends the full conversation + context to Gemini/Grok for dynamic suggestions.
 */
export async function getAssistantResponse(
    prompt: string,
    history: Content[],
    companyContext: CompanyContext
): Promise<string> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/gemini/assistant`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt, history, companyContext }),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error generating assistant response from backend:', error);
        return "I'm sorry, I encountered an error while processing your request. Please try again later.";
    }
}

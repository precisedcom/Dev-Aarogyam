export async function getWellnessTip(): Promise<string> {
  try {
    const response = await fetch('/api/wellness-tip');
    const data = await response.json();
    return data.tip || "Breathe deeply. Find peace in the present moment.";
  } catch (error) {
    console.error("Fetch Wellness Tip Error:", error);
    return "Focus on your breath and let go of what no longer serves you.";
  }
}

export async function getWellnessAdvice(userPrompt: string): Promise<string> {
  // This could also be moved to an API route if ever used
  return "Personalized advice is currently unavailable. Please focus on your practice.";
}

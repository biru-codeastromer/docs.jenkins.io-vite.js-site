import { parse } from 'yaml';

export async function loadYamlData(path) {
  try {
    const response = await fetch(`/data/${path}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${path}`);
    }
    const text = await response.text();
    return parse(text);
  } catch (error) {
    console.error('Error loading YAML data:', error);
    throw new Error(`Failed to parse YAML from ${path}`);
  }
}

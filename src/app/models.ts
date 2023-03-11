export interface TextSimilarityDto {
  timestamp: string,
  time: number,
  lang: string,
  langConfidence: number,
  text1: string,
  url1: string,
  text2: string,
  url2: string,
  similarity: number
}

export interface LanguageDetectionDto {
  timestamp: string,
  time: number,
  text: string,
  url: string,
  detectedLangs: Language[]
}

export interface Language {
  lang: string,
  confidence: number
}

export interface SentimentAnalysisDto {
  timestamp: string,
  time: number,
  lang: string,
  sentiment: Sentiment
}

export interface Sentiment {
  score: number,
  type: string
}

export interface EntityExtractionDto {
  timestamp: string,
  time: string,
  lang:string,
  langConfidence: string,
  text: string,
  url: string,
  annotations: Annotation []
}

export interface Annotation {
  abstract: string,
  id: string,
  image: Image,
  title: string,
  start: string,
  categories: string[]
  lod: Lod,
  label: string,
  types: string[],
  confidence: number,
  uri: string,
  end: number,
  spot: string
}

export interface Lod {
  wikipedia: string,
  dbpedia: string
}

export interface Image {
  full: string,
  thumbnail: string
}

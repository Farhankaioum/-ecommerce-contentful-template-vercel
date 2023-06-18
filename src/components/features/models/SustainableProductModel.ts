// types.ts
export interface SustainableProductModel {
  id: string
  name: string
  sustainabilityMetrics: SustainabilityMetrics
  }

  export interface SustainabilityMetrics {
    status: string
    score: string
    packagingScore: string
    totalCarbon: string
  }
  
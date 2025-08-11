export interface Movie {
  id: number // Ex: 1
  title: string // Ex: "Le Seigneur des Anneaux"
  description: string // Ex: "Un film épique d'aventure"
  year: number 
  genres: string[] // Ex: ["Action", "Aventure"]
  posterUrl: string     // URL de l'affiche du film, ex: "https://example.com/poster.jpg"
  rating?: number // note moyenne
  director?: string // Ex: "Peter Jackson"
  actors?: string[] // Ex: ["Elijah Wood", "Ian McKellen"]
}

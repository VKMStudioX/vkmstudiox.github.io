import { acceptHMRUpdate, defineStore } from 'pinia'
import { projectsDef } from './projects-default-data'

export interface ProjectSlides {
    path: string
    image: string
    src?: string
    alt: string
    title: string
}

export interface ProjectContentLink {
    id: number
    type: string
    icon: string 
    class: string
    link: string
}

export interface ProjectTechnology {
    icon: string
    class: string
}

export interface Project {
  id: number
  name: string
  slides: ProjectSlides[]
  content: {
      title: string
      content: string
      links: ProjectContentLink[]
  }
  technologies: ProjectTechnology[]
}

export interface ProjectsState {
  projects: Project[]
}

export const useProjectsStore = defineStore('projects', {
  state(): ProjectsState {
    return {
      projects: projectsDef,
    }
  },
  actions: {},
  getters: {
    getProductById: (state: ProjectsState) => (id: number) => state.projects && state.projects.find(v => v.id === Number(id)),
    getProducts: (state: ProjectsState) => state.projects,
  },
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectsStore, import.meta.hot))

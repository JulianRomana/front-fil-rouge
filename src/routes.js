import TrashIcon from "./assets/images/trash.svg"
import PollutionIcon from "./assets/images/pollution.svg"
import HealthIcon from "./assets/images/health.svg"

export const routes = [
  {
    category: {
      label: "Les déchets",
      link: "trash",
      icon: TrashIcon,
    },
    themes: [
      { label: "Station de tri", link: "order" },
      { label: "Green Walk", link: "greenwalk" },
      { label: "Réparer vos objets", link: "repair" },
    ],
  },
  {
    category: {
      label: "Moins polluer",
      link: "pollution",
      icon: PollutionIcon,
    },
    themes: [
      { label: "", link: "" },
      { label: "", link: "" },
      { label: "", link: "" },
    ],
  },
  {
    category: {
      label: "Manger responsable",
      link: "health",
      icon: HealthIcon,
    },
    themes: [
      { label: "", link: "" },
      { label: "", link: "" },
      { label: "", link: "" },
    ],
  },
]

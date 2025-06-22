import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Share2 } from "lucide-react"

// Data structure for gallery images
const galleryData = {
  modelaje: {
    title: "Modelaje",
    description: "Galería de modelaje profesional",
    images: [
      {
        id: 1,
        name: "Modelaje-001",
        src: "/modelaje/WhatsApp Image 2025-06-18 at 17.16.35.jpeg",
        alt: "Modelaje 1"
      },
      {
        id: 2,
        name: "Modelaje-002",
        src: "/modelaje/WhatsApp Image 2025-06-18 at 17.16.35 (1).jpeg",
        alt: "Modelaje 2"
      },
      {
        id: 3,
        name: "Modelaje-003",
        src: "/modelaje/WhatsApp Image 2025-06-18 at 17.16.36.jpeg",
        alt: "Modelaje 3"
      },
      {
        id: 4,
        name: "Modelaje-004",
        src: "/modelaje/WhatsApp Image 2025-06-18 at 17.16.37.jpeg",
        alt: "Modelaje 4"
      },
      {
        id: 5,
        name: "Modelaje-005",
        src: "/modelaje/WhatsApp Image 2025-06-18 at 17.16.37 (1).jpeg",
        alt: "Modelaje 5"
      },
      {
        id: 6,
        name: "Modelaje-006",
        src: "/modelaje/WhatsApp Image 2025-06-18 at 17.16.37 (2).jpeg",
        alt: "Modelaje 6"
      },
      {
        id: 7,
        name: "Modelaje-007",
        src: "/modelaje/WhatsApp Image 2025-06-18 at 17.16.37 (3).jpeg",
        alt: "Modelaje 7"
      },
      {
        id: 8,
        name: "Modelaje-008",
        src: "/modelaje/WhatsApp Image 2025-06-18 at 17.16.38.jpeg",
        alt: "Modelaje 8"
      },
      {
        id: 9,
        name: "Modelaje-009",
        src: "/modelaje/WhatsApp Image 2025-06-18 at 17.16.38 (1).jpeg",
        alt: "Modelaje 9"
      }
    ]
  },
  FestivalFolclorico: {
    title: "Festival Folclorico",
    description: "Galería del XXXIV Festival Folclórico",
    images: [
      {
        id: 1,
        name: "Festival-001",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.31.jpeg",
        alt: "Festival Folclorico 1"
      },
      {
        id: 2,
        name: "Festival-002",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.32.jpeg",
        alt: "Festival Folclorico 2"
      },
      {
        id: 3,
        name: "Festival-003",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.32 (1).jpeg",
        alt: "Festival Folclorico 3"
      },
      {
        id: 4,
        name: "Festival-004",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.32 (2).jpeg",
        alt: "Festival Folclorico 4"
      },
      {
        id: 5,
        name: "Festival-005",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.32 (3).jpeg",
        alt: "Festival Folclorico 5"
      },
      {
        id: 6,
        name: "Festival-006",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.33.jpeg",
        alt: "Festival Folclorico 6"
      },
      {
        id: 7,
        name: "Festival-007",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.33 (1).jpeg",
        alt: "Festival Folclorico 7"
      },
      {
        id: 8,
        name: "Festival-008",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.33 (2).jpeg",
        alt: "Festival Folclorico 8"
      },
      {
        id: 9,
        name: "Festival-009",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.33 (3).jpeg",
        alt: "Festival Folclorico 9"
      },
      {
        id: 10,
        name: "Festival-010",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.33 (4).jpeg",
        alt: "Festival Folclorico 10"
      },
      {
        id: 11,
        name: "Festival-011",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.34.jpeg",
        alt: "Festival Folclorico 11"
      },
      {
        id: 12,
        name: "Festival-012",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.34 (1).jpeg",
        alt: "Festival Folclorico 12"
      },
      {
        id: 13,
        name: "Festival-013",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.34 (2).jpeg",
        alt: "Festival Folclorico 13"
      },
      {
        id: 14,
        name: "Festival-014",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.34 (3).jpeg",
        alt: "Festival Folclorico 14"
      },
      {
        id: 15,
        name: "Festival-015",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.34 (4).jpeg",
        alt: "Festival Folclorico 15"
      },
      {
        id: 16,
        name: "Festival-016",
        src: "/XXXIV festival folclorico/WhatsApp Image 2025-06-18 at 17.18.35.jpeg",
        alt: "Festival Folclorico 16"
      }
    ]
  },
  cumpleanos: {
    title: "Cumpleaños",
    description: "Celebraciones llenas de alegría",
    images: [
      {
        id: 1,
        name: "Cumpleanos-001",
        src: "/placeholder.jpg",
        alt: "Cumpleaños 1"
      },
      {
        id: 2,
        name: "Cumpleanos-002",
        src: "/placeholder.jpg",
        alt: "Cumpleaños 2"
      },
      {
        id: 3,
        name: "Cumpleanos-003",
        src: "/placeholder.jpg",
        alt: "Cumpleaños 3"
      },
      // Add more images here as needed
    ]
  },
  empresariales: {
    title: "Eventos Empresariales",
    description: "Profesionalismo en cada detalle",
    images: [
      {
        id: 1,
        name: "Empresarial-001",
        src: "/placeholder.jpg",
        alt: "Evento Empresarial 1"
      },
      {
        id: 2,
        name: "Empresarial-002",
        src: "/placeholder.jpg",
        alt: "Evento Empresarial 2"
      },
      {
        id: 3,
        name: "Empresarial-003",
        src: "/placeholder.jpg",
        alt: "Evento Empresarial 3"
      },
      // Add more images here as needed
    ]
  },
  culturales: {
    title: "Eventos Culturales",
    description: "Arte y cultura en movimiento",
    images: [
      {
        id: 1,
        name: "Cultural-001",
        src: "/placeholder.jpg",
        alt: "Evento Cultural 1"
      },
      {
        id: 2,
        name: "Cultural-002",
        src: "/placeholder.jpg",
        alt: "Evento Cultural 2"
      },
      {
        id: 3,
        name: "Cultural-003",
        src: "/placeholder.jpg",
        alt: "Evento Cultural 3"
      },
      // Add more images here as needed
    ]
  }
}

export default function GalleryPage({ params }: { params: { category: string } }) {
  const category = params.category as keyof typeof galleryData
  const gallery = galleryData[category]

  if (!gallery) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Galería no encontrada</h1>
          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{gallery.title}</h1>
                <p className="text-gray-600">{gallery.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gallery.images.map((image) => (
            <div key={image.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Image Info Overlay */}
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full">
                    <h3 className="text-white font-semibold mb-2">{image.name}</h3>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Download className="h-4 w-4 mr-1" />
                        Descargar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
            Cargar más imágenes
          </Button>
        </div>
      </div>
    </div>
  )
} 
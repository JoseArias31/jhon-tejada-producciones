import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  Video,
  Heart,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  Play,
  Star,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-rose-600" />
              <span className="text-xl font-bold text-gray-900">JHON TEJADA PRODUCCIONES</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-rose-600 transition-colors">
                Inicio
              </Link>
              <Link href="#portafolio" className="text-gray-700 hover:text-rose-600 transition-colors">
                Portafolio
              </Link>
              <Link href="#servicios" className="text-gray-700 hover:text-rose-600 transition-colors">
                Servicios
              </Link>
              <Link href="#nosotros" className="text-gray-700 hover:text-rose-600 transition-colors">
                Nosotros
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-rose-600 transition-colors">
                Contacto
              </Link>
            </div>
            <Button className="bg-rose-600 hover:bg-rose-700">
              <Phone className="h-4 w-4 mr-2" />
              Contactar
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Capturamos tus
            <span className="text-rose-400 block">Momentos Únicos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Producción audiovisual y fotográfica profesional para eventos sociales y culturales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg px-8 py-3">
              <Camera className="h-5 w-5 mr-2" />
              Ver Portafolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
            >
              <Play className="h-5 w-5 mr-2" />
              Ver Videos
            </Button>
          </div>
        </div>
      </section>

      {/* Presentación */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Profesionales en Producción Audiovisual</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En JHON TEJADA PRODUCCIONES nos especializamos en capturar la esencia de tus momentos más importantes. Con
              años de experiencia en el sector, ofrecemos servicios de fotografía y video de alta calidad para
              matrimonios, bodas, cumpleaños, eventos empresariales y culturales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
                <p className="text-gray-600">Equipos profesionales y técnicas avanzadas</p>
              </div>
              <div className="text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pasión por el Arte</h3>
                <p className="text-gray-600">Cada proyecto es único y especial</p>
              </div>
              <div className="text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
                <p className="text-gray-600">Cientos de eventos exitosos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section id="portafolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Portafolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explora nuestra colección de momentos capturados en diferentes tipos de eventos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Matrimonios */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Matrimonios"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-rose-600">Matrimonios</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Matrimonios</h3>
                <p className="text-gray-600 mb-4">Capturamos la magia de tu día especial</p>
                <Button variant="outline" className="w-full">
                  Ver Galería
                </Button>
              </CardContent>
            </Card>

            {/* Bodas */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Bodas"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-rose-600">Bodas</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bodas</h3>
                <p className="text-gray-600 mb-4">Elegancia y romance en cada imagen</p>
                <Button variant="outline" className="w-full">
                  Ver Galería
                </Button>
              </CardContent>
            </Card>

            {/* Cumpleaños */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Cumpleaños"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-rose-600">Cumpleaños</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cumpleaños</h3>
                <p className="text-gray-600 mb-4">Celebraciones llenas de alegría</p>
                <Button variant="outline" className="w-full">
                  Ver Galería
                </Button>
              </CardContent>
            </Card>

            {/* Eventos Empresariales */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Eventos Empresariales"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-rose-600">Empresariales</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Eventos Empresariales</h3>
                <p className="text-gray-600 mb-4">Profesionalismo en cada detalle</p>
                <Button variant="outline" className="w-full">
                  Ver Galería
                </Button>
              </CardContent>
            </Card>

            {/* Eventos Culturales */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Eventos Culturales"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-rose-600">Culturales</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Eventos Culturales</h3>
                <p className="text-gray-600 mb-4">Arte y cultura en movimiento</p>
                <Button variant="outline" className="w-full">
                  Ver Galería
                </Button>
              </CardContent>
            </Card>

            {/* Videos YouTube */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-black flex items-center justify-center">
                <Youtube className="h-16 w-16 text-red-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-red-600">Videos</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Videos Destacados</h3>
                <p className="text-gray-600 mb-4">Nuestros mejores trabajos audiovisuales</p>
                <Button variant="outline" className="w-full">
                  <Youtube className="h-4 w-4 mr-2" />
                  Ver Canal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios audiovisuales para hacer de tu evento algo inolvidable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-rose-100 p-3 rounded-full mr-4">
                  <Camera className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-2xl font-semibold">Fotografía Profesional</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Sesiones fotográficas completas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Edición profesional de imágenes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Entrega en alta resolución
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Álbumes digitales personalizados
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-rose-100 p-3 rounded-full mr-4">
                  <Video className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-2xl font-semibold">Producción Audiovisual</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Grabación en 4K Ultra HD
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Edición cinematográfica
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Música y efectos de sonido
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Entrega en múltiples formatos
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nosotros</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                JHON TEJADA PRODUCCIONES nació de la pasión por capturar momentos únicos e irrepetibles. Con años de
                experiencia en el sector audiovisual, nos hemos consolidado como una empresa líder en la producción de
                contenido para eventos sociales y culturales.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestra misión es preservar tus recuerdos más preciados a través de imágenes y videos de la más alta
                calidad, utilizando equipos profesionales y técnicas innovadoras que garantizan resultados
                excepcionales.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">500+</div>
                  <div className="text-gray-600">Eventos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">5+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Jhon Tejada"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-rose-600 text-white p-6 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div className="text-sm mt-2">Calidad Garantizada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ¿Listo para capturar tus momentos especiales? Ponte en contacto con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulario */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <Input placeholder="Tu número de teléfono" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Evento</label>
                  <Input placeholder="Matrimonio, Cumpleaños, Boda, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <Textarea placeholder="Cuéntanos sobre tu evento..." rows={4} />
                </div>
                <Button className="w-full bg-rose-600 hover:bg-rose-700" size="lg">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>

            {/* Información de contacto */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+57 300 123 4567</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@jhontejadaproducciones.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ubicación</h4>
                    <p className="text-gray-600">Bogotá, Colombia</p>
                  </div>
                </div>
              </Card>

              {/* Redes Sociales */}
              <Card className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Síguenos en Redes Sociales</h4>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
                    <Youtube className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="h-8 w-8 text-rose-400" />
                <span className="text-xl font-bold">JHON TEJADA PRODUCCIONES</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Especializados en capturar momentos únicos en eventos sociales y culturales. Calidad profesional
                garantizada.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Fotografía
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Video
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Matrimonios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Eventos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+57 300 123 4567</li>
                <li>info@jhontejadaproducciones.com</li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} JHON TEJADA PRODUCCIONES. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

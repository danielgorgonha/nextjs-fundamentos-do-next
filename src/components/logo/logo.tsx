// import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/" title="Página inicial" className="text-white">
      {/* <Image 
        src="/logo.svg" 
        alt="Logo site" 
        width={100} 
        height={100} 
        className="w-10 h-10" 
      /> */}
      OConexo
    </Link>
  )
}
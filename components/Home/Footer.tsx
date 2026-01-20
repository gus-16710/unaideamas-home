export default function Footer() {
  return (
    <footer className="text-center text-gray-500 text-sm py-6">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
        <span>© {new Date().getFullYear()} Unaidea+</span>
        <span className="hidden sm:block">•</span>
        <span>Diversidad Publicitaria</span>
        <span className="hidden sm:block">•</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  );
}

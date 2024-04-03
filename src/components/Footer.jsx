const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative bottom-0 w-full border-t bg-white text-sm flex flex-col items-center gap-y-1 py-3">
      <p>Built with <span className="text-red-600">&hearts;</span></p>
      <p>&copy; Kingsley Omoaka-Iyorah {currentYear}</p>
    </div>
  )
}

export default Footer
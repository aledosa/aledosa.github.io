export function Footer() {
    return (
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-light text-indigo-700 tracking-tight">AD</div>
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} Alexa Dominguez. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://www.linkedin.com/in/alexa-dominguez" className="text-sm text-gray-600 hover:text-indigo-700 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function Example() {
  return (
    <div className="flex items-center justify-between mx-auto px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav aria-label="Pagination" className="isolate flex gap-5 -space-x-px rounded-md shadow-sm ">
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full "
            >
              <FaAngleLeft />
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full bg-slate-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full bg-slate-600"
              
              >
              2
            </a>
            <a
              href="#"
              className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full bg-slate-600">
              3
            </a>
            <a
              href="#"
              className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full bg-slate-600"
            >
              4
            </a>
            <a
              href="#"
              className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full bg-slate-600"
            >
              5
            </a>
            <span 
              className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full "
            >
              ...
            </span>
            <a
              href="#"
              className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full bg-slate-600"
            >
              10
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full "
            >
              <FaAngleRight />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

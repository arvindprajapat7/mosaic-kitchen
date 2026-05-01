import React from 'react'

const ReserveTableButton = () => {
  return (
    <>
    <button
            onClick={() => {
              const element = document.getElementById("book-table");
              if (element) {
                const yOffset = -80; // adjust navbar height
                const y =
                  element.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="bg-yellow-400 w-full sm:w-auto text-black px-6 py-3 rounded-full font-semibold mb-2 sm:mb-0"
          >
            Reserve Table
          </button>
    </>
  )
}

export default ReserveTableButton
export default function Toggle({ text, onToggle, checked }) {
  return (
    <div className="flex items-center justify-center w-full"
      onClick={onToggle}
    >
      <label
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <div id="toogleA" className="hidden" />
          <div
            className="toggle__line w-10 h-4 bg-white rounded-full shadow-inner"
          />
          <div
            className={checked
              ? "toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 CheckedToggle__dot"
              : "toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"}
          />
        </div>
        <div
          className={"text ml-3 text-white font-medium"}
          id="toggleText"
        >
          {(text).toUpperCase()}
        </div>
      </label>
      <style>{`
        .toggle__dot {
          top: -.25rem;
          left: -.25rem;
          transition: all 0.3s ease-in-out;
        }
        .CheckedToggle__dot {
          transform: translateX(100%);
          background-color: #48bb78;
        }
      `}</style>
    </div>
  )
}
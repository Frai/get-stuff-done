export const SubmitButton = ({ label }) => {
  return (
    <div className="mt-4 bg-gray-50 sm:p-6">
      <button
        type='submit'
        className={`
          w-full
          sm:w-auto
          inline-flex
          justify-center
          px-6
          py-3
          border
          border-transparent
          shadow-sm
          text-sm
          font-medium
          rounded-md
          text-white
          bg-blue-600
          hover:bg-blue-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-blue-500
        `}
      >
        {label}
      </button>
    </div>
  );
}

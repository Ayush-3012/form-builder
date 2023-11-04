const Comprehension = () => {
  return (
    <div className="flex flex-col items-center py-4 justify-center">
      <h2 className="text-4xl text-center font-mono my-2 px-2 font-bold text-emerald-700 max-sm:text-xl">
        Read the text below and answer the questions based on it.
      </h2>
      <div className="w-[80%] max-sm:w-[98%]">
        <div className="text-lg font-mono font-semibold text-center py-2 max-sm:text-sm">
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog.The
          quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog.
        </div>
        <div className="flex justify-center text-xl items-center gap-2 p-2 max-sm:text-lg">
          {/* <div className="">{`>`}. Question 1</div> */}
          <div className="p-3 flex flex-col justify-center items-center">
            <div className="font-serif font-semibold">
              How many unique alphabets are used in the sentence?
            </div>
            <div className="my-2 p-2 flex flex-col gap-3 w-96 max-sm:w-64">
              <div className="px-4 py-2 flex gap-5 rounded-md bg-slate-200 hover:bg-slate-400 cursor-pointer">
                <input type="radio" name="mcq" className="w-5" /> 23
              </div>
              <div className="px-4 py-2 flex gap-5 rounded-md bg-slate-200 hover:bg-slate-400 cursor-pointer">
                <input type="radio" name="mcq" className="w-5" /> 32
              </div>
              <div className="px-4 py-2 flex gap-5 rounded-md bg-slate-200 hover:bg-slate-400 cursor-pointer">
                <input type="radio" name="mcq" className="w-5" /> 26
              </div>
              <div className="px-4 py-2 flex gap-5 rounded-md bg-slate-200 hover:bg-slate-400 cursor-pointer">
                <input type="radio" name="mcq" className="w-5" /> 18
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprehension;

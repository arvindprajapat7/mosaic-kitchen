function Disclaimer() {
  return (
    <section className="bg-black text-gray-300 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-6">
          Website <span className="text-yellow-400">Disclaimer</span>
        </h1>

        <p className="mb-6">
          The information provided on Mosaic Kitchen’s website is for general informational purposes only.
        </p>

        <div className="space-y-8">

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">Accuracy of Information</h2>
            <p>
              While we strive to keep information accurate and up to date, we make no guarantees regarding completeness or reliability.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">External Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their content or practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">Limitation of Liability</h2>
            <p>
              Mosaic Kitchen will not be liable for any losses or damages arising from the use of this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">Consent</h2>
            <p>
              By using our website, you consent to this disclaimer and agree to its terms.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Disclaimer;
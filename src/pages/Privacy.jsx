function PrivacyPolicy() {
  return (
    <section className="bg-black text-gray-300 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-4xl font-bold text-white mb-6">
          Privacy <span className="text-yellow-400">Policy</span>
        </h1>

        <p className="mb-6">
          At Mosaic Kitchen, we value your privacy and are committed to protecting your personal information.
        </p>

        <div className="space-y-8">

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">Information We Collect</h2>
            <p>
              We may collect personal details such as your name, email address, phone number, and reservation details when you interact with our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">How We Use Your Information</h2>
            <p>
              Your information is used to process reservations, improve our services, and communicate updates or offers.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">Data Protection</h2>
            <p>
              We implement security measures to safeguard your data from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">Third-Party Sharing</h2>
            <p>
              We do not sell or share your personal information with third parties except when required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal data at any time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
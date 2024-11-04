const TermsOfServicePage = () => {
    return (
        <main className="bg-white dark:bg-black py-10 px-5 md:px-20">
            <h1 className="text-2xl md:text-4xl font-semibold">Terms of Service</h1>
            <p className="text-md mt-5">
                Welcome to EduCreate. By using EduCreate, you agree to the following Terms of Service, which govern your use of our platform. If you do not agree with any part of these terms, you must not use our services.
            </p>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">1. Service Use</h1>
                <p className="text-md mt-2">
                    EduCreate provides a comprehensive suite of course creation tools designed to help you develop engaging educational content. This includes features for content management, media storage, video generation, and a user-friendly interface that allows for the easy creation and editing of course materials. By using our services, you agree to use them in compliance with applicable laws and regulations.
                </p>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">2. Account and Billing</h1>
                <p className="text-md mt-2">
                    Your account is managed through Clerk, which ensures a secure and efficient account setup process. You are responsible for maintaining the confidentiality of your account credentials. All billing and payment processes are handled through Stripe, and we do not store your payment details. Here are the key points regarding your account and billing:
                </p>
                <ol className="flex flex-col list-decimal list-inside items-start justify-start gap-3 text-sm mt-5">
                    <li><strong>Account Management:</strong> You are responsible for the security of your account and for all activities under your account.</li>
                    <li><strong>Payments:</strong> All payments for services are processed by Stripe, and EduCreate does not store your payment information.</li>
                </ol>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">3. Intellectual Property</h1>
                <p className="text-md mt-2">
                    At EduCreate, we respect intellectual property rights and expect our users to do the same. This section outlines your rights and responsibilities regarding content ownership:
                </p>
                <ol className="flex flex-col list-decimal list-inside items-start justify-start gap-3 text-sm mt-5">
                    <li><strong>Your Content:</strong> You retain ownership of all content you create on EduCreate. By using our platform, you grant us a non-exclusive license to store, display, and manage this content as necessary for the operation of our services.</li>
                    <li><strong>Platform Content:</strong> All content, branding, and technology provided by EduCreate remain the property of EduCreate and are protected by copyright and other intellectual property laws.</li>
                </ol>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">4. User Responsibilities</h1>
                <p className="text-md mt-2">
                    As a user of EduCreate, you agree to uphold the following responsibilities to maintain a safe and respectful environment for all users:
                </p>
                <ol className="flex flex-col list-decimal list-inside items-start justify-start gap-3 text-sm mt-5">
                    <li><strong>Legal Compliance:</strong> You agree to comply with GDPR and other relevant legal requirements while using our platform.</li>
                    <li><strong>Prohibited Content:</strong> You must not upload or distribute any content that is harmful, offensive, or violates the rights of others.</li>
                </ol>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">5. Termination</h1>
                <p className="text-md mt-2">
                    We reserve the right to suspend or terminate accounts at our discretion if we believe that a user has violated these Terms of Service. Such actions may be taken to protect the integrity and security of the EduCreate platform.
                </p>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">6. Limitation of Liability</h1>
                <p className="text-md mt-2">
                    EduCreate is provided “as is.” We do not guarantee the {`platform's`} availability or functionality, and we are not liable for any damages resulting from your use of, or inability to use, our services. Our liability is limited to the fullest extent permitted by law.
                </p>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">7. Changes to Terms</h1>
                <p className="text-md mt-2">
                    EduCreate reserves the right to update or modify these Terms of Service at any time. We will notify users of significant changes through our platform or via email. Continued use of our services following any changes constitutes acceptance of the revised terms.
                </p>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">8. Contact Us</h1>
                <p className="text-md mt-2">
                    If you have any questions or concerns regarding these Terms of Service, please contact us at support@educate.com. Your feedback is important to us as we strive to improve our services and user experience.
                </p>
            </div>
        </main>
    );
}

export default TermsOfServicePage;

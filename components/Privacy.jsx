import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";

const Privacy = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <p className="text-blue-600 underline cursor-pointer">privacy policy</p>
            </DialogTrigger>
            <DialogContent className="max-h-[80vh] overflow-y-auto"> {/* Add max-h to control height */}
                <DialogHeader>
                    <h1 className="text-3xl font-bold">Privacy Policy</h1>
                    <p className="text-md">
                        EduCreate {`("we," "our," or "us")`} is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data, as well as your rights under GDPR.
                    </p>
                </DialogHeader>
                
                <div>
                    <div>
                        <h1 className="text-xl font-semibold">1. Information We Collect</h1>
                        <p className="mt-1ttext-md">We collect and process the following types of information:</p>
                        <ol className="flex flex-col items-start justify-start gap-1 mt-2">
                            <li>• Account Information: Collected at signup, managed by Clerk, includes details like your name and email address.</li>
                            <li>• Payment Information: Processed through Stripe, where your email is used to verify the same user. We do not store your full payment information.</li>
                            <li>• Course Content: Includes text edits, user-uploaded images, videos, and course-related data stored for your course creation.</li>
                            <li>• Uploaded Media: Stored via Cloudinary and includes images and videos for courses.</li>
                            <li>• Usage Information: Data on how you interact with EduCreate, including course generation and editing.</li>
                        </ol>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl font-semibold">2. How We Use Your Information</h1>
                        <p className="mt-1">Your data is used for:</p>
                        <ol className="flex flex-col items-start justify-start gap-1 mt-2">
                            <li>•	Service Provision: To manage your account, enable course creation, and process transactions.</li>
                            <li>• Improvement: To analyze usage patterns and optimize EduCreate’s features.</li>
                            <li>• Communication: For updates, support, and policy changes.</li>
                            <li>• Legal and Security Purposes: To prevent misuse, maintain security, and comply with regulations.</li>
                        </ol>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl font-semibold">3. Third-Party Services</h1>
                        <p className="mt-1">EduCreate relies on trusted third-party services:</p>
                        <ol className="flex flex-col items-start justify-start gap-1 mt-2">
                            <li>• Clerk: Manages user accounts and authentication.</li>
                            <li>•	Stripe: Processes payments securely. Stripe complies with PCI standards.</li>
                            <li>•	Deepgram API: Provides text-to-speech functionality for course narration.</li>
                            <li>•	GPT API: For generating content.</li>
                            <li>•	MoviePy: For video generation.</li>
                            <li>•	Cloudinary: Stores course media securely.</li>
                        </ol>
                        <p className="mt-1" >These services process data as necessary for EduCreate functionality and adhere to GDPR requirements.</p>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl font-semibold">4. Data Retention</h1>
                        <p className="mt-1">Your data is retained as long as necessary for providing services. Account and course data will be deleted upon account deletion, except as required for legal purposes.</p>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl font-semibold">5. Your Rights</h1>
                        <p className="mt-1">Under GDPR, you have rights to:</p>
                        <ol className="flex flex-col items-start justify-start gap-1 mt-2">
                            <li>•	Access: Request a copy of your data</li>
                            <li>•   Correct: Update inaccuracies.</li>
                            <li>•	Erase: Request deletion, subject to legal retention requirements.</li>
                            <li>•	Portability: Receive a machine-readable copy of your data.</li>
                            <li>•	MoviePy: For video generation.</li>
                            <li>•	Withdraw Consent: Update or withdraw consent at any time.</li>
                        </ol>
                        <p className="mt-1" >Contact us at info@educreate.com  to exercise your rights.</p>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl font-semibold">6. Security Measures</h1>
                        <p className="mt-1">We employ encryption, access control, and secure storage to protect your data.</p>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl font-semibold">7. Updates to This Policy</h1>
                        <p className="mt-1">We may update this Privacy Policy periodically. Significant changes will be communicated via email or platform notifications.</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default Privacy;

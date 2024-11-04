import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";

const Terms = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <p className="text-blue-600 underline cursor-pointer">terms of service</p>
            </DialogTrigger>
            <DialogContent className="max-h-[80vh] overflow-y-auto"> {/* Add max-h to control height */}
                <DialogHeader>
                    <h1 className="text-3xl font-bold">EduCreate Terms of Service</h1>
                    <p className="text-md">
                        Welcome to EduCreate. By using EduCreate, you agree to these Terms of Service.
                    </p>
                </DialogHeader>
                
                <div>
                    <div>
                        <h1 className="text-xl font-semibold">1. Service Use</h1>
                        <p className="mt-1ttext-md">EduCreate provides course creation tools, including content management, media storage, and video generation.</p>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl font-semibold">2. Account and Billing</h1>
                        <ol className="flex flex-col items-start justify-start gap-1 mt-2">
                            <li>Account Management: Managed by Clerk. You are responsible for your account security.</li>
                            <li>Payments: Handled by Stripe. EduCreate does not store your full payment details.</li>
                        </ol>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl font-semibold">3. Intellectual Property</h1>
                        <ol className="flex flex-col items-start justify-start gap-1 mt-2">
                            <li>Your Content: You retain ownership of your content. By using EduCreate, you grant us a license to store and display it.</li>
                            <li>Platform Content: EduCreate branding, features, and technology remain our intellectual property.</li>
                        </ol>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl font-semibold">4. User Responsibilities</h1>
                        <ol className="flex flex-col items-start justify-start gap-1 mt-2">
                            <li>Legal Compliance: You agree to comply with GDPR and other applicable laws.</li>
                            <li>Prohibited Content: You will not upload harmful or offensive content.</li>
                        </ol>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl font-semibold">5. Termination</h1>
                        <p className="mt-1">We may suspend or terminate accounts for violations of these terms.</p>
                        
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl font-semibold">6. Limitation of Liability</h1>
                        <p className="mt-1">EduCreate is provided “as is.” We are not liable for damages from use or inability to use EduCreate. Liability is limited to the fullest extent allowed by law.</p>
                    </div>
                    
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default Terms;

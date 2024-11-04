
const PrivacyPolicyPage = () => {
    return (
        <main className="bg-white dark:bg-black py-10 px-10 md:px-20" >
            <h1 className="text-4xl font-semibold" >Privacy Policy</h1>
            <p className="text-md mt-5" >EduCreate {`“we,” “our,” or “us”`} is committed to protecting your privacy and ensuring transparency regarding how your personal data is handled. This Privacy Policy outlines the types of information we collect, how we use and protect that information, and the rights you have concerning your personal data under the General Data Protection Regulation (GDPR).</p>

            <div className="mt-10" >
                <h1 className="text-2xl font-semibold" >1. Information We Collect</h1>
                <p className="text-md mt-2" >EduCreate collects and processes various types of personal and usage information to enhance our services, improve user experiences, and comply with legal requirements. The types of information we collect include:</p>
                <ol className="flex flex-col list-decimal list-inside items-start justify-start gap-3 text-sm mt-5" >
                    <li><strong>Account Information: </strong>During signup, EduCreate collects basic account information managed securely by Clerk. This includes your name and email address, which allow us to personalize your experience and communicate important updates. Clerk ensures the secure storage of your login credentials, including password encryption, and may offer optional features like two-factor authentication for added security. Optional profile details, such as a display name or profile picture, help personalize your account while keeping privacy in mind. All information is handled in accordance with GDPR standards to maintain confidentiality and data protection.</li>

                    <li><strong>Payment Information: </strong>Your payment information is securely processed by Stripe, our trusted payment provider. We use Stripe to handle all transactions, ensuring compliance with industry-standard security protocols to protect your data. During a transaction, we provide Stripe with your email address to verify your identity and link the payment to your account, ensuring consistency across your activities on EduCreate. Importantly, we do not store or have access to your full payment details (such as your credit card number or bank account details), as Stripe securely manages and encrypts this information. This approach keeps your financial data private and minimizes potential security risks, giving you a safe and seamless payment experience.</li>

                    <li><strong>Course Content: </strong>Course content on EduCreate encompasses all materials related to your course creation, including text edits, user-uploaded images, videos, and other data essential for developing and customizing your courses. This content allows you to personalize and enhance your educational materials to align with your specific needs and goals. All user-provided data, such as text inputs for lesson content, images that visually support topics, and videos that enrich course delivery, are securely stored within our system to ensure that your materials are readily accessible for editing, publishing, and sharing with your audience. We prioritize the confidentiality and protection of your content, storing it with high standards of security to prevent unauthorized access or misuse. This enables you to manage your educational resources with ease and confidence as you build meaningful learning experiences.</li>

                    <li><strong>Uploaded Media: </strong>All media files you upload to EduCreate, including images and videos for your courses, are securely stored through Cloudinary, a trusted media management service. This setup ensures that your content is easily accessible and efficiently managed for optimal quality and performance across different devices and screen sizes. Cloudinary handles the storage, processing, and delivery of your media files, allowing for seamless integration within your courses. By leveraging Cloudinary’s robust security and performance features, we provide a reliable environment that safeguards your media files while ensuring they load quickly for a smooth user experience.</li>

                    <li><strong>Usage Information: </strong>We collect data on how you interact with EduCreate to better understand and enhance your experience. This includes information on course generation, editing, and other actions you take within the platform, allowing us to improve functionality and personalize features based on user needs. Tracking your interactions helps us analyze which tools and options are most useful, optimize performance, and address any technical issues more effectively. This data is anonymized and used solely to improve our services, ensuring a seamless and responsive experience tailored to your course creation journey.</li>
                </ol>
            </div>

            <div className="mt-10" >
                <h1 className="text-2xl font-semibold" >2. How We Use Your Information</h1>
                <p className="text-md mt-2" >Your data is used for:</p>
                <ol className="flex flex-col list-decimal list-inside items-start justify-start gap-3 text-sm mt-5" >
                    <li><strong>Service Provision:</strong>Your data is utilized primarily to manage your account effectively, enabling you to create and manage courses seamlessly on EduCreate. This involves facilitating essential features such as account setup, profile management, and the overall functionality of the course creation process. Additionally, we use your information to process transactions securely, ensuring that all payments are handled efficiently and accurately. By leveraging your data, we can provide a smooth user experience, streamline interactions, and maintain the necessary operational integrity of our services. This commitment to service provision ensures that you can focus on developing your educational content without unnecessary interruptions or complications.</li>

                    <li><strong>Improvement: </strong>We use your data to analyze usage patterns and gain insights into how you interact with EduCreate. This analysis helps us identify trends and areas for improvement, allowing us to optimize the {`platform's`} features and functionality continuously. By understanding user behavior, we can make informed decisions about enhancements, ensuring that the tools and resources we provide meet your needs effectively. Our goal is to create a more intuitive and user-friendly experience, enabling you to navigate the platform with ease and efficiency. Your feedback and usage data play a crucial role in shaping the evolution of EduCreate, ensuring that we remain responsive to your requirements and committed to delivering a high-quality educational experience.</li>

                    <li><strong>Communication: </strong>We utilize your data to facilitate effective communication regarding important updates, support resources, and policy changes related to EduCreate. By keeping you informed, we ensure that you are aware of new features, enhancements, and any modifications to our terms of service or privacy policy that may affect your use of the platform. Additionally, your information allows us to provide personalized support tailored to your needs, addressing any questions or issues you may encounter while using EduCreate. Our commitment to clear and timely communication helps foster a strong relationship with our users, ensuring that you are equipped with the knowledge and resources necessary for a successful experience on the platform.</li>

                    <li><strong>Legal and Security Purposes: </strong>We use your data for legal and security purposes to ensure the integrity and safety of EduCreate. This includes implementing measures to prevent misuse of our platform and protect against unauthorized access or fraudulent activities. By monitoring user interactions and employing robust security protocols, we work diligently to maintain a secure environment for all users. Additionally, we comply with applicable regulations and legal requirements, ensuring that your data is handled responsibly and ethically. This commitment to legal and security standards not only safeguards your information but also reinforces our dedication to providing a trustworthy and reliable platform for all educational endeavors.</li>
                </ol>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">3. Third-Party Services</h1>
                <p className="text-md mt-2">EduCreate relies on trusted third-party services to enhance the functionality and security of our platform:</p>
                <ol className="flex flex-col list-decimal list-inside items-start justify-start gap-3 text-sm mt-5">
                    <li>
                        <strong>Clerk:</strong> Clerk is responsible for managing user accounts and authentication on EduCreate. By utilizing Clerk, we ensure that your account setup and sign-in processes are secure and efficient. This service allows us to focus on providing you with a seamless user experience, minimizing any hurdles during account management and access.
                    </li>

                    <li>
                        <strong>Stripe:</strong> We use Stripe to process payments securely for course enrollments and other transactions. Stripe complies with Payment Card Industry (PCI) standards, which means that your payment information is handled with the highest levels of security and privacy. By relying on Stripe, we can guarantee a smooth transaction process while keeping your financial data protected.
                    </li>

                    <li>
                        <strong>Deepgram API:</strong> The Deepgram API provides advanced text-to-speech functionality for course narration. This service enables us to convert written content into natural-sounding audio, enhancing the learning experience for users who prefer auditory learning. By integrating Deepgram, we can offer a more dynamic and engaging approach to course material.
                    </li>

                    <li>
                        <strong>GPT API:</strong> We leverage the GPT API for generating content within EduCreate. This powerful tool allows us to assist you in creating high-quality educational materials by providing suggestions and generating text based on your input. The incorporation of GPT enhances the creativity and efficiency of content creation, empowering you to deliver exceptional courses.
                    </li>

                    <li>
                        <strong>MoviePy:</strong> MoviePy is utilized for video generation on our platform. By employing MoviePy, we can produce professional-quality videos that incorporate your course content, making learning more visually appealing. This tool allows for the editing and compilation of video materials, enhancing the overall educational experience.
                    </li>

                    <li>
                        <strong>Cloudinary:</strong> Cloudinary is our chosen service for securely storing course media, including images and videos. By using Cloudinary, we ensure that all your uploaded media is managed effectively and can be retrieved quickly when needed. This service provides robust security features, ensuring that your content remains safe and accessible.
                    </li>
                </ol>
                <p className="mt-5">These services process data as necessary for EduCreate functionality and adhere to GDPR requirements.</p>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">4. Data Retention</h1>
                <p className="text-md mt-2">
                    Your data is retained as long as necessary for providing services effectively. This means we keep your account and course-related information active while you maintain your account and utilize our features. If you decide to delete your account, all associated data, including course content and personal information, will also be deleted. However, certain information may be retained as required for legal purposes or compliance with applicable regulations. This ensures that we can meet our legal obligations while also respecting your privacy and preferences regarding your data.
                </p>
            </div>


            <div className="mt-10">
                <h1 className="text-2xl font-semibold">5. Your Rights</h1>
                <p className="text-md mt-2">Under the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data:</p>
                <ol className="flex flex-col list-decimal list-inside items-start justify-start gap-3 text-sm mt-5">
                    <li>
                        <strong>Access:</strong> You have the right to request a copy of your data that we hold. This includes personal information, course content, and any other data processed during your use of EduCreate. We are committed to providing this information in a timely manner to ensure transparency in how your data is managed.
                    </li>

                    <li>
                        <strong>Correct:</strong> If you identify any inaccuracies in your data, you have the right to request corrections. This ensures that your information remains accurate and up-to-date, allowing us to provide you with the best possible service and experience.
                    </li>

                    <li>
                        <strong>Erase:</strong> You can request the deletion of your personal data, subject to any legal retention requirements we must fulfill. We respect your decision to remove your information and will act on your request promptly, ensuring that your data is handled according to your preferences.
                    </li>

                    <li>
                        <strong>Portability:</strong> You have the right to receive a machine-readable copy of your data. This means that you can easily transfer your information to another service if you choose to do so, allowing for greater control over your data.
                    </li>

                    <li>
                        <strong>Withdraw Consent:</strong> At any time, you can update or withdraw your consent for us to process your data. We are committed to respecting your choices and will ensure that your preferences are taken into account regarding data processing.
                    </li>
                </ol>
                <p className="mt-1">To exercise any of your rights, please contact us at <a href="mailto:info@educreate.com" className="text-blue-500 underline">info@educreate.com</a>. We are here to assist you with any questions or requests you may have.</p>
            </div>


            <div className="mt-10">
                <h1 className="text-2xl font-semibold">6. Security Measures</h1>
                <p className="text-md mt-2">At EduCreate, we prioritize the security of your personal data. To safeguard your information, we employ a combination of advanced security measures, including:</p>
                <ol className="flex flex-col list-decimal list-inside items-start justify-start gap-3 text-sm mt-5">
                    <li>
                        <strong>Encryption:</strong> We use encryption techniques to protect your data both in transit and at rest. This ensures that your information is converted into a secure format that can only be accessed by authorized personnel.
                    </li>
                    
                    <li>
                        <strong>Access Control:</strong> Access to your personal data is strictly controlled and limited to authorized personnel only. We implement role-based access controls to ensure that individuals can only access the information necessary for their job functions.
                    </li>

                    <li>
                        <strong>Secure Storage:</strong> Your data is stored in secure environments that are protected by physical and technological safeguards. We regularly review and update our storage solutions to ensure they meet the highest security standards.
                    </li>
                </ol>
                <p className="mt-1">These measures are part of our commitment to ensuring that your data remains confidential, secure, and protected from unauthorized access or misuse. We continuously evaluate and improve our security protocols to address evolving threats and maintain a secure environment for all users.</p>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">7. Updates to This Policy</h1>
                <p className="text-md mt-2">At EduCreate, we recognize the importance of keeping our users informed about changes to our Privacy Policy. As part of our commitment to transparency, we may periodically update this policy to reflect changes in our practices, technology, legal requirements, or the services we provide.</p>
                <p className="mt-1">When significant changes are made, we will communicate these updates directly to you. This may include sending notifications via email or posting prominent notices on the platform to ensure you are aware of any modifications that may affect your rights or how your personal data is handled. We encourage you to review our Privacy Policy regularly to stay informed about how we protect your information and your rights as a user.</p>
            </div>


        </main>
    )
}

export default PrivacyPolicyPage;
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="animate-fadeInUp max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Terms of Use & Disclaimer</h1>
            <p className="text-lg text-text-secondary mb-10">Last updated: September 5, 2025</p>

            <div className="card-base p-6 md:p-8 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-text-primary mb-3">1. Respectful Use</h2>
                    <p className="text-text-secondary">By using this platform, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-text-secondary">
                        <li>Communicate respectfully and responsibly.</li>
                        <li>Avoid offensive, discriminatory, threatening, or harassing language.</li>
                        <li>Refrain from posting illegal, abusive, or inappropriate content.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-text-primary mb-3">2. Anonymity & Responsibility</h2>
                    <ul className="list-disc list-inside space-y-2 text-text-secondary">
                        <li>While the app allows anonymity, you are solely responsible for the content you post.</li>
                        <li>The developer of this app does not endorse, review, or verify user-submitted content.</li>
                        <li>Any misuse of anonymity to cause harm, spread hate, or violate university/community rules is strictly prohibited.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-text-primary mb-3">3. Moderation & Reporting</h2>
                    <ul className="list-disc list-inside space-y-2 text-text-secondary">
                        <li>Offensive or harmful content may be removed without notice.</li>
                        <li>Users can reach out to us regarding such complaints through the provided channel.</li>
                        <li>Repeat violators may be blocked from further use.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-text-primary mb-3">4. Disclaimer of Liability</h2>
                    <ul className="list-disc list-inside space-y-2 text-text-secondary">
                        <li>This app is provided “as is,” for student interaction and discussion.</li>
                        <li>The developer is not responsible for user-generated content and disclaims any liability for damage, offense, or consequences arising from such content.</li>
                        <li>Responsibility for posted content rests entirely with the posting user.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-text-primary mb-3">5. Cooperation with Authorities</h2>
                    <p className="text-text-secondary">
                        In cases of serious violations (e.g., harassment, threats, illegal content), the app may log minimal technical information (e.g., timestamps, IP addresses) and cooperate with IISERB authorities or relevant bodies if required.
                    </p>
                </section>

                 <section>
                    <h2 className="text-2xl font-bold text-text-primary mb-3">6. Acceptance of Terms</h2>
                    <p className="text-text-secondary">
                        By accessing or using this app, you confirm that you have read, understood, and agreed to these Terms of Use.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Terms;
